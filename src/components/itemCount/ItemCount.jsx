import { useState } from "react";
import { ButtonGroup, IconButton, Button, Badge } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({ initial, stock, onAddCart }) => {
    const [count, setCount] = useState(initial)

    const suma = () => count !== stock && setCount(count + 1)
    const resta = () => count !== initial && setCount(count - 1)

    return (
        <ButtonGroup sx={{display: "flex", flexDirection: "row"}}>
            <IconButton color="error" aria-label="increase" size="large" onClick={suma}><AddCircleIcon/></IconButton>
            <Badge color="error" badgeContent={count}>
                <Button color="error" size="large" onClick={()=>onAddCart(count)}><AddShoppingCartIcon/></Button>
            </Badge>
            <IconButton color="error" aria-label="decrease" size="large" onClick={resta}><RemoveCircleIcon/></IconButton>
        </ButtonGroup>
    );
}

export default ItemCount