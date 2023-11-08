import React from "react";

import {products} from '@/app/components/data/productos.json'

import { Colors } from "@/app/extras/styles";

const { tertiary, brand } = Colors;

export default function Producto({params}){

    const {id} = params
    const product = products.find((product) => product.id == id);

    if (!product) {
    return <div>Producto no encontrado</div>;
    }

    return (
        <div
            style={{backgroundColor: brand}} 
            className="text-center flex w-[80%] h-[65vh] mx-auto my-10 p-5 rounded-xl shadow-xl ">
            <div className=" rounded-xl overflow-hidden flex justify-center items-center bg-white h-[100%]">
                <img className="h-[90%]"  src={product.imagen} alt={product.nombre} />
            </div>
            {/* Contenido del producto */}
            <div className=" text-center mx-auto">

                <h2 className="text-5xl mb-6 font-bold" style={{ color: "white" }}>
                {product.nombre}
                </h2>
                <h3 className="text-2xl py-3 font-bold" style={{ color: tertiary }}>
                    Categoria: {product.tipo}
                </h3>
                <h4>
                    Precio: {product.precio}
                </h4>
                <h5>
                    Stock: {product.stock}
                </h5>
            </div>
        </div>
    );
}

