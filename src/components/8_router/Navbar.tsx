import { Link } from "react-router-dom";
import "../8_router/Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar