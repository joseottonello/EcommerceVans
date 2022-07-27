import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { Typography, CardContent, CardActions, Card, Paper, Button } from '@mui/material';
import "../../assets/scss/itemDetail/itemDetail.scss";

const ItemDetail = ({ props }) => {
    const {addToCart} = useContext(CartContext);
    
    const [cant, setCant] = useState(0);

    function onAddCart (cantidad) {
      setCant(cantidad);
      addToCart(props, cantidad);
    }

    return (
        <div className="Detail-Container">
            <Card sx={{width: "50rem"}} className="Detail-Card">
                <Paper className="Detail-Paper">
                    <img className="Detail-IMG" src={props.image} alt={props.name}/>
                </Paper>
                <CardContent className="Detail-Content">
                    <Typography gutterBottom variant="h4" component="div">{props.name}</Typography>
                    <Typography gutterBottom variant="h4" component="div">${props.price}</Typography>
                    <Typography variant="body1" color="text.primary">{props.gender}</Typography>
                    <Typography variant="body2" color="text.secondary">{props.descriptionDetail}</Typography>
                    <CardActions>
                        {
                            cant === 0
                            ? <ItemCount initial={0} stock={props.stock} onAddCart={onAddCart}/>
                            : <Link to="/cart"><Button variant="contained" color="error">Ir al Carrito</Button></Link> 
                        }
                    </CardActions>
                </CardContent>
            </Card>
        </div>
  )
}

export default ItemDetail