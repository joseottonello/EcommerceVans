import { useContext } from "react";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import cartContext from "../../context/CartContext";
import "../../assets/scss//navbar/_cartwidget.scss";

const CartWidget = () => {
    const { quantInCart } = useContext(cartContext);

    return (
        <Badge badgeContent={quantInCart()} color="error">
            <Link to="/cart" className="link"><ShoppingCartCheckoutIcon/></Link>
        </Badge>
    )
}

export default CartWidget