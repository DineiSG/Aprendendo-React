import {NavLink} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/Products" >Products</NavLink>
        <NavLink to="/About" >Sobre</NavLink>
    </nav>
  )
}

export default Navbar
