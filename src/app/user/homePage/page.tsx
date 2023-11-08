'use client'
import { Colors, Styles } from "@/app/extras/styles";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";

const { primary, secondary, tertiary } = Colors;


const homePage = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const handleEdit = () => {
        console.log('hola')
    }

   
    return (

        /* Rectangulo principal del usuario */
        <div
            style={{ backgroundColor: tertiary }}
            className="my-10 mx-20 rounded-md flex grid-cols-3 gap-4 justify-items-auto p-2"
        >
            <div className="h-[500px] rounded-md flex-auto box-content p-4 cols-span-1">
                {/* Rectangulo datos del usuario */}
                <div
                    style={{ background: primary }}
                    className="h-[95%] w-[350px] rounded-md flex-col relative"
                >
                    {/* Botón de edición */}

                    <button className="absolute top-0 right-0 m-1 p-2"  onClick={() => setEditMode(!editMode)}>
                        <BiEdit className="text-[2rem] fill-white" />
                    </button>
                    {/* Contenedor de la imagen */}
                    <div className="flex items-center justify-center h-[240px] p-4 m-2">
                        <img
                            className="h-full rounded-full ring-white"
                            src="https://media.discordapp.net/attachments/602383815486210058/1161866833469640714/man-with-beard-and-purple-shirt-with-purple-shirt-on-it_745528-3370.png?ex=6539dbcf&is=652766cf&hm=00a3c2d494290a501603e2ec75c398c1e4355b2f3adc3e7ea762d34e7471533a&="
                            alt=""
                        />
                    </div>
                    {/* Especificaciones del usuario */}
                    {editMode ? (
                        <div>
                            <input
                                className="bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center"
                                type="text"
                                value="Nombre"
                            />
                            <input
                                className="bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center"
                                type="text"
                                value="Email"
                            />
                            <input
                                className="bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center"
                                type="text"
                                value="Rut"
                            />
                            <input
                                className="bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center"
                                type="text"
                                value="Ciudad"
                            />
                            <button className='text-sm text-white transition duration-150 hover:bg-[#b6efb0] bg-[#93c47d]  font-bold py-2 px-6 rounded flex items-center justify-center'>Modificar Datos</button>
                        </div>
                    ) : (
                        <div>
                            <a className="bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">Camilonga</a>
                            <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">Camilonga@longa.cl</a>
                            <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">66.666.666-6</a>
                            <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">VallenarCity</a>
                        </div>
                    )}
                </div>
            </div>
            {/* Tabla datos con registro compra*/}
            <div
                style={{ background: primary }}
                className="h-[89%] w-[835px] rounded-md overflow-auto cols-span-2 mt-6"
            >
                <table className="w-full text-xl text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xl text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID Compra
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio Total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Productos ?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                01
                            </th>
                            <td className="px-6 py-4">
                                10/10/2010
                            </td>
                            <td className="px-6 py-4">
                                $8000
                            </td>
                            <td className="px-6 py-4">
                                ?
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div >
    );
}

export default homePage;