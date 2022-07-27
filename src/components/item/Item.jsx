import { Link } from "react-router-dom";
import { CardContent, CardActions, CardMedia, Card, Button, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../../assets/scss/item/item.scss";

const Item = ({props}) => {
    const URLDetail = `/item/${props.id}`;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={props.image} alt={props.name}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{props.name}</Typography>
                <Typography variant="body1" color="text.primary">${props.price}</Typography>
                <Typography variant="body1" color="text.primary">{props.gender}</Typography>
                <Typography variant="body2" color="text.secondary">{props.description}</Typography>
            </CardContent>
            <CardActions>
                <Link to={URLDetail} className="Item-Button">
                    <Button variant="contained" color="error">
                        <ShoppingBagIcon/>
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Item