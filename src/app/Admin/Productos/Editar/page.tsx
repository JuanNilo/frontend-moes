import ContainerAdmin from "@/app/extras/admin/containerAdmin";
import ProductListCard from "@/app/extras/productos/ProductListCard";
import {products} from "@/app/components/data/productos.json";

export default function EditProducto() {
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
                                <ProductListCard key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} stock={producto.stock} tipo={producto.tipo} deleteProduct={false}/>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay productos disponibles</p>
                    )
                }
            </section>
            <div className="w-[100vh] h-[100vh] bg-black text-white">
                <h1>aol</h1>
            </div>
            </div>

        </ContainerAdmin>
    )
}
