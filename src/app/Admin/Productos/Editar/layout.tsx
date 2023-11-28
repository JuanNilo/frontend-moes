import ContainerAdmin from "@/app/extras/admin/containerAdmin";
import ProductListCard from "@/app/extras/productos/ProductListCard";
import {products} from "@/app/components/data/productos.json";
import { Colors } from "@/app/extras/styles";
import Link from "next/link";
export default function EditProducto({children}) {
    const productos = products;
    
    return(
        <ContainerAdmin>
            <div className="text-center text-4xl p-4">
                <h1>Edit Producto</h1>
            {/* Lista de productos */}
            </div>
            <div className="flex">

            <section className="p-3 w-[80%] mx-auto">
                {
                    productos ? (
                        <ul>
                            {productos.map((producto) => (
                                <Link href={`/Admin/Productos/Editar/${producto.id}`} key={producto.id}>

                                    <ProductListCard key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} stock={producto.stock} tipo={producto.tipo}/>
                                </Link>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay productos disponibles</p>
                    )
                }
            </section>
            <div className="w-[100vh] h-[100vh] text-white p-4 rounded-md m-4"
            style={{backgroundColor: Colors.primary}}>
                {children}
            </div>
            </div>

        </ContainerAdmin>
    )
}
