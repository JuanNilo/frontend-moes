import React from 'react';
import { Colors, primaryColor } from '../extras/styles';
import { products } from "@/app/components/data/productos.json";
import ProductListCard from '../extras/productos/ProductListCard';
const {tertiary} = Colors;

export default function Carro() {

    const productos = products;
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
                            <ProductListCard key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} stock={producto.stock} tipo={producto.tipo}/>
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

