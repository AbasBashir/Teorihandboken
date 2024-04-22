import { SquareArrowLeft, SquareArrowRight } from "lucide-react";
import BrandLogo from '../../assets/BrandLogo.svg'

function Header({ handleNavbar, navbarStatus }) {

    return (
        <div className='sticky top-0 sm:relative bg-[#ffffff] border-b-[3px] border-[#000000] shadow-md'>
            <div className=" sm:w-fit flex items-center">
                <button className="ml-4 relative top-[1.2px] cursor-pointer sm:hidden" onClick={handleNavbar}>
                    {navbarStatus ? <SquareArrowRight className="w-7 h-7 " style={{ stroke: '#000000' }}/> : <SquareArrowLeft className="w-7 h-7" style={{ stroke: '#000000' }}/>}
                </button >
                <span className="w-full py-3 ml-5 sm:ml-0 sm:pl-5">
                    <img src={BrandLogo} alt="" className="w-15 h-8 mx-auto sm:mx-none sm:h-9"/>
                </span>
            </div>
        </div>  
    )
}

export default Header
