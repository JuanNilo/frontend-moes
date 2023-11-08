import React from "react";

import { Colors, Styles } from "@/app/extras/styles";
import Link from "next/link";

const { styleButtomPrimary, styleButtomSecondary } = Styles;

const { primary, secondary, tertiary } = Colors;

export default function Login() {
    return (
        /* Contenedor principal */
        <div className="my-16">
            <div
                style={{ backgroundColor: tertiary }}
                className="box-content h-[400px] w-9/12 mx-auto grid grid-cols-3 rounded-md"
            >
                {/*Contenedor de datos a ingresar*/}
                <div
                    style={{ background: primary }}
                    className="h-[90%] w-10/12 rounded-md flex-col relative mx-auto my-auto flex items-center"
                >
                    <h1 style={{ color: tertiary }} className="text-4xl m-4 flex items-center justify-center my-6">Inicio de Sesión</h1>
                    <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Correo Electronico</h2>
                    <input
                        className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-2 w-9/12 rounded-md"
                        type="email"
                        name="email"
                        required
                    />
                    <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Contraseña</h2>
                    <input
                        className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-2 w-9/12 rounded-md"
                        type="password"
                        name="password"
                        required
                    />
                    <button
                        type="submit"
                        className={`${styleButtomPrimary} flex items-center justify-center my-2 mx-auto w-9/12`}
                    >
                        <Link href={'/user/homePage'}>Iniciar Sesión</Link>
                    </button>

                    <button
                        className={`${styleButtomSecondary} flex items-center justify-center my-2 mx-auto w-9/12`}
                    >
                        <Link href={'/user/signin'}>Registrarse</Link>

                    </button>

                </div>
                {/*Contenedor Imagen*/}

                <div
                    className="col-span-2 rounded-r"
                    style={{ backgroundImage: "url('https://media.discordapp.net/attachments/498604686077722655/1171424233230979093/Diseno_sin_titulo.png?ex=655ca0d5&is=654a2bd5&hm=43fcd0fd608d0adf8e767a01ab3a5eff5139e65b2d7694711a124bed3e396c6f&=&width=954&height=468')" }}
                >
                </div>
            </div>
        </div>

    )
}