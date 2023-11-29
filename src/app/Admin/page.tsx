import React from "react";
import ContainerAdmin from "../extras/admin/containerAdmin";
import Link from "next/link";


export default function Page() {
  return (
    <ContainerAdmin>
      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-4xl font-bold text-center">Bienvenido al panel de administración</h1>
        <p className="text-xl font-bold text-center">¿Qué desea hacer?</p>
        <div className="flex flex-row justify-center items-center">
          <Link href="/Admin/Productos" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Productos
          </Link>
          <Link href="/Admin/Categorias" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Categorias
          </Link>
          <Link href="/Admin/Usuarios" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Usuarios
          </Link>
          <Link href="/Admin/Sucursales" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Sucursales
          </Link>
        </div>
      </div>
    </ContainerAdmin>
  );
}