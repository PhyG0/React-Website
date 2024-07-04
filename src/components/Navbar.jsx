// src/components/Navbar.js
import './Navbar.css'
import logo from '../assets/logo.webp'
import '../util/util.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" className="logoImage" />

        <h3 className="brandName poppins-extrabold">Brand</h3>
      </div>
      <ul className="navbar-links poppins-light">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
