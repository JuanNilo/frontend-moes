import Link from 'next/link';
import React from 'react';
export default function OpcionContenida({titulo, link}){
    return(
        <Link href={link} className='block p-2 
        mb-2 hover:bg-orange-100 hover:text-black bg-gray-600  items-center rounded-md w-48'>
            {titulo}
        </Link>
    )
}