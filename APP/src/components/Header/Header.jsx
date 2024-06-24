import Navbar from "../Navbar/Navbar"

function Header() {
    return ( 
    <header className="flex bg-none text-black justify-between ">
        <span>Olá visitante</span>
        <Navbar/>
    </header>
    );
}

export default Header;