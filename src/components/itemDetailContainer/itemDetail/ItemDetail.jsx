import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemCount from "../../itemCount/ItemCount";
import './itemdetail.scss';

const ItemDetail = ({ props }) => {
    const {addToCart} = useContext(CartContext);
    
    const [cant, setCant] = useState(0);
    console.log(cant)

    function onAddCart ( cantidad) {
        addToCart(props, cantidad);
        setCant(cantidad);
    }

    return (
        <div 
        className="itemdetail-container">
            <img 
            alt={props.name}
            src={props.image} 
            className="itemdetail-image"/>
            <section className="itemdetail-text">
                <h1>{props.name}</h1>
                <p>${props.price} {props.gender}</p>
                <p>{props.descriptionDetail}</p>
                <section className="itemdetail-action">
                    <ItemCount initial={0} stock={props.stock} onAddCart={onAddCart}/> 
                </section>
            </section>
        </div>
    )
}

export default ItemDetail