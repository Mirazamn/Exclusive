import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";



export function Header() {
    return (
        <>
        <header className="py-[20px]">
            <div className="w-[90%] mx-auto flex items-center justify-between">
                <h2 className="text-[30px] font-[600]">Exclusive</h2>

                <nav className="flex gap-[50px]">
                    <ul className="flex gap-[48px] items-center">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>

                    <div className="flex items-center gap-[17px]">
                        <div className="py-[10px] px-[15px] bg-[#F5F5F5] w-fit flex items-center rounded-[4px]">
                            <input type="text" className="bg-[#F5F5F5] outline-none text-[#000000]" placeholder="Search..."/>
                            <IoIosSearch />
                        </div>

                        <FaHeart className="cursor-pointer" />
                        <FaCartShopping className="cursor-pointer" />
                        <FaUser className="cursor-pointer" />
                    </div>
                </nav>
            </div>
        </header>
        <hr />
        </>
    )
}