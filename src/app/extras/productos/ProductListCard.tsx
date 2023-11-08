import { AiTwotoneDelete } from "react-icons/ai";

import { Colors } from "../styles";

const { primary, secondary, tertiary } = Colors;

interface Product {
    id: number;
    nombre: string;
    imagen: string;
    tipo: string;
    precio: number;
    stock: number;
}
export default function ProductListCard(product: Product) {

    return (
        <div className=" mx-auto m-2 w-[70%] h-[100px]  "
            style={{ backgroundColor: primary, color: secondary }}
        >
            <h1>
                {product.nombre}
            </h1>
            <img src={product.imagen} alt="" className="h-[100%] bg-white" />
            <p>
                {product.precio}
            </p>
            <button className="bg-purple-500 p-2 rounded-full">
                <AiTwotoneDelete size={40} className=" text-black m-auto" />

            </button>
        </div>
    )
}