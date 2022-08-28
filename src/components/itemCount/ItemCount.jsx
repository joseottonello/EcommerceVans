import { useState } from "react";
import { ButtonGroup, IconButton, Button, Fab } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ItemCount = ({ initial, stock, onAddCart }) => {
    const [count, setCount] = useState(initial)

    const suma = () => count !== stock && setCount(count + 1)
    const resta = () => count !== initial && setCount(count - 1)

    return (
        <ButtonGroup 
        sx={{display: "flex", flexDirection: "row"}}>
            <IconButton color="error" aria-label="decrease" size="large" onClick={resta}><RemoveCircleIcon/></IconButton>
                <Fab disabled size="medium" color="error" aria-label="add">
                    <h3 color="error" size="large">{count}</h3>
                </Fab>
            <IconButton color="error" aria-label="increase" size="large" onClick={suma}><AddCircleIcon/></IconButton>
            <Button variant="contained" color="error" onClick={()=>onAddCart(count)}>Agregar al carrito</Button>
        </ButtonGroup>
    );
}

export default ItemCount