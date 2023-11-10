import { AiTwotoneDelete } from "react-icons/ai";

import { Colors } from "../styles";
import Link from "next/link";

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
        <div className=" mx-auto m-2 w-[100%] h-[15vh] flex px-4 py-2 rounded-lg justify-between"
            style={{ backgroundColor: primary, color: secondary }}
        >
            <Link href={`/productos/${product.id}`} className="h-[100%] min-w-[40%] rounded-md overflow-hidden">

            <img src={product.imagen} alt="" className=" h-[100%] bg-white" />
            </Link>
            <h1>
                {product.nombre}
            </h1>
            <p>
                {product.precio}
            </p>
            <button className="bg-red-500 hover:bg-red-900  text-black hover:text-white  px-3 h-[45%] my-auto rounded-full">
                <AiTwotoneDelete size={30} className="m-auto" />

            </button>
        </div>
    )
}