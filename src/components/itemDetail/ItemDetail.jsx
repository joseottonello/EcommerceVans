import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { Typography, CardContent, CardActions, Card, Paper, Button } from '@mui/material';
import styles from './detail.module.css';

const ItemDetail = ({ props }) => {
    const {addToCart} = useContext(CartContext);
    
    const [cant, setCant] = useState(0);
    console.log(cant)

    function onAddCart ( cantidad) {
        addToCart(props, cantidad);
        setCant(cantidad);
    }

    return (
        <Card 
        className={styles.container}>
            <Paper>
                <img className={styles.imgDetail} src={props.image} alt={props.name}/>
            </Paper>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">{props.name}</Typography>
                <Typography gutterBottom variant="h4" component="div">${props.price}</Typography>
                <Typography gutterBottom variant="h6" component="div">{props.gender}</Typography>
                <Typography gutterBottom variant="h6" component="div">{props.descriptionDetail}</Typography>
                <CardActions className={styles.actions}>
                    <ItemCount initial={0} stock={props.stock} onAddCart={onAddCart}/>
                    <Link className={styles.link} to="/cart"><Button variant="contained" color="error">Ir al Carrito</Button></Link> 
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ItemDetail