import {products} from "@/app/components/data/productos.json"


export default function Page({params}){
    const productos = products
    
    const {id} = params
    const producto = productos[id-1]
    return(
        <section>
        {
            producto ? 
            (
                <div>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.precio}</p>
                    <p>{producto.stock}</p>
                    <p>{producto.tipo}</p>
                    <img src={producto.imagen} alt="" className=" h-[100%] rounded-md bg-white" />
                </div>
            ) : (
                <p>No hay productos disponibles</p>
                )
            }
            </section>
    )
}