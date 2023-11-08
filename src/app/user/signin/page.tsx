'use client'
import React, { useState, useEffect } from "react";

import { Colors, Styles } from "@/app/extras/styles";

import Link from "next/link";
import DatosExtra from "./DatosExtra";

const { styleInput, styleLabel, styleButtomPrimary, styleButtomSecondary } = Styles;

const { primary, secondary, tertiary } = Colors;

function SignIn() {
  const [datosExtra, setDatosExtra] = useState(false);

  const handleRegister = () => {
    setDatosExtra(!datosExtra);
  }

  return (
    /* Contenedor principal */
    <div
      style={{ backgroundColor: tertiary }}
      className="box-content h-[500px] w-9/12 mx-auto my-10 grid grid-cols-5 rounded-md"
    >
      {/* Contenedor Imagen */}
      <div
        className="col-span-2 bg-teal-400 rounded-md overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: "url(https://media.discordapp.net/attachments/498604686077722655/1171420068563910656/White_Brown_Black_World_Whiskey_Day_Social_Media_Graphic.png?ex=655c9cf4&is=654a27f4&hm=fc6be1798dc22a0309d0727e55c0a57bdedaac25fd9e563df98981ab370aaa94&=&width=468&height=468)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
      </div>
      {/* Contenedor registros */}
      <div
        style={{ background: primary }}
        className="h-[90%] w-10/12 rounded-md col-span-3 relative mx-auto my-auto"
      >
        <div className="grid grid-cols-2 flex items-center justify-center ">
          <h1 style={{ color: tertiary }} className="text-4xl m-4 col-span-2 divide-y-5">Registrarse</h1>
          {/* Datos primera columna */}
          <div className="col-span-1 mx-auto ">
            <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Correo Electronico *</h2>
            <input
              className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-5"
              type="text"
              value=""
              name="email"
              required

            />
            <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Contraseña *</h2>
            <input
              className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-5"
              type="text"
              value=""
              name="email"
              required

            />
            <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Nombre</h2>
            <input
              className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-5"
              type="text"
              value=""
              name="email"
              required

            />
          </div>

          {/* Datos segunda columna */}
          <div className="col-span-1 mx-auto">
            <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Rut</h2>
            <input
              className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-5"
              type="text"
              value=""
              name="rut"
              required
            />
            <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Contraseña anterior *</h2>
            <input
              className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-5"
              type="text"
              value=""
              name="rut"
              required
            />
            <h2 style={{ color: tertiary }} className="text-xl mx-5 mb-1">Ciudad</h2>
            <input
              className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-5"
              type="text"
              value=""
              name="rut"
              required
            />
          </div>

        </div>
        {/* Botones */}
        <button
          type="submit"
          className={`${styleButtomPrimary} flex items-center justify-center my-2 mx-auto w-11/12`}
        >
          <Link href={'/user/login'}>Registrarse</Link>

        </button>

        <button
          type="submit"
          className={`${styleButtomSecondary} flex items-center justify-center my-2 mx-auto w-11/12`}
        >
          <Link href={'/'}>Volver</Link>

        </button>
      </div>
    </div >
  );
}

export default SignIn;
