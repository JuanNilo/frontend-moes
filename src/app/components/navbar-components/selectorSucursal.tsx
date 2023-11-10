import { Colors } from "@/app/extras/styles";
import { sucursales } from "@/app/components/data/sucursales.json";
const {primary, secondary, tertiary} = Colors;

const listaSucursales = sucursales

export default function SelectoSucursal(){
    return(
        <div className="w-[35%] md:w-[30%]">
            <select id="sucursales" style={{backgroundColor: tertiary}} className=" border text-gray-900 text-md font-bold rounded-full block p-2 w-[100%] md:w-[80%] items-center mx-2 md:mx-10 h-[100%] " placeholder="Sucursal">
                <option>Sucursal</option>
                {
                    listaSucursales.map((sucursal) => (
                        <option key={sucursal.id}>
                            {sucursal.nombre}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

