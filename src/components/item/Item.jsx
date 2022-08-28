import { React, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../sass/item.scss';

const Item = ({props}) => {
    const URLDetail = `/item/${props.id}`;

    useEffect(() => {
        AOS.init()
    }, []) 

    return (
        <div 
        className="item-container">
            <img 
            alt={props.name}
            src={props.image} 
            className="item-container-image"/>
            <section className="item-container-text">
                <h1>{props.name}</h1>
                <p>${props.price}</p>
                <p>{props.gender}</p>
                <p>{props.description}</p>
            </section>
            <section className="item-container-action">
                <Link to={URLDetail}>
                    <Button variant="contained" color="error">
                        <ShoppingBagIcon/>
                    </Button>
                </Link>
            </section>
        </div>
    )
}

export default Item