import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
                <Link to={URLDetail} className="button"><Button variant="contained" color="error">Detail</Button></Link>
            </CardActions>
        </Card>
  )
}

export default Item