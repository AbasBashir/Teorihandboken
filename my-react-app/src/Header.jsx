import React,{useState} from "react";
import Navbar from "./Navbar";
import { SquareArrowLeft, SquareArrowRight } from "lucide-react";


function Header() {

    const [navbarStatus, setNavbarStatus] = useState(false);

    const handleNavbar = () =>{
        setNavbarStatus(!navbarStatus) ;
    }

    return (
        <div className='bg-[#6BA368] border-b-[1.5px] border-[#98c897]'>
            <div className=" w-fit flex items-center">
                <button className="ml-4 relative top-[4px] cursor-pointer sm:hidden" onClick={handleNavbar}>
                    {navbarStatus ? <SquareArrowRight className="w-7 h-7 "/> : <SquareArrowLeft className="w-7 h-7"/>}
                </button >
                <h1 className='text-3xl pl-1 py-1.5 text-white font-light sm:pl-10'>Teori<span className='text-black font-semibold italic'>handboken~</span></h1>
            </div>
            
           <div className={`transition-all duration-500 ease-in-out ${navbarStatus ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}>
                <Navbar />
            </div>
        </div>  
    )
}

export default Header
