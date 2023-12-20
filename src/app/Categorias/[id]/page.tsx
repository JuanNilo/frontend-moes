import React from "react";
import { Colors } from "@/app/extras/styles";
import { products } from "@/app/components/data/productos.json"
import ListProducts from "@/app/components/home/ListProducts";
import { useEffect } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "@/app/components/client";
const {tertiary, brand} = Colors;

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
  }

  interface CategoriaProps{
    params:{
        id: string;
    }
  }

export default async function Categoria  ({params : {id}} : CategoriaProps){
    
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

    return(
        <div className="text-center py-8">
            <h1 style={{color:tertiary}} className="text-5xl">
                {id}
            </h1>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-4">
            {productos.map((product : Product )=> (
                <li>
                {
                    product.category === id 
                ?
                
                (<Link href={`/productos/${product._id}`} key={product._id} style={{backgroundColor: brand}} className=" text-center rounded-xl">
                  <div className="h-[20%] px-2 overflow-hidden">
                      <h2 className=" text-2xl md:text-xl 2xl:text-2xl md:py-3 font-bold "
                        style={{color: tertiary}}>
                          {product.name}
                      </h2>
                   </div>
                   <div className=" bg-white h-[60%] flex items-center justify-center">
                    <img src={product.image} alt="" className="h-[80%]"/>
                   </div>
                   <div className=" h-[20%] flex items-center justify-center font-bold">
                    <p style={{color:"white"}} className="text-xl">
                      Precio: {product.price}
                    </p>
                   </div>
                </Link>) : null
                }
                </li>
              ))}  
            </ul>
        </div>
    )
}