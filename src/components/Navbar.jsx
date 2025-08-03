import { CiSearch } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { IoMenuOutline } from "react-icons/io5";
import { FiX } from "react-icons/fi";
function Navbar() {

    return (
        <>
            <div className="fixed top-0 z-50 left-0 w-full ">
                <navbar className="container flex justify-center items-center gap-9 mt-0 p-2 bg-white ">
                 <div> <a href="https://www.apple.com/in" className="hidden text-xl justify-start md:flex  "><FaApple /></a></div> 
                    <div className="hidden md:flex gap-9 text-xs hover:cursor-pointer ">
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>Entertainment</p>
                        <p>Accessories</p>
                        <p>Support</p>
                    </div>
                    <div className="hidden md:flex gap-9 hover:cursor-pointer text-xl drop-shadow-2xl">
                        <CiSearch />
                        <BiShoppingBag />
                    </div>

{/* Mobile View */}
               <div className="container flex justify-between items-center  p-1 text-2xl md:hidden">
                        <div><FaApple /></div>
                        <div className="flex gap-5">
                            <CiSearch />
                             <BiShoppingBag />
                            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
                                <IoMenuOutline className="text-2xl" />
                        
                            </button>
                        </div>
                    </div>
                </navbar>
            </div>
            
        </>
    );
}

export default Navbar;