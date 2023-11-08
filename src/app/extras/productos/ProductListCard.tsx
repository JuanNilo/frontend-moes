import { AiTwotoneDelete } from "react-icons/ai";

import { Colors } from "../styles";

const {primary, secondary, tertiary} = Colors;

export default function ProductListCard (props) {

    return(
        <div className=" mx-auto m-2 w-[70%] h-[100px]  "
            style={{backgroundColor: primary, color: secondary}}
        >
            <h1>
                {props.nombre}
            </h1>
                <img src={props.imagen} alt=""  className="h-[100%] bg-white"/>
            <p>
                {props.precio}
            </p>
            <button className="bg-purple-500 p-2 rounded-full">
                <AiTwotoneDelete size={40} className=" text-black m-auto"/>

            </button>
        </div>
    )
}