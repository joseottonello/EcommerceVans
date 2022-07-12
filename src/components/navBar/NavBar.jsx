import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import LogoVans from "./LogoVans";
import FavWidget from "./FavWidget";
import LoginWidget from "./LoginWidget";
import SearchWidget from "./SearchWidget";
import "../../assets/scss/navbar/navbar.scss";

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <LogoVans/>
                <SearchWidget className="search"/>
                <div className="widgets">
                    <FavWidget className="fav"/>
                    <CartWidget className="cart"/>
                    <LoginWidget className="login"/>
                </div>
            </div>
            <div className="navegation">
                <NavLink className="classics" to="/category/classics">Classics</NavLink>
                <NavLink className="skate" to="/category/skate">Skate</NavLink>
                <NavLink className="surf" to="/category/surf">Surf</NavLink>
                <NavLink className="sport" to="/category/sport">Sport</NavLink>
                <NavLink className="urban" to="/category/urban">Urban</NavLink>
            </div>
        </div>
    )
}

export default NavBar