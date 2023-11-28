'use client'
import {products} from "@/app/components/data/productos.json"
import {categorias} from "@/app/components/data/categorias.json"
import React,{ useState } from "react"
import { FaSave } from "react-icons/fa"
import Categoria from "@/app/Categorias/[id]/page"

const labelStyle = {
    color: "#fff",
    fontSize: "1.3rem",
    fontWeight: "bold"
}

const inputTextStyle = {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "0.5rem",
    padding: "0.3rem",
}

export default function Page({params}){
    const productos = products
    const [dataCategorias, setDataCategorias] = useState(categorias)
    
    const {id} = params
    const producto = productos[id-1]
    const [nombre, setNombre] = useState(producto.nombre);
    const [precio, setPrecio] = useState(producto.precio);
    const [stock, setStock] = useState(producto.stock);
    const [tipo, setTipo] = useState(producto.tipo);
    const [imagen, setImagen] = useState(producto.imagen);

    
    // funcion que se ejecuta cuando el usuario ingresan datos en el input
    const handleChange = (e:any) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        // console.log(e.target.id)
        switch (e.target.name) {
            case "nombre":
                setNombre(e.target.value)
                break;
            case "precio":
                setPrecio(e.target.value)
                break;
            case "stock":
                setStock(e.target.value)
                break;
            case "tipo":
                setTipo(e.target.value)
                break;
            case "imagen":
                setImagen(e.target.value)
                break;
            default:
                break;
        }
    }
    return(
        <section>
        {
            producto ? 
            (
                <div>
                    <section className="mb-4 flex flex-col">
                        {/* Icono guardar */}
                        <div className="flex items-center justify-between  ">
                            <h1 className="text-3xl text-white mx-auto">Editar Producto</h1>
                            <button className=" rounded-full w-10 h-10 flex items-center justify-center" >
                                <FaSave className="text-5xl hover:text-orange-200 text-white mx-auto" />
                            </button>
                        </div>
                        {/* Input que modifique el nombre del producto */}
                        <label htmlFor="nombre" style={labelStyle}>Nombre:</label>
                        <input type="text" name="nombre" id="nombre" style={inputTextStyle} value={nombre} placeholder={nombre} onChange={handleChange} />
                        
                        {/* Input que modifique el precio del producto */}
                        <label htmlFor="precio" style={labelStyle}>Precio:</label>
                        <input type="number" name="precio" id="precio" style={inputTextStyle} className="text-black" value={precio} placeholder={precio.toString()} onChange={handleChange} />
                        
                        {/* Input que modifique el stock del producto */}
                        <label htmlFor="stock" style={labelStyle}>Stock:</label>
                        <input type="number" name="stock" id="stock" style={inputTextStyle} value={stock} placeholder={stock.toString()} onChange={handleChange} />
                        
                        {/* Selector que contenga las categorias */}
                        <label htmlFor="categoria" style={labelStyle}>Categoria:</label>
                        <select name="categoria" id="categoria" value={tipo} style={inputTextStyle} className="text-black">
                            <option value={tipo}>{tipo}</option>
                            {
                                dataCategorias.map((categoria:any) => (
                                    <option value={categoria.id}>{categoria.nombre}</option>
                                ))
                            }</select>
                        
                        {/* input de la direccion de imagen */}
                        <label htmlFor="imagen" style={labelStyle}>Imagen:</label>
                        <input type="text" name="imagen" id="imagen" style={inputTextStyle} value={imagen} placeholder={imagen} onChange={handleChange} />
                    </section>
                    <section className="w-[60%] mx-auto">
                        <img src={imagen} alt="" className=" h-[100%] rounded-md bg-white" />
                    </section>
                </div>
            ) : (
                <p>No hay productos disponibles</p>
                )
            }
            </section>
    )
}