import React from "react";
import { Colors, Styles } from "@/app/extras/styles";


const {styleLabel, styleInput} = Styles;

const {primary} = Colors;


export default function DatosExtra(){
    return(
        <div className="w-[100%] space-y-6">
            <h1 
                className="font-bold"
                style={{color:primary}}
            >Ingrese los siguientes datos para crear la cuenta</h1>
            {/* Nombre */}
            <label
                htmlFor="email"
                className={`${styleLabel}`}
            >
             Nombre
            </label>
            <input 
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className={styleInput}
            />
            {/* Rut */}
            <label
                htmlFor="email"
                className={`${styleLabel}`}
            >
                RUT
            </label>
            <input 
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                required
                className={styleInput}
            />
            {/* Ciudad */}
            <label
                htmlFor="email"
                className={`${styleLabel}`}
            >
                Ciudad
            </label>
            <input 
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className={styleInput}
            />
        </div>

    )
}