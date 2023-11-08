import React from "react";
// import ProductCard from "../extras/ui-elements/ProductCard";
import { products } from "./../data/productos.json";
import { Colors } from "@/app/extras/styles";
import Link from "next/link";

const {tertiary, brand} = Colors

const productos = products
export default async function ListProducts() {  

    return (
        <div className="w-[100%] h-[100%] text-center">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-4">
              {productos.map((product )=> (
                <Link href={`/home/productos/${product.id}`} key={product.id} style={{backgroundColor: brand}} className=" text-center rounded-xl">
                  <div className="h-[20%] px-2">
                      <h2 className=" text-lg md:text-xl 2xl:text-2xl py-3 font-bold"
                        style={{color: tertiary}}>
                          {product.nombre}
                      </h2>
                   </div>
                   <div className=" bg-white h-[60%] flex items-center justify-center">
                    <img src={product.imagen} alt="" className="h-[80%]"/>
                   </div>
                   <div className=" h-[20%] flex items-center justify-center font-bold">
                    <p style={{color:"white"}} className="text-xl">
                      Precio: {product.precio}
                    </p>
                   </div>
                </Link>
              ))}
            </ul>
          </div>
    );
}
