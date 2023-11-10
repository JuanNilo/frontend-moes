import ListProducts from "../home/ListProducts";
import Slider from "../home/Slider";
import CategoryNav from "../home/CategoryNav";
import { Colors } from "@/app/extras/styles";

export default function HomePage(){

    return(
        <div className=" w-[90%] mx-auto">
            <div className="h-[16vh] mb-8">
                <CategoryNav/>
            </div>
            <div className=" h-[25vh] md:h-[40vh]">
                <Slider/>
            </div>
            <h2 className=" text-3xl mb-6 text-center" style={{color: Colors.tertiary}}>Mas vendidos</h2>
            <ListProducts/>     

        </div>
    )
}