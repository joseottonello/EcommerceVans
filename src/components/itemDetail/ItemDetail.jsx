import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import '../../sass/detail.scss';

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
        data-aos="fade-up"
        data-aos-duration="2000"
        className="detail-container">
            <img 
            alt={props.name}
            src={props.image} 
            className="detail-container-image"/>
            <section className="detail-container-text">
                <h1>{props.name}</h1>
                <p>${props.price}</p>
                <p>{props.gender}</p>
                <p>{props.descriptionDetail}</p>
                <section className="detail-container-action">
                    <ItemCount initial={0} stock={props.stock} onAddCart={onAddCart}/> 
                </section>
            </section>
        </div>
    )
}

export default ItemDetail