'use client'
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Colors } from "@/app/extras/styles";
import Link from "next/link";
const { primary, secondary, tertiary } = Colors;

const Carrito = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link
        href={'/carro'} 
        className="h-[50px] w-[50px] rounded-full flex cursor-pointer mx-2"
        style={{ backgroundColor: tertiary }}
      >
        <BsCart2 size={38} className="text-black m-auto" />
      </Link>
      {isOpen && (
        <div
          className="absolute top-14 left-0 w-48 h-80 bg-secondary p-4 z-40"
        >
          <h1 style={{color: tertiary}} className="text-xl font-bold mb-4">Carrito</h1>
          {/* Agrega el contenido del carrito aquí */}
        </div>
      )}
    </div>
  );
};

export default Carrito;