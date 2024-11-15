import Logo from "..//../assets/Logo/logo.png";



import "./Navbar.css";


const Navbar = () => {
    return(
        <div className="navbar">    
            <div className="logoMain">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1>TheBox</h1>
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;