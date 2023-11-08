import { Colors } from "@/app/extras/styles";
import { products } from "@/app/components/data/productos.json"
import ListProducts from "@/app/components/home/ListProducts";
const {tertiary} = Colors;

export default function Categoria({params}){
    const { id } = params
    const productos = products
    return(
        <div className="text-center py-8">
            <h1 style={{color:tertiary}} className="text-5xl">
                {id}
            </h1>
            <ul className="w-[80%] mt-8 mx-auto">
                {/* {productos.map((product )=> (
                    <li key={product.id}>
                        <h2 className=" text-lg md:text-xl 2xl:text-2xl py-3 font-bold"
                            style={{color: tertiary}}>
                            {product.nombre}
                        </h2>
                        <img src={product.imagen} alt="" className="h-[80%]"/>
                        <p style={{color:"white"}} className="text-xl">
                            Precio: {product.precio}
                        </p>
                    </li>
                ))} */}
            <ListProducts/>     

            </ul>
        </div>
    )
}