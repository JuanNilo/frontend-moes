

'use client';
import React, { useEffect } from "react";
import { Colors } from "@/app/extras/styles";
import { useSearchParams } from "next/navigation";
interface paramsType
{
    id: string;
}

export default function Compra({params }: {params: paramsType}){
    const {id} = params;
    const ordenCompra = id; // Orden de compra
    const compraExitosa = true; // Indica si la compra fue exitosa
    const resumenCompra = "Resumen de la compra"; // Resumen de la compra

    const handleLoadProducts = () => {
        // carga los productos desde el localstorage

    }
    const searchParams = useSearchParams();
    const token = searchParams.get('token_ws');

    console.log(token)
    return(
        <div>
            {compraExitosa && (
                <div style={{backgroundColor: Colors.tertiary}} className=" w-[90%] mx-auto h-[80vh] rounded-lg p-10 mt-10 " >
                    <h1 className="text-center text-4xl"> ¡Compra exitosa!{ordenCompra}</h1>
                    <h2 className="text-center pt-5 text-2xl" >{resumenCompra}</h2>
                    <div className="flex pt-10 justify-center gap-x-10 h-[100%]">
                        <div style={{backgroundColor: Colors.primary}} className="w-[40%] h-[80%] text-white rounded-lg ">
                            <h3 className="text-center text-2xl pt-5">Productos comprados</h3>
                            <ul>
                                {/* Lista de productos comprados */}
                            </ul>
                        </div>
                        <div className="w-[40%] bg-orange-300 h-[80%] rounded-lg">
                            <h3 className="text-center text-xl pt-5">Total</h3>
                            <p className="text-center text-2xl">Total</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}