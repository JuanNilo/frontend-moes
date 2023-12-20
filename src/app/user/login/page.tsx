import React, { use, useEffect } from "react";

import { Colors, Styles } from "@/app/extras/styles";
import Link from "next/link";
import client from "@/app/components/client";
import { gql } from "@apollo/client";

const { styleButtomPrimary, styleButtomSecondary } = Styles;

const { primary, secondary, tertiary } = Colors;

client
    .query({
        query: gql`
query{
  FIND_PRODUCTS{
    id
    name
    description
    category
    price
    image
  }
} 
`,
    })
    .then((result) => console.log(result));



export default function Login() {
    return (
        /* Contenedor principal */
        <div className="my-16 ">
            <div
                style={{ backgroundColor: tertiary }}
                className="box-content h-[50vh] md:h-[50vh] w-[90%] md:w-9/12 mx-auto grid md:grid-cols-3 rounded-md"
            >
                {/*Contenedor de datos a ingresar*/}
                <div
                    style={{ background: primary }}
                    className="h-[95%] md:h-[90%] w-[95%] md:w-10/12 text-center rounded-md flex-col relative mx-auto my-auto flex items-center"
                >
                    <h1 style={{ color: tertiary }} className="text-4xl m-4 flex items-center justify-center my-6">Inicio de Sesión</h1>
                    <h2 style={{ color: tertiary }} className="text-2xl md:text-xl mx-5 mb-1">Correo Electronico</h2>
                    <input
                        className="py-1.5 bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-2 w-9/12 rounded-md"
                        type="email"
                        name="email"
                        required
                    />
                    <h2 style={{ color: tertiary }} className="text-2xl md:text-xl mx-5 mb-1">Contraseña</h2>
                    <input
                        className="py-1.5 bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-2 w-9/12 rounded-md"
                        type="password"
                        name="password"
                        required
                    />
                    <button
                        type="submit"
                        className={`${styleButtomPrimary} flex text-lg items-center justify-center my-2 mx-auto w-9/12`}
                    >
                        <Link href={'/user/homePage'}>Iniciar Sesión</Link>
                    </button>

                    <button
                        className={`${styleButtomSecondary} flex text-lg items-center justify-center my-2 mx-auto w-9/12`}
                    >
                        <Link href={'/user/signin'}>Registrarse</Link>

                    </button>

                </div>
                {/*Contenedor Imagen*/}

                <div
                    className="col-span-2 rounded-r hidden md:block"
                    style={{ backgroundImage: "url('https://media.discordapp.net/attachments/498604686077722655/1171424233230979093/Diseno_sin_titulo.png?ex=655ca0d5&is=654a2bd5&hm=43fcd0fd608d0adf8e767a01ab3a5eff5139e65b2d7694711a124bed3e396c6f&=&width=954&height=468')" }}
                >
                </div>
            </div>
        </div>

    )
}