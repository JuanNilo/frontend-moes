'use client';
import React, { useEffect } from "react";
import { Colors } from "@/app/extras/styles";
import { useSearchParams } from "next/navigation";
export default function Compra(){
    const compraExitosa = true; // Indica si la compra fue exitosa
    const resumenCompra = "Resumen de la compra"; // Resumen de la compra

    const handleLoadProducts = () => {
        // carga los productos desde el localstorage

    }
    const searchParams = useSearchParams();
    const tokenValido = searchParams.get('token_ws');
    const tokenCancelado = searchParams.get('TBK_TOKEN');

    console.log(tokenValido)
    console.log(tokenCancelado)

    console.log(tokenValido, tokenCancelado)
    return(
      <div>
        <h1>
            Compra
        </h1>
      </div>
    )
}