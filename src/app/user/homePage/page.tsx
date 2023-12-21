'use client'
import client from "@/app/components/client";
import { Colors, Styles } from "@/app/extras/styles";
import { gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";


const { primary, secondary, tertiary } = Colors;

interface Registro {
    _id: string;
    buy_order: string;
    id_user: string;
    email_user: string;
    date: string;
    amount: number;
    id_products: string[];
    name_products: string[];
    quantity_products: number[];
    amount_products: number[];
}
export default function homePage() {
    const router = useRouter();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [display, setDisplay] = useState<boolean>(false);
    const handleEdit = () => {
        console.log('hola')
    }
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [rut, setRut] = useState<string>("");
    const [city, setCity] = useState<string>("");

    const initialCount = {
        _id: '',
        buy_order: '',
        id_user: '',
        email_user: '',
        date: '',
        amount: 0,
        id_products: [],
        name_products: [],
        quantity_products: [],
        amount_products: [],
    };

    const [register, setRegister] = useState<Registro[]>([initialCount]);

    const loadData = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = atob(token);
            const payloadData = JSON.parse(decodedToken); // Convertir la carga útil decodificada a un objeto JSON
            console.log(payloadData); // Imprimir los datos obtenidos del token
            setName(payloadData.name);
            setEmail(payloadData.email);
            setRut(payloadData.rut);
            setCity(payloadData.city);
            setId(payloadData.id);
        }
    }
    const logout = () => {
        console.log('hola')
        localStorage.removeItem("token");
        window.location.href = "/";
        router.push("/");
    }



    // Llamada a la función obtenerRegistros con el id correspondiente
    useEffect(() => {
        loadData();
        const obtenerRegistros = async (id: string) => {
            try {
                const result = await client.query({
                    query: gql`
                  query {
                    FIND_ALL_REGISTER (id_user: "${id}") {
                      _id
                      buy_order
                      id_user
                      email_user
                      date
                      amount
                      id_products
                      name_products
                      quantity_products
                      amount_products
                    }
                  }
                `,
                });
                setRegister(result.data.FIND_ALL_REGISTER);
                console.log(result.data.FIND_ALL_REGISTER);
            } catch (error) {
                console.log(error);
            }
        };
    }, [])
    return (
        <div className="flex flex-col justify-content items-center">

            <div
                style={{ backgroundColor: tertiary }}
                className="my-10 mx-20 w-[1200px] rounded-md flex grid-cols-3 gap-4 justify-items-auto p-2"
            >
                <div className="h-[500px] rounded-md flex-auto box-content p-4 cols-span-1">
                    {/* Rectangulo datos del usuario */}
                    <div
                        style={{ background: primary }}
                        className="h-[95%] w-[40%] min-w-[30vh] rounded-md flex-col relative"
                    >
                        {/* Botón de edición */}

                        <button className="absolute top-0 right-0 m-1 p-2" onClick={() => setEditMode(!editMode)}>
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
                            <div className="flex-wrap w-[90%] mx-auto">
                                <input
                                    className="bg-white dark:bg-gray-800 text-xl text-gray-900  dark:text-gray-400 m-4 w-[90%] flex items-center justify-center placeholder:px-2"
                                    type="text"
                                    placeholder="Nombre"
                                />
                                <input
                                    className="bg-white dark:bg-gray-800 text-xl text-gray-900  dark:text-gray-400 m-4 w-[90%] flex items-center justify-center  placeholder:px-2"
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    className="bg-white dark:bg-gray-800 text-xl text-gray-900  w-[90%] dark:text-gray-400 m-4 flex items-center justify-center  placeholder:px-2"
                                    type="text"
                                    placeholder="Rut"
                                />
                                <input
                                    className="bg-white dark:bg-gray-800 text-xl text-gray-900  w-[90%] dark:text-gray-400 m-4 flex items-center justify-center  placeholder:px-2"
                                    type="text"
                                    placeholder="Ciudad"
                                />
                                <button className='text-sm w-[100%] text-white transition duration-150 hover:bg-[#b6efb0] bg-[#93c47d]  font-bold py-2 px-6 rounded '>Modificar Datos</button>
                            </div>
                        ) : (
                            <div >
                                <a className="bg-white dark:bg-gray-800 text-xl text-gray-900  dark:text-gray-400 m-4 flex items-center justify-center">{name}</a>
                                <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900  dark:text-gray-400 m-4 flex items-center justify-center">{email}</a>
                                <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900  dark:text-gray-400 m-4 flex items-center justify-center">{rut}</a>
                                <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900  dark:text-gray-400 m-4 flex items-center justify-center">{city}</a>
                                <div className="flex flex-col items-center justify-center">
                                    <button
                                        className="text-sm w-[90%] text-white transition duration-150 hover:bg-red-100 bg-red-600 font-bold py-2 px-6 rounded flex items-center justify-center"
                                        onClick={() => { logout() }}
                                    >Cerrar Sesión
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                {/* Tabla datos con registro compra*/}
                <div
                    style={{ background: primary }}
                    className="h-[89%] w-[835px] rounded-md overflow-auto cols-span-2 mt-6  p-5"
                >
                    <table className="w-full text-xl text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xl text-gray-900  dark:text-gray-400">
                            <tr>
                                <th scope="col" className="m-auto">
                                    ID Compra
                                </th>
                                <th scope="col" className="m-auto">
                                    Fecha
                                </th>
                                <th scope="col" className=" m-auto">
                                    Precio Total
                                </th>
                                <th scope="col" className=" m-auto">
                                    Productos
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white overflow-y-scroll h-[44vh]">
                            {register.map((registro: Registro) => (
                                <tr className="bg-white dark:bg-gray-800" key={registro._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {registro.buy_order}
                                    </th>
                                    <td className="px-6 py-4">
                                        {registro.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${registro.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => setDisplay(true)}>
                                            <FaArrowCircleDown size={40} className=" text-gray-400 m-auto" />
                                        </button>
                                    </td>

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>


            </div >
            {display ? (
                <div style={{ backgroundColor: tertiary }}
                    className="my-10 mx-20 w-[1200px] h-[400px] rounded-md flex-col relative">
                    {register.map((registro: Registro) => (
                        <div key={registro._id}>
                            <button className="absolute top-0 right-0 m-1 p-2" onClick={() => setDisplay(false)}>
                                <FaArrowCircleUp size={40} className=" text-black m-auto" />
                            </button>
                            <div></div>
                            {registro.name_products.map((name: string, index: number) => (
                                <a className="bg-white dark:bg-gray-800 text-2xl text-gray-900 dark:text-gray-400 m-4 flex items-allow justify-space-evenly" key={index}>
                                    <span >Producto: {registro.name_products[index]}}</span>
                                    <span>Cantidad: {registro.quantity_products[index]}</span>
                                    <span>Precio: ${registro.amount_products[index]}</span>
                                </a>
                            ))}

                        </div>
                    ))}

                </div>
            ) : (
                <div>
                </div>
            )}
        </div>

    );
};

