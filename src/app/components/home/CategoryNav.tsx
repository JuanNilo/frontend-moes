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
            className="h-[80%] w-[70%] mx-auto my-4 rounded-md ">
        {/* Contenido */}
        <ul className="flex w-[80%] h-[100%] justify-center gap-6 mx-auto">
            {dataCategorias.map((categoria )=> (
                <Link href={`/Categorias/${categoria.nombre}`} key={categoria.nombre} className="w-[100px] flex items-center justify-center rounded-md" style={{backgroundColor: tertiary}} >
                    <img className="h-[80%] m-auto" src={categoria.imagen} alt={categoria.nombre}/>
                </Link>
                
            ))}
        </ul>
        </div>
    )
}