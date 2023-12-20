import React from "react";
// import ProductCard from "../extras/ui-elements/ProductCard";
import { products } from "./../data/productos.json";
import { Colors } from "./../../extras/styles";
import Link from "next/link";
import client from "@/app/components/client"
import { gql } from "@apollo/client";
import { useState } from "react";
const { tertiary, brand } = Colors


interface Product
{
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export default async function ListProducts() {

  const product = client.query({
    query: gql`
  query{
    FIND_PRODUCTS{
      _id
      name
      description
      category
      price
      image
    }
  } 
  `,
  }).then((result) => result.data.FIND_PRODUCTS);

  const productos = await product;

  return (
    <div className="w-[100%] h-[100%] text-center">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-4">
        {productos.map((product : Product) => (
          <Link href={`/productos/${product._id}`} key={product._id} style={{ backgroundColor: brand }} className=" text-center rounded-xl">
            <div className="h-[20%] px-2 overflow-hidden">
              <h2 className=" text-2xl md:text-xl 2xl:text-2xl md:py-3 font-bold "
                style={{ color: tertiary }}>
                {product.name}
              </h2>
            </div>
            <div className=" bg-white h-[60%] flex items-center justify-center">
              <img src={product.image} alt="" className="h-[80%]" />
            </div>
            <div className=" h-[20%] flex items-center justify-center font-bold">
              <p style={{ color: "white" }} className="text-xl">
                Precio: {product.price}
              </p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
