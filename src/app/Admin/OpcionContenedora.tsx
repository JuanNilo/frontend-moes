'use client'
import React, { useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";


export default function OpcionContenedora({children, titulo}) {
    const [menuDesplegado, setMenuDesplegado] = useState<boolean>(false);


    return (
        <li>
            <button onClick={() =>  {setMenuDesplegado(!menuDesplegado)}} className="flex items-center justify-between p-2  hover:bg-orange-100 hover:text-black bg-gray-600 rounded-md">
                <div className=" flex justify-between w-48  transition-all duration-500 ease-out">
                    {titulo}
                {
                    menuDesplegado ? <FaArrowAltCircleUp size={30}/> : <FaArrowAltCircleDown size={30} />
                }
                </div>
            </button>
            <ul className="mt-2 ml-4">
                {
                    menuDesplegado ? children : null
                }
            </ul>
        </li>
    );
    }