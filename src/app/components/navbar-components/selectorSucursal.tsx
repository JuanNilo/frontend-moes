'use client'
import { Colors } from "@/app/extras/styles";
import { sucursales } from "@/app/components/data/sucursales.json";
import { useSucursalContext } from "@/app/components/context/SucursalContext";
const {primary, secondary, tertiary} = Colors;
import React, {useContext, useEffect} from "react";
import { useQuery, gql } from "@apollo/client";
import client from "@/app/components/client";


interface Sucursal {
    _id: string;
    name: string;
    address: string;
}

export default function SelectoSucursal(){
    
    const {sucursalSeleccionada, seleccionarSucursal} = useSucursalContext();

    const [listaSucursales, setListaSucursales] = React.useState<Sucursal[]>([] as Sucursal[]);

    const handleSeleccionarSucursal =  (event) => {
        const nuevaSucursal = event.target.value;
        seleccionarSucursal(nuevaSucursal);
      };
      useEffect(() => {
       client.query({
            query: gql`
            query{
                FIND_STORES{
                    _id
                    name
                    address
                }
            }`
            ,
        }).then((result) => setListaSucursales(result.data.FIND_STORES));
    }, []);

    return(
        <div className="w-[35%] md:w-[30%]">
            <select id="sucursales" style={{backgroundColor: tertiary}} className=" border text-gray-900 text-md font-bold rounded-full block p-2 w-[100%] md:w-[80%] items-center mx-2 md:mx-10 h-[100%] " value={sucursalSeleccionada || ''} onChange={handleSeleccionarSucursal}>
                <option>Sucursal</option>
                {
                    listaSucursales.map((sucursal : Sucursal) => (
                        <option key={sucursal._id} value={sucursal._id}>
                            {sucursal.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

