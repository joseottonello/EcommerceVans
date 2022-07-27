import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Card, Button, Alert } from '@mui/material';
import cartContext from "../../context/CartContext";
import { createBuyOrder } from "../../service/firestore";
import "../../assets/scss/cart/cart.scss";

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
                    timer: 1500
                  })
            })
        }

    return (
        <div className="Cart-Container">
            { cart.map((item) => 
                <Card key={item.id} className="Cart-Products">
                    <div>
                        <img className="Cart-IMG" src={item.image} alt={item.name}/>
                    </div>
                    <div className="Cart-Content">
                        <h1> {item.name} </h1>
                        <h4> ${item.price} </h4>
                        <h3> subtotal: ${item.price * item.cantidad} </h3>
                        <h3> Productos seleccionados: {item.cantidad} </h3>
                    </div>
                    <div className="Cart-Action">
                        <Link to="/"><Button className="Cart-Button" variant="contained" color="info">Volver al Inicio</Button></Link>
                        <Button className="Cart-Button" variant="contained" color="error" onClick={() => removeToCart(item.id)} >eliminar producto</Button>
                    </div>

                </Card>)
            }
            {
                totalCart() === 0
                ? <div className="Cart-Finish">
                    <Alert variant="filled" severity="info">¡Parece que no hay nada en el Carrito!</Alert>
                    <Link to="/"><Button variant="contained">Volver al inicio</Button></Link>
                  </div>
                : <div className="Cart-Finish">
                    <h3>Total a pagar: ${Number(totalCart().toFixed(2))}</h3>
                    <Button variant="contained" color="info" onClick={handleBuyOrderInCart}>Realizar compra</Button>
                    <Button variant="contained" color="error" onClick={clearCart}>vaciar carrito</Button>
                 </div>
            }
        </div>
    )
}

export default Cart