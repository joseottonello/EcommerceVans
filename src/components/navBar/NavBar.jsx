import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import LogoVans from "./LogoVans";
import styles from './navbar.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
    useEffect(() => {
        AOS.init()
    }, [])    

    return (
        <div 
        className={styles.container}
        data-aos="fade-up"
        data-aos-duration="1200">
            <LogoVans/>
            <div className={styles.section}>
                <NavLink className={styles.li} to="/category/classics">Classics</NavLink>
                <NavLink className={styles.li} to="/category/skate">Skate</NavLink>
                <NavLink className={styles.li} to="/category/surf">Surf</NavLink>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar