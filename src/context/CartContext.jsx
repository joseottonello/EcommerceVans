import { createContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (props, cantidad) => {
        if (isInCart(props.id)) {
            let addSameProduct = cart.find((product) => product.id === props.id);
            addSameProduct.cantidad += cantidad;
            let removeSameProduct = cart.filter((product) => product.id !== props.id);
            setCart([...removeSameProduct, {...addSameProduct}]);
        } else {
            setCart([...cart, {...props, cantidad}]);
        }
    }

    const removeToCart = (id) => {
        let removeProduct = cart.filter((product) => product.id !== id)
        setCart(removeProduct)
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    const clearCart = () => {
        setCart([]);
    }

    const totalCart = () => {
        let total = 0;
        cart.forEach((product) => (total = total + (product.price * product.cantidad)));
        return total;
    }

    const quantInCart = () => {
        let total = 0;
        cart.forEach((product) => (total = total + product.cantidad));
        return total;
    }

    return (
        <cartContext.Provider value={{cart, addToCart, removeToCart, isInCart, clearCart, totalCart, quantInCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext