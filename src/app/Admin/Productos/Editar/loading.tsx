import { FaSave } from "react-icons/fa"

const labelStyle = {
    color: "#fff",
    fontSize: "1.3rem",
    fontWeight: "bold"
}

const inputTextStyle = {
    backgroundColor: "#fff",
    color: "#000",
    height: "2.1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "0.5rem",
    padding: "0.3rem",
}

export default function Loading(){
    return(
        <div>
        <section className="mb-4 flex flex-col">
            {/* Icono guardaRR*/}
            <div className="flex items-center justify-between  ">
                <h1 className="text-3xl text-white mx-auto">Editar Producto</h1>
                <button className=" rounded-full w-10 h-10 flex items-center justify-center" >
                    <FaSave className="text-5xl hover:text-orange-200 text-white mx-auto" />
                </button>
            </div>
            {/* Input que modifique el nombre del producto */}
            <label htmlFor="nombre" style={labelStyle}>Nombre:</label>
            <input type="number" name="precio" id="precio" style={inputTextStyle} className="text-black" placeholder="cargando..."  />
            
            {/* Input que modifique el precio del producto */}
            <label htmlFor="precio" style={labelStyle}>Precio:</label>
            <input type="number" name="precio" id="precio" style={inputTextStyle} className="text-black" placeholder="cargando..."  />

            
            {/* Input que modifique el stock del producto */}
            <label htmlFor="stock" style={labelStyle}>Stock:</label>
            <input type="number" name="precio" id="precio" style={inputTextStyle} className="text-black" placeholder="cargando..."  />


            {/* Selector que contenga las categorias */}
            <label htmlFor="categoria" style={labelStyle}>Categoria:</label>
            <input type="number" name="precio" id="precio" style={inputTextStyle} className="text-black" placeholder="cargando..."  />


            
            {/* input de la direccion de imagen */}
            <label htmlFor="imagen" style={labelStyle}>Imagen:</label>
            <input type="number" name="precio" id="precio" style={inputTextStyle} className="text-black" placeholder="cargando..."  />


        </section>
        <section className="w-[60%] mx-auto">
            <img src={'https://img.freepik.com/vector-premium/superficie-rayada-redonda-textura-blanca-cubierta-blanda-blanca_547648-928.jpg'} alt="" className=" h-[100%] rounded-md bg-white" />
            {/* <div className="h-[100vh] w-[100vh] rounded-md bg-white"></div> */}

        </section>
    </div>
    )
}