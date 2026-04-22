import "../styles/navbar.css"
import Logo from "../assets/Nav Logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () => (
    <>
    <Link to="/" spy={true} smooth={true} offset={-70} duration={500} >Home</Link>
    <Link to="/about" spy={true} smooth={true} offset={-70} duration={500} >About</Link>
    <Link to="/music" spy={true} smooth={true} offset={-70} duration={500} >Music</Link>
    <Link to="/videos" spy={true} smooth={true} offset={-70} duration={500} >Videos</Link>
    <Link to="/bookings" spy={true} smooth={true} offset={-70} duration={500} >Booking</Link>
    </>
)


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbarContainer">
            <div className="navbar">
                <ul>
                   <li><Link to="/" spy={true} smooth={true} offset={-70} duration={500} >Home</Link></li> 
                   <li><Link to="/about" spy={true} smooth={true} offset={-70} duration={500} >About</Link></li> 
                   <li><Link to="/music" spy={true} smooth={true} offset={-70} duration={500} >Music</Link></li>
                   <li><Link to="/videos" spy={true} smooth={true} offset={-70} duration={500} >Videos</Link></li> 
                   <li><Link to="/bookings" spy={true} smooth={true} offset={-70} duration={500} >Booking</Link></li> 
                </ul>
                <div className="logo">
                    <a href=""><img src={Logo} alt="" /></a>
                </div>
                <ul>
                    <li><a href="https://open.spotify.com/artist/0orGfqicES8VglKwgfIN7F?si=f1HRW5iRRCOvU33XmkDCKg">Spotify</a></li>
                    <li><a href="https://music.apple.com/us/artist/joshua-israel-pf/1536598482">Apple</a></li>
                    <li><a href="https://www.instagram.com/joshuaisraelpf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                    <li><a href="https://youtube.com/@joshuaisraelpf?si=R201tUM4winvbSe7">Youtube</a></li>
                </ul>
                <div className="navMenu">
                {
                    toggleMenu 
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) } />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="navMenu-container scale-up-center">
                            <div className="navMenu-container-links">
                                <Menu />
                                <div className="navMenu-container-links-social">
                                    <a href="https://open.spotify.com/artist/0orGfqicES8VglKwgfIN7F?si=f1HRW5iRRCOvU33XmkDCKg">Spotify</a>
                                    <a href="#">Apple</a>
                                    <a href="#">Instagram</a>
                                    <a href="#">Youtube</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
        
    )
}