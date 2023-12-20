'use client'
import React from "react";
import { products } from '@/app/components/data/productos.json'
import { useEffect } from "react";
import { Colors } from "@/app/extras/styles";
import { useState } from "react";
import client from "@/app/components/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/navigation";

const { tertiary, brand } = Colors;

interface ProductProps {
    params: {
        id: string;
    };
}


interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}
const Products: React.FC<ProductProps> = ({ params: { id } }) => {
    const router = useRouter();

    const productoVacio = {
        _id: "",
        name: "",
        description: "",
        price: 0,
        category: "",
        image: "",
    };
    const [product, setProduct] = useState<Product>(productoVacio);
    const [cantProducts, setCantProducts] = useState(1);
    const fetchData = async () => {
        try {

            const result = await client.query({
                query: gql`
                query {
                    FIND_PRODUCT(_id: "${id}") {
                        _id
                        name
                        description
                        category
                        price
                        image
                    }
                }
                `,
            });

            setProduct(result.data.FIND_PRODUCT);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleAddCart = () => {

        const newItem = {
            id: id,
            cant: cantProducts
        }
        let currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Busca el item en el carrito
        const existingItem = currentCart.find((item: any) => item.id === newItem.id);
        
        if (existingItem) {
            // Si el item ya existe en el carrito, incrementa la cantidad
            existingItem.cant += newItem.cant;
        } else {
            // Si el item no existe en el carrito, añádelo
            currentCart = [...currentCart, newItem];
        }
        
        // Guarda el carrito actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(currentCart));
        
        router.push('/Carro');

    }

    const handleLessProduct = () => {
        if (cantProducts <= 1) { return }
        else {
            setCantProducts(cantProducts - 1)
        }
    }
    const handleAddProduct = () => {
        setCantProducts(cantProducts + 1);
    }

    return (


        // Contenedor del producto
        <div
            style={{ backgroundColor: brand }}
            className="text-center block md:flex w-[100%] md:w-[80%] h-[60vh] md:h-[45vh] mx-auto my-2  md:my-10 bg-white p-2 md:p-5 rounded-xl shadow-xl overflow-hidden"
        >
            {/* Imagen del producto */}
            <h2 className="text-3xl md:text-5xl mb-6 font-bold md:hidden" style={{ color: "white" }}>
                {product.name}
            </h2>
            <div className="rounded-xl overflow-hidden flex justify-center items-center w-[70%] mx-auto bg-white h-[45%] md:h-[100%] shadow-md shadow-slate-800">
                <img className="h-[90%]" src={product.image} alt={product.name} />
            </div>
            {/* Contenido del producto */}
            <div className="text-center mx-auto w-[80%] h-[90%] md:p-6 pr-2 space-y-5">
                {/* Titulo */}
                <div className=" h-[60%] p-4 hidden md:block">
                    <h2 className="text-5xl mb-6 font-bold" style={{ color: "white" }}>
                        {product.name}
                    </h2>
                </div>
                {/* Categoria */}
                <div className="  h-[5%] flex items-center justify-center w-[70%] mx-auto text-start">
                    <h3 className="text-2xl  font-bold" style={{ color: tertiary }}>
                        Categoria: {product.category}
                    </h3>
                </div>
                {/* Precio y Stock */}
                <div className="  w-[100%] items-center flex h-[10%] ">
                    <div className="w-[50%]  text-xl text-white">
                        <h5 >Stock: aqui deberiamos hacer una fetch</h5>

                    </div>
                    <div className="w-[50%]">

                        <h4 className="text-2xl md:text-3xl font-bold text-white">Precio: ${product.price}</h4>
                    </div>
                </div>
                {/* Botones */}
                <div className="  h-[20%] flex">
                    <div className="w-[50%]">
                        <div className="flex flex-row h-10 w-[50%] md:w-[30%] mx-auto rounded-lg relative bg-transparent mt-1">
                            <button onClick={() => handleLessProduct()} data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" value={cantProducts}></input>
                            <button onClick={() => handleAddProduct()} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <button type="submit" onClick={() => handleAddCart()} className=" flex w-full items-center justify-center rounded-md border border-transparent bg-orange-200 px-8 py-3 text-base font-medium text-black hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Comprar</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

