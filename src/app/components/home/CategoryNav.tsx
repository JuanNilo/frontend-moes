import React from "react";
import { Colors, Styles } from "@/app/extras/styles";
import { categorias } from "@/app/components/data/categorias.json";
import Link from "next/link";
const {primary, secondary, tertiary} = Colors;

export default function CategoryNav(){

    const dataCategorias = categorias
    return(
        <div 
            style={{backgroundColor: primary}}
            className=" h-[100%] overflow-auto scrollbar-x-hidden w-[100%] mx-auto my-6 rounded-md pt-2 ">
        {/* Contenido */}
        <ul className="flex w-[80%] h-[100%] py-2 justify-center gap-6 mx-auto">
            {dataCategorias.map((categoria )=> (
                <div>

                <Link href={`/Categorias/${categoria.nombre}`} key={categoria.nombre} className="w-[100px] flex items-center justify-center rounded-md" style={{backgroundColor: tertiary}} >
                    <img className="p-2 m-auto" src={categoria.imagen} alt={categoria.nombre}/>
                </Link>
                    <h3 className="text-white font-bold text-center">{categoria.nombre}</h3>
                </div>
                
            ))}
        </ul>
        </div>
    )
}