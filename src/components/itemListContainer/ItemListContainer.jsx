import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import {useParams} from 'react-router-dom';
import { getProducts, getProductsByCategory } from "../../service/firestore";

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
        <ItemList props={products} />
    )
}

export default ItemListContainer