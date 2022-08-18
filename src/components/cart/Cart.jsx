import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Card, Paper, Button, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import cartContext from "../../context/CartContext";
import { createBuyOrder } from "../../service/firestore";
import styles from './cart.module.css';

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
        <div className={styles.container}>
            <section className={styles.tarjetas}>
                { cart.map((item) => 
                    <Card key={item.id} className={styles.card}>
                        <Paper>
                            <img src={item.image} alt={item.name}/>
                        </Paper>
                        <div className={styles.text}>
                            <h1> {item.name} </h1>
                            <h4> Productos seleccionados: {item.cantidad} </h4>
                            <h3> Valor unitario: ${item.price} </h3>
                            <h3> Valor total: ${item.price * item.cantidad} </h3>
                        </div>
                        <div className={styles.actions}>
                            <Link className={styles.link} to="/"><Button  variant="outlined" color="error" startIcon={<ArrowBackIosIcon />}> Volver al Inicio </Button></Link>
                            <Button  variant="contained" color="error" onClick={() => removeToCart(item.id)} startIcon={<DeleteIcon />}>Eliminar Producto</Button>
                        </div>
                    </Card>)
                }
            </section>
            <section class={styles.totalCompra}>
                {
                    totalCart() === 0
                    ? <div className={styles.vacio}>
                        <Alert variant="filled" severity="error">¡Parece que no hay nada en el Carrito!</Alert>
                        <Link className={styles.link} to="/"><Button variant="contained" color="error">Volver al inicio</Button></Link>
                    </div>
                    : <Card className={styles.total}>
                        <h3>Total a pagar: ${Number(totalCart().toFixed(2))}</h3>
                        <div className={styles.totalButtons}>
                            <Button variant="outlined" color="error" startIcon={<ShoppingBagIcon/>} onClick={handleBuyOrderInCart}>Realizar compra</Button>
                            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={clearCart}>vaciar carrito</Button>
                        </div>
                      </Card>
                }
            </section>
        </div>
    )
}

export default Cart