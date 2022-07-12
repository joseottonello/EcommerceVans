import { useState } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const suma = () => count !== stock && setCount(count + 1)
    const resta = () => count !== initial && setCount(count - 1)

    return (
        <ButtonGroup sx={{display: "flex", flexDirection: "row"}}>
            <IconButton color="error" aria-label="increase" size="large" onClick={suma}><AddCircleIcon/></IconButton>
            <Badge color="error" badgeContent={count}>
                <Button color="error" size="large" onClick={()=>onAdd(count)}><ShoppingBagIcon/></Button>
            </Badge>
            <IconButton color="error" aria-label="decrease" size="large" onClick={resta}><RemoveCircleIcon/></IconButton>
        </ButtonGroup>
    );
}

export default ItemCount