import Swal from 'sweetalert2';
import { useContext } from "react";
import Button from '@mui/material/Button';
import cartContext from "../../context/CartContext";
import { createBuyOrder } from "../../service/firestore";

const Cart = () => {
    const {cart, removeToCart, totalCart, clearCart} = useContext(cartContext);

    function handleBuyOrderInCart() {
        const dataOrder = {
            buyer: {
                name: "José Ottonello",
                phone: "123123121235",
                email: "dev.ottonellojose@gmail.com"
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
        <>
            {
            cart.map((item) => 
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt="" width="100" />
                    </div>
                    <div>
                        <p> {item.name} </p>
                        <p> ${item.price} </p>
                        <p> {item.detail} </p>
                        <p> Productos seleccionados: {item.cantidad} </p>
                        <p> subtotal: ${item.price * item.cantidad} </p>
                    </div>
                    <Button variant="contained" color="error" onClick={() => removeToCart(item.id)} >eliminar producto</Button>
                </div>)
            }
            <span>Total a pagar: ${Number(totalCart().toFixed(2))}</span>
            <Button variant="cowntained" color="primary" onClick={handleBuyOrderInCart}>Realizar compra</Button>
            <Button variant="contained" color="error" onClick={clearCart}>vaciar carrito</Button>
        </>
    )
}

export default Cart