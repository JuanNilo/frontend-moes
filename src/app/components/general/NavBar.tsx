import Link from "next/link"
import { AiOutlineUser } from "react-icons/ai"
import { Colors } from './../../extras/styles';
import Logo from "./Logo";
import SelectoSucursal from "../navbar-components/selectorSucursal";
import Carrito from "../navbar-components/Carrito";
import SearchBar from "../navbar-components/Searchbar";


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
        <div className="w-[10%] md:w-[50%] flex justify-end">
          <Carrito/>
          <Link 
            href={'/user/login'} 
            > 
            <div
                style={{backgroundColor: tertiary}}
                className="h-[50px] w-[50px] rounded-full flex cursor-pointer mx-2"
            >
                <AiOutlineUser size={40} className=" text-black m-auto"/>
            </div>
          </Link>
        </div>
        </nav>
    )
}