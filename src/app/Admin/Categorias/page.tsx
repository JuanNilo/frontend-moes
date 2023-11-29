'use client'
import { Colors } from "@/app/extras/styles";
import ContainerAdmin from "@/app/extras/admin/containerAdmin";
import {categorias} from "@/app/components/data/categorias.json";
import React,{ useState } from "react"
import ModalDelete from "@/app/extras/admin/modalDelete";

export default function page(){
    const [categoryData, setCategoryData] = useState(categorias)
    const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<string | null>(null);

    
    return(
        <div className="w-[80%] mx-auto">
            <div className="p-4 flex flex-col ">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2">
                    <div className=" overflow-hidden">
                        <table className="min-w-full text-left text-md ">
                            <thead className="border-b text-white text-xl" style={{backgroundColor: Colors.primary}}>
                                <tr>
                                    <th scope="col" className="px-6 py-4">Categoria</th>
                                    <th scope="col" className="px-6 py-4">Editar</th>
                                    <th scope="col" className="px-6 py-4">Eliminar</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                            {categoryData.map((category)=>{
                                return(
                                    <tr key={category.nombre} className="border-b bg-neutral-300 hover:bg-neutral-200">
                                        <td className=" whitespace-nowrap px-6 py-4 font-medium w-[50%]">
                                            {editMode === category.nombre
                                            ? <input type="text" className=" p-1 rounded-md" defaultValue={category.nombre} />
                                            : <p className="p-1">{category.nombre}</p>
                                            }
                                            
                                            </td>
                                        <td className=" whitespace-nowrap w-[25%] px-6 py-4 font-medium">
                                            {
                                                editMode === category.nombre
                                                 
                                                ? <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEditMode(null)}>
                                                    Guardar
                                                </button>
                                                :  <button className=" bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEditMode(category.nombre)}>
                                                Editar
                                            </button>   
                                            }
                                           
                                        </td>
                                        <td className=" whitespace-nowrap px-6 py-4 font-medium">
                                            <button onClick={() => setConfirmDelete(!confirmDelete)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
            }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            {
                confirmDelete
                ?
                <ModalDelete titulo="Eliminar Categoria" texto="¿Estas seguro que deseas eliminar esta categoria?" handleDelete={() => setConfirmDelete(!confirmDelete)} handleCancel={() => setConfirmDelete(!confirmDelete)} />
                : null
            }
            </div>
        </div>
    )
}