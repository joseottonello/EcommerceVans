import { React, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CardMedia, Button } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 19px;
    box-shadow:  5px 5px 11px #9f9f9f, -5px -5px 11px #ffffff;
`
const Name = styled.h1`
    font-size: 1.2rem;
    font-family: 'Boogaloo', cursive;
`

const Item = ({props}) => {
    const URLDetail = `/item/${props.id}`;

    useEffect(() => {
        AOS.init()
    }, []) 

    return (
        <Container 
        sx={{ maxWidth: 345 }}
        data-aos="fade-up"
        data-aos-duration="1200">
            <CardMedia component="img" sx={{ height: 140, borderRadius: 2 }} image={props.image} alt={props.name}/>
            <div>
                <Name gutterBottom variant="h5" component="div">{props.name}</Name>
                <p>${props.price}</p>
                <p>{props.gender}</p>
                <p>{props.description}</p>
            </div>
            <div>
                <Link to={URLDetail}>
                    <Button variant="contained" color="error">
                        <ShoppingBagIcon/>
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

export default Item