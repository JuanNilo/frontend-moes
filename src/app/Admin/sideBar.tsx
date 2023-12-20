
import React from "react";
import OpcionContenedora from "./OpcionContenedora";
import OpcionContenida from "./OpcionContenida";

export default function SideBar() {
    return(
        <aside className=" bg-gray-800 font-bold text-white w-64 min-h-[90vh] p-4">
            <nav>
                <ul className=" space-y-2">
                    <OpcionContenida titulo={'Administracion'} link={'/Admin/'}/>

                    <OpcionContenedora titulo={'Productos'}>
                        <OpcionContenida titulo={'Editar'} link={'/Admin/Productos/Editar'}/>
                        <OpcionContenida titulo={'Agregar'} link={'/Admin/Productos/Agregar'}/>
                        <OpcionContenida titulo={'Eliminar'} link={'/Admin/Productos/Eliminar'}/>   
                    </OpcionContenedora>
                    <OpcionContenedora titulo={'Usuarios'}>
                        <OpcionContenida titulo={'Editar'} link={'/Admin/Usuarios/Editar'}/>
                        <OpcionContenida titulo={'Agregar'} link={'/Admin/Usuarios/Agregar'}/>
                    </OpcionContenedora>
                  
                    <OpcionContenedora titulo={'Sucursales'}>
                        <OpcionContenida titulo={'Editar'} link={'/Admin/Sucursales/Editar'}/>
                        <OpcionContenida titulo={'Agregar'} link={'/Admin/Sucursales/Agregar'}/>
                    </OpcionContenedora>
                   
                    <OpcionContenida titulo={'Categorias'} link={'/Admin/Categorias/'}/>
                </ul>
            </nav>
        </aside>
    )

}