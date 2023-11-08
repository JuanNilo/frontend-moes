import ListProducts from "../home/ListProducts";
import Slider from "../home/Slider";
import CategoryNav from "../home/CategoryNav";


export default function HomePage(){

    return(
        <div className=" w-[90%] mx-auto">
            <div className="h-[15vh]">
                <CategoryNav/>
            </div>
            <div className=" h-[40vh]">
                <Slider/>
            </div>
            <ListProducts/>     

        </div>
    )
}