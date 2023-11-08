import React from 'react';
import { Colors } from '../extras/styles';
import { products } from "@/app/components/data/productos.json";
import ProductListCard from '../extras/productos/ProductListCard';
const {tertiary} = Colors;

export default function Carro() {

    const productos = products;
    return (
        <div className='flex justify-center items-center h-[100%] p-10'>

        <div className=" h-[80vh] w-[80%] text-center p-10 rounded-md shadow-xl overflow-y-scroll"
            style={{backgroundColor: tertiary}}
            >
            <h1
                className='text-4xl font-bold'
            >Carro de compras</h1>
            {productos ? (
                // Renderizar los productos
                <ul>
                    {productos.map((producto) => (
                        // <li key={producto.id}>{producto.nombre}</li>
                        <ProductListCard key={producto.id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio}/>
                    ))}
                </ul>
            ) : (
                // Mostrar mensaje de que no hay productos
                <p>No hay productos disponibles</p>
            )}
        </div>
        </div>
    );
};

