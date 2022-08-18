import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import styled from 'styled-components';

const Img = styled.img`
    width: 150px;
`

const LogoVans = () => {
    return (
        <NavLink to="/">
            <Img src={logo} alt="Vans Store" />
        </NavLink>
    )
}

export default LogoVans