import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './navbar.scss';

const NavBar = () => {
    useEffect(() => {
        AOS.init()
    }, [])    

    return (
        <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="navbar-container">
            <section>
                <NavLink to="/">
                    <img 
                    alt="Vans Store" 
                    className="navbar-container-image"
                    src="data:image/png;base64,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" 
                    />
                </NavLink>
            </section>
            <section className="navbar-container-links">
                <NavLink to="/category/classics">Classics</NavLink>
                <NavLink to="/category/skate">Skate</NavLink>
                <NavLink to="/category/surf">Surf</NavLink>
            </section>
            <CartWidget/>
        </div>
    )
}

export default NavBar