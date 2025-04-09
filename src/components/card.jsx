import { IoIosCart } from "react-icons/io";

export function Card(props) {
    return (
        <div className="rounded-[4px] flex flex-col items-center w-[270px]">
            <img className="w-[190px] py-[15px] px-[40px] bg-[#F5F5F5]" src={props.img} alt={props.name} />
            <button className="bg-[#000] cursor-pointer text-[#fff] flex w-[70%] items-center justify-center gap-[10px]"><IoIosCart />  Add To Cart</button>
            <div className="card-txt flex flex-col items-start">
                <h3>{props.name}</h3>
                <h6>{props.price}$</h6>
            </div>
        </div>
    )

    
}