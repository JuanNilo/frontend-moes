'use client'
import React from 'react';
import { Colors, primaryColor } from '../extras/styles';
import { products } from "@/app/components/data/productos.json";
import ProductListCard from '../extras/productos/ProductListCard';
import { AiTwotoneDelete } from "react-icons/ai";
const {tertiary} = Colors;

export default function Carro() {

    const productos = products;

    const deleteProductHandler = (id) => {
        console.log("delete product", id);
    }
    return (
        <div className='text-center'>
            <h1
                className='text-5xl my-6 mb-8 font-bold text-white'
            >Carro de compras</h1>
        <div className='block md:flex justify-center  h-[100%] md:p-10 pt-0 md:space-x-10'>
        {/* Contenido del carro */}
            <div className=" min-h-[80vh] w-[90%] md:w-[60%] mx-auto text-center md:p-4 rounded-lg  "
                
                >
                {productos ? (
                    // Renderizar los productos
                    <ul>
                        {productos.map((producto) => (
                            <li key={producto.id} className='flex p-2 pl-4 rounded-xl gap-x-2 mb-4' style={{backgroundColor: Colors.primary}}>

                            <ProductListCard key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} stock={producto.stock} tipo={producto.tipo}/>
                            {/* Botones */}
                            

                            <div className="flex flex-row h-10 w-24 mx-auto rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" value="0"></input>
                                <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                            <button className="bg-red-500 hover:bg-red-900  text-black hover:text-white p-3 h-[45%] my-auto rounded-full"
                                onClick={() => deleteProductHandler(producto.id)}
                            >
                                <AiTwotoneDelete size={30} className="m-auto" />
                            </button>
                            </li>
                            
                        ))}
                    </ul>
                ) : (
                    // Mostrar mensaje de que no hay productos
                    <p>No hay productos disponibles</p>
                )}
            </div>
            {/* Resumen de la compra */}
            <div className=" h-[80vh] w-[90%] md:w-[30%] mx-auto text-center p-2 md:p-8 rounded-xl shadow-xl abosolute top-0 right-0"
                style={{backgroundColor: tertiary}}
                >
                
                <div style={{backgroundColor: Colors.primary}} className=" bg-blue text-white h-[100%] rounded-lg shadow-md p-6">
                <h1
                    className='text-4xl pb-6 font-bold'
                >Resumen de la compra</h1>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>$19.99</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Taxes</span>
                            <span>$1.99</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">$21.98</span>
                        </div>
                        <button style={{ backgroundColor: Colors.tertiary}} className=" text-black hover:opacity-60 font-bold py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                    </div>
            </div>
        </div>
        </div>
    );
};

