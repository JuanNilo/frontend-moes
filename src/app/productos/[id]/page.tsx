import React from "react";

import { products } from '@/app/components/data/productos.json'

import { Colors } from "@/app/extras/styles";

const { tertiary, brand } = Colors;

interface ProductProps {
    params: {
        id: number;
    };
}

interface Product {
    id: number;
    nombre: string;
    imagen: string;
    tipo: string;
    precio: number;
    stock: number;
}

const Products: React.FC<ProductProps> = ({ params }) => {
    const { id } = params;
    const product = products.find((product) => product.id == id);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        // Contenedor del producto
        <div
            style={{ backgroundColor: brand }}
            className="text-center block md:flex w-[100%] md:w-[80%] h-[60vh] md:h-[45vh] mx-auto my-2  md:my-10 bg-white p-2 md:p-5 rounded-xl shadow-xl overflow-hidden"
        >
            {/* Imagen del producto */}
            <h2 className="text-3xl md:text-5xl mb-6 font-bold md:hidden" style={{ color: "white" }}>
                {product.nombre}
            </h2>
            <div className="rounded-xl overflow-hidden flex justify-center items-center w-[70%] mx-auto bg-white h-[45%] md:h-[100%] shadow-md shadow-slate-800">
                <img className="h-[90%]" src={product.imagen} alt={product.nombre} />
            </div>
            {/* Contenido del producto */}
            <div className="text-center mx-auto w-[80%] h-[90%] md:p-6 pr-2 space-y-5">
                {/* Titulo */}
                <div className=" h-[60%] p-4 hidden md:block">
                    <h2 className="text-5xl mb-6 font-bold" style={{ color: "white" }}>
                        {product.nombre}
                    </h2>
                </div>
                {/* Categoria */}
                <div className="  h-[5%] flex items-center justify-center w-[70%] mx-auto text-start">
                    <h3 className="text-2xl  font-bold" style={{ color: tertiary }}>
                        Categoria: {product.tipo}
                    </h3>
                </div>
                {/* Precio y Stock */}
                <div className="  w-[100%] items-center flex h-[10%] ">
                    <div className="w-[50%]  text-xl text-white">
                    <h5 >Stock: {product.stock}</h5>

                    </div>
                    <div className="w-[50%]">

                    <h4 className="text-2xl md:text-3xl font-bold text-white">Precio: ${product.precio}</h4>
                    </div>
                </div>
                {/* Botones */}
                <div className="  h-[20%] flex">
                    <div className="w-[50%]">
                    <div className="flex flex-row h-10 w-[50%] md:w-[30%] mx-auto rounded-lg relative bg-transparent mt-1">
                        <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" value="0"></input>
                        <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                    </div>
                    <div className="w-[50%]">
                    <button type="submit" className=" flex w-full items-center justify-center rounded-md border border-transparent bg-orange-200 px-8 py-3 text-base font-medium text-black hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Comprar</button>
        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

