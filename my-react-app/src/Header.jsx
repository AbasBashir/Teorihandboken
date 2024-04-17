import Navbar from "./Navbar";

function Header() {

    return (
        <div className='bg-[#6BA368] border-b-[1.5px]'>
            <h1 className='text-3xl pl-10 py-1.5 text-white font-light'>Teori<span className='text-black font-semibold italic'>handboken~</span></h1>
            <Navbar></Navbar>
        </div>  
    )
}

export default Header
