

'use client';
import React, { useEffect, useState } from "react";
import { Colors } from "@/app/extras/styles";
import { useSearchParams } from "next/navigation";
import { useSucursalContext } from "@/app/components/context/SucursalContext";
import client from "@/app/components/client";
import { gql, useMutation } from "@apollo/client";
interface paramsType {
    id: string;
}

interface productCart {
    id: string;
    cant: number;
}

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    cant: number;
}



export default function Compra({ params }: { params: paramsType }) {
    const { id } = params;


    const searchParams = useSearchParams();
    const tokenValido = searchParams.get('token_ws');
    const tokenCancelado = searchParams.get('TBK_TOKEN');
    const { sucursalSeleccionada } = useSucursalContext();
    const [productsCart, setProductsCart] = useState<product[]>([]); // Productos en el carrito [id, cant
    const ordenCompra = id; // Orden de compra
    const [compraExitosa, setCompraExitosa] = useState(tokenValido != null); // Indica si la compra fue exitosa
    const resumenCompra = "Resumen de la compra"; // Resumen de la compra

    const handleLoadProducts = () => {
        if (localStorage.getItem('cart') != null) {
            const cartItems = JSON.parse(localStorage.getItem('cart') || '{}');
            cartItems.forEach((product: productCart) => {
                console.log(product)
                fetchDataProduct(product.id, product.cant);
            });
        }

    }

    const fetchDataProduct = async (id: string, cant: number) => {
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
            const productWithQuantity = { ...result.data.FIND_PRODUCT, cant };

            setProductsCart((productsCart) => {
                // Verificar si ya existe un producto con la misma ID
                const productExists = productsCart.some(product => product._id === productWithQuantity._id);

                if (!productExists) {
                    // Si el producto no existe, agregarlo al carrito
                    return [...productsCart, productWithQuantity];
                }

                // Si el producto ya existe, devolver el carrito sin cambios
                return productsCart;
            });
        } catch (error) {
            console.log(error);
        }
    };

    const subTotal = productsCart.reduce((acc, product) => acc + product.price * product.cant, 0);

    const inputs = {
        buy_order: ordenCompra,
        date: "2023-01-01",
        id_user: "19",
        email_user: "cacas@clift.cl",
        amount: subTotal,
        id_products: productsCart.map((product) => product._id),
        name_products: productsCart.map((product) => product.name),
        quantity_products: productsCart.map((product) => product.cant),
        amount_products: productsCart.map((product) => product.price),
    };


    const handleCreateRegister = async () => {

        // quiero crear una lista que contenga los id de los productos

        // quiero crear una lista que contenga los nombres de los productos
        const productsName = productsCart.map((product) => console.log(product.name));
        const fechaActual = new Date();
        console.log(productsName)
        const fecha = fechaActual.getFullYear() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getDate();
        const result = await client.mutate({
            mutation: gql`
                mutation {
                     
        CREATE_REGISTER(input: {
        buy_order: "${ordenCompra}",
        date: "${fecha}",
    id_user: "19",
    email_user:"cacas@clift.cl",
    amount: 500,
    id_products: ["654ae3b31babd5ecad872189", "654ae5561babd5ecad888a7a"],
    name_products: [${productsName}],
    quantity_products: [1, 2],
    amount_products: [20000, 75000]


        }) {
        _id
        buy_order
        date
        id_user
        email_user
        amount
        }
    }
    `});
        console.log(result);

    }


    const handleConfirmarCompra = async (valida: boolean) => {
        if (valida) {
            // Confirma la compra
            console.log("Compra confirmada")
            handleCreateRegister();
            console.log('wololo')
            localStorage.clear();
        } else {
            // Cancela la compra
            console.log(valida)
            console.log("Compra cancelada")
        }
    }



    useEffect(() => {
        handleLoadProducts();
        handleConfirmarCompra(compraExitosa);
    }, [])

    return (
        <div>
            {compraExitosa ? (
                <div style={{ backgroundColor: Colors.tertiary }} className=" w-[90%] mx-auto h-[80vh] rounded-lg p-10 mt-10 " >
                    <h1 className="text-center text-4xl"> ¡Compra exitosa!</h1>
                    <h2 className="text-center pt-5 text-xl">Codigo de Compra
                        <strong> {ordenCompra}</strong>
                    </h2>
                    <div className="flex pt-10 justify-center gap-x-10 h-[100%]">
                        <div style={{ backgroundColor: Colors.primary }} className="w-[40%] h-[90%] text-white rounded-lg overflow-auto ">
                            <h3 className="text-center text-3xl pt-5">Productos comprados</h3>
                            <ul className=" overflow-y-scroll">
                                {productsCart.map((producto: Product) => (

                                    <li key={producto._id} className='flex p-2 pl-4 rounded-xl gap-x-2 mb-4 bg-orange-200 m-4 text-black ' >
                                        <div className="w-[15%]">
                                            <img src={producto.image} alt={producto.name} className="w-[100%] h-[100%] rounded-lg" />
                                        </div>
                                        <div className="w-[80%] flex justify-between items-center px-10">
                                            <h3 className="text-2xl">{producto.name}</h3>
                                            <p className="text-xl">Cantidad: {producto.cant}</p>
                                        </div>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="w-[40%] bg-orange-300 h-[90%] rounded-lg">
                            <h3 className="text-center text-xl pt-5">Total</h3>
                            <p className="text-center text-2xl">Total</p>
                        </div>
                    </div>
                </div>
            )
                : (
                    <div style={{ backgroundColor: Colors.tertiary }} className=" w-[90%] mx-auto h-[80vh] rounded-lg p-10 mt-10 " >
                        <h1 className="text-center text-4xl"> ¡Compra cancelada!{ordenCompra}</h1>
                        <h2 className="text-center pt-5 text-2xl" >La sucursal es{sucursalSeleccionada}</h2>
                        <div className="flex pt-10 justify-center gap-x-10 h-[100%] overflow-x-">
                            <div style={{ backgroundColor: Colors.primary }} className="w-[40%] h-[80%] text-white rounded-lg ">
                                <h3 className="text-center text-2xl pt-5">Productos comprados</h3>
                                <ul>
                                    {/* Lista de productos comprados */}
                                </ul>
                            </div>
                            <div className="w-[40%] bg-orange-300 h-[80%] rounded-lg">
                                <h3 className="text-center text-xl pt-5">Total</h3>
                                <p className="text-center text-2xl">Total</p>
                            </div>
                        </div>
                    </div>
                )

            }
        </div>
    )
}