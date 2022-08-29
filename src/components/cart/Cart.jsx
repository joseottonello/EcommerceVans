import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import cartContext from "../../context/CartContext";
import { createBuyOrder } from "../../service/firestore";
import './cart.scss';

const Cart = () => {
    const {cart, removeToCart, totalCart, clearCart} = useContext(cartContext);

    function handleBuyOrderInCart() {
        const dataOrder = {
            buyer: {
                name: "José Ottonello",
                phone: "123123121235",
                email: "ottonellojose@gmail.com"
            },
            items: cart,
            total: totalCart()
        }

        createBuyOrder(dataOrder)
            .then(() => {
                clearCart();
                totalCart() === 0
                ? Swal.fire({
                    icon: 'error',
                    title: 'Aun no hay productos en el carrito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                : Swal.fire({
                    icon: 'success',
                    title: 'Tu compra se realizo con exito',
                    showConfirmButton: false,
                    timer: 2500
                  })
            })
        }

    return (
        <div className="cart-container">
            { cart.map((item) => 
                <section 
                key={item.id} 
                className="cart-container-listProducts">
                    <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-container-listProducts-image"/>
                    <article className="cart-container-text">
                        <h2>{item.name}</h2>
                        <p> Productos seleccionados: {item.cantidad} </p>
                        <p> Valor unitario: ${item.price} </p>
                        <p> Valor total: ${item.price * item.cantidad} </p>
                    </article>
                    <article className="cart-container-action">
                        <Link  to="/"><Button  variant="outlined" color="error" startIcon={<ArrowBackIosIcon />}>Inicio</Button></Link>
                        <Button  variant="contained" color="error" onClick={() => removeToCart(item.id)} startIcon={<DeleteIcon />}>Eliminar</Button>
                    </article>
                </section>)
            }
            <section className="cart-container-total">
                {
                    totalCart() === 0
                    ? <div className="cart-container-total-alert">
                        <Alert variant="filled" severity="error">¡Parece que no hay nada en el Carrito!</Alert>
                        <Link  to="/"><Button variant="contained" color="error">Volver al inicio</Button></Link>
                    </div>
                    : <section className="cart-container-total-finalizar">
                        <h1>Total a pagar: ${Number(totalCart().toFixed(2))}</h1>
                        <div className="cart-container-total-finalizar-action">
                            <Button variant="outlined" color="error" startIcon={<ShoppingBagIcon/>} onClick={handleBuyOrderInCart}>Realizar compra</Button>
                            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={clearCart}>vaciar carrito</Button>
                        </div>
                      </section>
                }
            </section>
        </div>
    )
}

export default Cart