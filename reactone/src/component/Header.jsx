import logo from '../assets/Norton-Horizontal-Dark.png'
import './Header.css'
const Header = () => {
  return (
    <div>
        <div className="Header-main">
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-menus">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Contact">Contact</a></li>
                
            </div>
        </div>
    </div>
  )
}

export default Header