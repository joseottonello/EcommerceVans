import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "../../assets/scss//navbar/_logovans.scss";

const LogoVans = () => {
    return (
        <NavLink to="/"><img className="logo" src={logo} alt="Vans Store" /></NavLink>
    )
}

export default LogoVans