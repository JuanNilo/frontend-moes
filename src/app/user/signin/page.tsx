'use client'
import React, { useState, useEffect } from "react";

import { Colors, Styles } from "@/app/extras/styles";

import Link from "next/link";
import DatosExtra from "./DatosExtra";
import { useRouter } from "next/navigation";
import client from "@/app/components/client";
import { gql } from "@apollo/client";

const { styleInput, styleLabel, styleButtomPrimary, styleButtomSecondary } = Styles;

const { primary, secondary, tertiary } = Colors;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rut, setRut] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const router = useRouter();

  const initialCount = {
    success: Boolean,
    messge: String,
    data: String,
  }
  const [signin, setSignin] = useState(initialCount)
  const fetchSignIn = async () => {
    event?.preventDefault();
    console.log(email, password, rut, name, city);
    try {
      const result = await client.mutate({
        mutation: gql`
        mutation{
          SIGNUP_USER (
            input:{
              name:"${name}",
              rut:"${rut}",
              password:"${password}",
              email:"${email}",
              city:"${city}",
            }
          ){
            success
            message
            data
          }
        }
        `,
      });
      setSignin(result.data.LOGIN);
      router.push("/user/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* Contenedor principal */
    <div className="">
      <div
        style={{ backgroundColor: tertiary }}
        className="box-content h-[65vh] w-[95%] md:w-8/12 mx-auto my-10 grid md:grid-cols-3 rounded-md "
      >
        {/* Contenedor Imagen */}
        <div
          className="hidden col-span-1 bg-teal-400 rounded-l overflow-hidden md:flex items-center justify-center"
          style={{ backgroundImage: "url(https://media.discordapp.net/attachments/498604686077722655/1171420068563910656/White_Brown_Black_World_Whiskey_Day_Social_Media_Graphic.png?ex=655c9cf4&is=654a27f4&hm=fc6be1798dc22a0309d0727e55c0a57bdedaac25fd9e563df98981ab370aaa94&=&width=468&height=468)" }}
        >
        </div>
        {/* Contenedor registros */}
        <div
          style={{ background: primary }}
          className="h-[95%] md:h-[90%] w-[95%] md:w-11/12 rounded-md col-span-2 relative mx-auto my-auto "
        >
          <div className="grid grid-cols-2 items-center justify-center ">
            <h1 style={{ color: tertiary }} className="text-4xl m-4 col-span-2 mx-auto">Registrarse</h1>
            {/* Datos primera columna */}
            <div className="col-span-1 mx-auto">
              <h2 style={{ color: tertiary }} className="text-lg md:text-xl mx-3 md:mx-5 mb-1">Correo Electronico *</h2>
              <input
                className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-2 md:mx-5"
                type="email"
                value={email}
                name="email"
                required

                onChange={(e) => setEmail(e.target.value)}

              />
              <h2 style={{ color: tertiary }} className="text-lg md:text-xl mx-3 md:mx-5 mb-1">Contraseña *</h2>
              <input
                className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-2 md:mx-5"
                type="password"
                value={password}
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}

              />

            </div>

            {/* Datos segunda columna */}
            <div className="col-span-1 mx-auto">
              <h2 style={{ color: tertiary }} className="text-lg md:text-xl mx-3 md:mx-5 mb-1">Rut</h2>
              <input
                className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-2 md:mx-5"
                type="text"
                value={rut}
                name="rut"
                required
                onChange={(e) => setRut(e.target.value)}
              />
              <h2 style={{ color: tertiary }} className="text-lg md:text-xl mx-3 md:mx-5 mb-1">Nombre</h2>
              <input
                className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-2 md:mx-5"
                type="text"
                value={name}
                name="rut"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <h2 style={{ color: tertiary }} className="text-lg md:text-xl mx-3 md:mx-5 mb-1">Ciudad</h2>
              <input
                className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 w-10/12 rounded-md mb-5 mx-2 md:mx-5"
                type="text"
                value={city}
                name="rut"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

          </div >
          {/* Botones */}
          <button
            onClick={() => fetchSignIn()}
            type="submit"
            className={`${styleButtomPrimary} text-xl md:text-lgtext-lg flex items-center justify-center my-2 mx-auto w-10/12`}
          >
            Registrarse

          </button>

          <button
            type="submit"
            className={`${styleButtomSecondary} text-lg flex items-center justify-center my-2 mx-auto w-10/12`}
          >
            <Link href={'/user/login'}>Volver</Link>

          </button>
        </div>
      </div >
    </div>

  );
}

export default SignIn;
