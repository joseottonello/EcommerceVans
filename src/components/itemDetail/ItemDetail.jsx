import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cartContext from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import "../../assets/scss/itemDetail/itemDetail.scss";

const ItemDetail = ({ props }) => {

    const {addToCart} = useContext(cartContext)

    const [cant, setCant] = useState(0);
  
    function onAdd (cantidad) {
      setCant(cantidad);
      addToCart(props, cantidad);
    }

    return (
        <div className="container">
            <Card sx={{width: "fit-content", maxWidth: "50rem"}}  className="cardDetail">
                <Paper className="imgContext">
                    <img className="img" src={props.image} alt={props.name}/>
                </Paper>
                <CardContent className="content">
                    <Typography gutterBottom variant="h5" component="div">{props.name}</Typography>
                    <Typography gutterBottom variant="h5" component="div">${props.price}</Typography>
                    <Typography variant="body1" color="text.primary">{props.gender}</Typography>
                    <Typography variant="body2" color="text.secondary">{props.description}</Typography>
                    <CardActions>
                        {
                            cant === 0
                            ? <ItemCount initial={0} stock={props.stock} onAdd={onAdd}/>
                            : <Link to="/cart"><Button variant="contained" color="error">Ir al Carrito</Button></Link>
                        }
                    </CardActions>
                </CardContent>
            </Card>
        </div>
  )
}

export default ItemDetail