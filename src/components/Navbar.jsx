import "../styles/Navbar.css"
import Logo from "../assets/Nav Logo.png"


export default function Navbar() {
    return (
        <nav className="navbarContainer">
            <div className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Booking</a></li>
                </ul>
                <div className="logo">
                    <a href=""><img src={Logo} alt="" /></a>
                </div>
                <ul>
                    <li><a href="#">Spotify</a></li>
                    <li><a href="#">Apple</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
        </nav>
        
    )
}