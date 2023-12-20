import Link from 'next/link';
import React from 'react';
import { FaCircleNotch  } from "react-icons/fa";
export default function OpcionContenida({titulo, link}){
    return(
        <Link href={link} className=' p-2 flex justify-between
        mb-2 hover:bg-orange-100 hover:text-black bg-gray-600  items-center rounded-md w-[93%]'>
            {titulo}
            <FaCircleNotch  size={30}/>
        </Link>
    )
}