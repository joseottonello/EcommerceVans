import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import LogoVans from "./LogoVans";
import { Card } from '@mui/material';
import "../../assets/scss/navbar/navbar.scss";

const NavBar = () => {
    return (
        <Card className="navbar">
            <LogoVans className="logo" />
            <div className="navegation">
                <NavLink className="classics" to="/category/classics">Classics |</NavLink>
                <NavLink className="skate" to="/category/skate"> Skate |</NavLink>
                <NavLink className="surf" to="/category/surf"> Surf</NavLink>
            </div>
            <CartWidget className="cart"/>
        </Card>
    )
}

export default NavBar