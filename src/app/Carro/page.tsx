'use client'
import React, { useEffect } from 'react';
import { Colors, primaryColor } from '../extras/styles';
import { products } from "@/app/components/data/productos.json";
import ProductListCard from '../extras/productos/ProductListCard';
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from 'react';
import client from "@/app/components/client";
import { gql } from "@apollo/client";
const {tertiary} = Colors;

interface Product  {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    cant: number;
}

interface productCart {
    id: string;
    cant: number;
}
export default function Carro() {
    const [productsCart, setProductsCart] = React.useState<Product[]>([]);
    const [buyOrderUser, setBuyOrderUser] = useState('ORD-000001');
    const [urlNueva, setUrlNueva] = useState("");
    const [tokenNuevo, setTokenNuevo] = useState("");
    const [sessionIDUser, setSessionIDUser] = useState("session123");
    const [compraProcesada, setCompraProcesada] = useState(false);
    const [botonConfirmar, setBotonConfirmar] = useState('Confirmar compra');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const loadCart = () => {
        if(localStorage.getItem('cart') != null){
            const cartItems = JSON.parse(localStorage.getItem('cart') || '{}');
            cartItems.forEach((product:productCart) => {
              console.log(product)
              fetchDataProduct(product.id, product.cant);
            });
          }
    }

    const handleConfirmarCompra = () => {
        setBotonConfirmar('Cargando...');
        if(subTotal === 0){
            setErrorMessage('No hay productos en el carrito');
            setError(true);
            setBotonConfirmar('Confirmar compra');
            return;
        }
        setErrorMessage('');
        setError(false);
        //aqui quiero agregar un delay de 3 segundos
        setTimeout(() => {
            const ordetNumber = generateOrderNumber();
            console.log(ordetNumber);
            const returnUrl = `http://localhost:3000/Carro/Compra/${ordetNumber}/`;
            WebpayPlusPage(returnUrl);
            setCompraProcesada(true);
            setBotonConfirmar('Confirmar compra');
        }, 1000);
    }

    useEffect (()=> {
        loadCart();
        generateOrderNumber();
        
      },[]);

      const WebpayPlusPage = async (returnUrl: string) => {
        console.log( 'el monto es ', subTotal)
      try {
        const result = await client.query({
          query: gql`
          query {
            INIT_TRANSACTION(
              input: {
                buyOrder: "${buyOrderUser}",
          sessionId: "${sessionIDUser}",
          amount: ${subTotal},
          returnUrl: "${returnUrl}",
              }
            ) 
            {
              token
              url
            }
          }
        
        `
        });
    
        // Maneja el resultado según tus necesidades
        const { url, token } = result.data.INIT_TRANSACTION;
        setUrlNueva(url);
        setTokenNuevo(token);
      } catch (error) {
        console.error('el Webpay tiene un errro ',error);
      }
    };
        

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
          const productWithQuantity = {...result.data.FIND_PRODUCT, cant};
          
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

    const deleteProductHandler = (id : string) => {
        let currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

        const updatedCart = currentCart.filter((item:productCart) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setProductsCart([...updatedCart]);
        window.location.reload();
    }

    const subTotal = productsCart.reduce((acc, product) => acc + product.price * product.cant, 0);
    // Seccion de pago transbank
    const generateOrderNumber = (): string => {
        const randomNumber = Math.floor(Math.random() * 1000000) + 1;
        const orderNumber = `ORD-${randomNumber.toString().padStart(6, '0')}`;
        
        return orderNumber;
    };

    return (
        <div className='text-center'>
            <h1
                className='text-5xl my-6 mb-8 font-bold text-white'
            >Carro de compras</h1>
        <div className='block md:flex justify-center  h-[100%] md:p-10 pt-0 md:space-x-10'>
        {/* Contenido del carro */}
            <div className=" min-h-[80vh] w-[90%] md:w-[60%] mx-auto text-center md:p-4 rounded-lg  "
                
                >
                {productsCart ? (
                    // Renderizar los productos
                    <ul>
                        {productsCart.map((producto : Product) => (
                            
                            <li key={producto._id} className='flex p-2 pl-4 rounded-xl gap-x-2 mb-4' style={{backgroundColor: Colors.primary}}>

                            <ProductListCard _id={producto._id} name={producto.name} image={producto.image} price={producto.price} description={producto.description}  category={producto.category}/>
                            {/* Botones */}
                            
                            {/* Input de cantidad del producto */}
                            <div className="flex flex-row h-10 w-24 mx-auto rounded-lg relative bg-transparent mt-1">
                                
                                <input
                                    type="number"
                                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 rounded-lg"
                                    name="custom-input-number"
                                    value={producto.cant}
                                    readOnly
                                />
                            </div>
                            {/* Boton eliminar */}
                            <button className="bg-red-500 hover:bg-red-900  text-black hover:text-white p-3 h-[45%] my-auto rounded-full"
                                onClick={() => deleteProductHandler(producto._id)}
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
            <div className=" h-[50vh] w-[90%] md:w-[30%] mx-auto text-center p-2 md:p-8 rounded-xl shadow-xl abosolute top-0 right-0"
                style={{backgroundColor: tertiary}}
                >
                
                <div style={{backgroundColor: Colors.primary}} className=" bg-blue text-white h-[100%] rounded-lg shadow-md p-6">
                <h1
                    className='text-4xl pb-6 font-bold'
                >Resumen de la compra</h1>
                        <div className="flex justify-between mb-2">
                            <span>Total</span>
                            <span>${subTotal}</span>
                        </div>
                        
                        { compraProcesada ? 
                        (
                            <form method="post" action= {urlNueva}>
                            <input type="hidden" name="token_ws" value={tokenNuevo} />
                            <input type="submit" value="Pagar" style={{backgroundColor: Colors.tertiary}} className=" text-black hover:opacity-60 font-bold py-2 px-4 rounded-lg mt-4 w-full" />
                            </form>) :
                         (<button onClick={() => handleConfirmarCompra()} style={{ backgroundColor: Colors.tertiary}} className=" text-black hover:opacity-60 font-bold py-2 px-4 rounded-lg mt-4 w-full">{botonConfirmar}</button>)
                            }

                            {error ? (
                                <div className="mt-4 bg-red-100 px-4 py-3 rounded-lg relative" role="alert">
                                    <strong className="font-bold text-red-700 ">Error!</strong>
                                    <span className="block sm:inline text-black"> {errorMessage}</span>
                                </div>
                                    ): null}
                    </div>
            </div>
        </div>
        </div>
    );
};

