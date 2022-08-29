import { useState, useEffect } from "react";
import ItemList from "./itemList/ItemList";
import {useParams} from 'react-router-dom';
import { getProducts, getProductsByCategory } from "../../service/firestore";
import './itemlistcontainer.scss';

const ItemListContainer = () => {  

    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        if(category) {
            getProductsByCategory(category)
                .then((response) => {
                    setProducts(response)
                })
        } else {
            getProducts()
                .then((resolve) => {
                    setProducts(resolve);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }, [category]);

    return (
        <div className="itemlistcontainer">
            <ItemList props={products}/>
        </div>
    )
}

export default ItemListContainer