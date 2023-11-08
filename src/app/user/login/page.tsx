import React from "react";

import { Colors, Styles } from "@/app/extras/styles";
import Link from "next/link";

const { styleInput, styleLabel, styleButtomPrimary, styleButtomSecondary } = Styles;

const { primary, secondary, tertiary } = Colors;

export default function Login() {
    return (
        /* Contenedor principal */
        <div
            style={{ backgroundColor: tertiary }}
            className="box-content h-[500px] w-9/12 mx-auto my-10 grid grid-cols-3 rounded-md"
        >
            {/*Contenedor de datos a ingresar*/}
            <div
                style={{ background: primary }}
                className="h-[90%] w-[330px] rounded-md flex-col relative mx-auto my-auto flex items-center"
            >
                <h1 className="text-4xl text-gray-900 dark:text-gray-400 m-4 flex items-center justify-center my-6">Inicio de Sesión</h1>
                <a className="text-xl text-gray-900 dark:text-gray-400 flex items-center justify-center">Correo Electronico</a>
                <input
                    className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-4 w-9/12 rounded-md"
                    type="text"
                    value=""
                    name="email"
                    required
                />
                <a className="text-xl text-gray-900 dark:text-gray-400 flex items-center justify-center">Contraseña</a>
                <input
                    className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-4 w-9/12 rounded-md"
                    type="password"
                    value=""
                    name="password"
                    required
                />
                <button
                    type="submit"
                    className={`${styleButtomPrimary} flex items-center justify-center my-3 mx-auto w-9/12`}
                >
                    Iniciar Sesion
                </button>

                <button
                    className={`${styleButtomSecondary} flex items-center justify-center my-3 mx-auto w-9/12`}
                >
                    <Link href={'/user/signin'}>Registrarse</Link>

                </button>

            </div>
            {/*Contenedor Imagen*/}
                
            <div
                className="col-span-2 bg-teal-400 rounded-md"
                style={{ backgroundImage: "url('https://media.discordapp.net/attachments/498604686077722655/1171424233230979093/Diseno_sin_titulo.png?ex=655ca0d5&is=654a2bd5&hm=43fcd0fd608d0adf8e767a01ab3a5eff5139e65b2d7694711a124bed3e396c6f&=&width=954&height=468')" }}
                >
                </div>
        </div>
    )
}