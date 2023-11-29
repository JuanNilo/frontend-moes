import Link from "next/link"
import { AiOutlineUser } from "react-icons/ai"
import { Colors } from './../../extras/styles';
import Logo from "./Logo";
import SelectoSucursal from "../navbar-components/selectorSucursal";
import Carrito from "../navbar-components/Carrito";
import SearchBar from "../navbar-components/Searchbar";
import { BsPersonWorkspace } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";

const {primary, tertiary} = Colors;

export default function NavBar() {
    return(
        <nav 
            style={{backgroundColor:primary,color:tertiary}}
            className="w-[100%] h-[15vh] 2xl:h-[10vh] flex items-center px-2 md:px-4"
        >
        {/* Lado derecho */}
        <div className="w-[100%] md:w-[70%] flex">
            <Logo/>
            <SelectoSucursal/>
            <SearchBar /> 
        </div>
        {/* Parte izquierda */}
        <div className="w-[15%] md:w-[50%] flex-wrap md:flex items-center md:justify-end ">
          <Carrito/>
          {/* Pago */}
            <Link 
                href={'/Pago/'} 
                > 
                <div
                    style={{backgroundColor: tertiary}}
                    className="h-[50px] w-[50px] rounded-full mt-2 flex cursor-pointer mx-2"
                >
                    <CiBadgeDollar size={40} className=" text-black m-auto"/>
                </div>
                </Link>
          {/* Menu Admin */}
            <Link 
                href={'/Admin'} 
                > 
                <div
                    style={{backgroundColor: tertiary}}
                    className="h-[50px] w-[50px] rounded-full mt-2 flex cursor-pointer mx-2"
                >
                    <BsPersonWorkspace size={30} className=" text-black m-auto"/>
                </div>
                </Link>
            {/* Menu User */}
          <Link 
            href={'/user/login'} 
            > 
            <div
                style={{backgroundColor: tertiary}}
                className="h-[50px] w-[50px] rounded-full mt-2 flex cursor-pointer mx-2"
            >
                <AiOutlineUser size={40} className=" text-black m-auto"/>
            </div>
          </Link>
        </div>
        </nav>
    )
}