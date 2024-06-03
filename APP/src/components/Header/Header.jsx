import Navbar from "../Navbar/Navbar"

function Header() {
    return ( 
    <header className="flex bg-none text-black p-4 mb-5 justify-between ">
        <span>Olá visitante</span>
        <Navbar/>
    </header>
    );
}

export default Header;