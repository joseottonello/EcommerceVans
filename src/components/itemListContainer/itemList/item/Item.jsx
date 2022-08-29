import { React, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './item.scss';

const Item = ({props}) => {
    const URLDetail = `/item/${props.id}`;

    useEffect(() => {
        AOS.init()
    }, []) 

    return (
        <div 
        data-aos="fade-up"
        data-aos-duration="2000"
        className="item-container">
            <img 
            className="item-container-img" 
            src={props.image} 
            alt={props.name}/>
            <h1>{props.name}</h1>
            <p>${props.price}</p>
            <p>{props.gender}</p>
            <p>{props.description}</p>
            <Link to={URLDetail}>
                <Button variant="contained" color="error">
                    <ShoppingBagIcon/>
                </Button>
            </Link>
        </div>
    )
}

export default Item