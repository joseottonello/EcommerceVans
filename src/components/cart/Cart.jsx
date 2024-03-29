import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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
            <section className="cart-products">
                {
                    cart.map((item) => 
                        <div 
                        key={item.id} 
                        className="cart-product">
                            <img 
                            src={item.image} 
                            alt={item.name}
                            className="cart-image"/>
                            <article className="cart-text">
                                <h2>{item.name}</h2>
                                <p> Productos seleccionados: {item.cantidad} </p>
                                <p> Valor unitario: ${item.price} </p>
                                <p> Valor total: ${item.price * item.cantidad} </p>
                            </article>
                            <article className="cart-action">
                                <Button  variant="contained" color="error" onClick={() => removeToCart(item.id)} startIcon={<DeleteIcon />}>Eliminar</Button>
                            </article>
                        </div>)
                }
            </section>
            <section className="cart-total">
                {
                    totalCart() === 0
                        ? <div className="cart-total-alert">
                            <Alert variant="filled" severity="error">¡Parece que no hay nada en el Carrito!</Alert>
                            <Link  to="/"><Button variant="contained" color="error">Volver al inicio</Button></Link>
                        </div>
                        : <section className="cart-total-finalizar">
                            <h1>Total a pagar: ${Number(totalCart().toFixed(2))}</h1>
                            <div className="cart-total-finalizar-action">
                                <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={clearCart}>vaciar carrito</Button>
                                <Button variant="outlined" color="error" startIcon={<ShoppingBagIcon/>} onClick={handleBuyOrderInCart}>Realizar compra</Button>
                            </div>
                        </section>
                }
            </section>
        </div>
    )
}

export default Cart