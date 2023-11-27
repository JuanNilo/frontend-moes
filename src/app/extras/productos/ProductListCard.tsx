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
        <div className=" mx-auto m-2 w-[70%] h-[15vh] flex px-4 py-2 rounded-lg justify-between"
            style={{ backgroundColor: primary, color: secondary }}
        >
            <Link href={`/productos/${product.id}`} className="h-[100%] min-w-[40%] rounded-md overflow-hidden">

            <img src={product.imagen} alt="" className=" h-[100%] rounded-md bg-white" />
            </Link>
            <div className="block text-center w-[50%]">
                <h2 className="text-2xl font-bold mb-4">
                    {product.nombre}
                </h2>
                <p className="font-bold">
                    {product.precio}
                </p>
            </div>
            
        </div>
    )
}