import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../service/firestore";

const ItemDetailContainer = () => {  

    const [detail, setDetail] = useState({});
    const {id} = useParams();
  
    useEffect(() => {
        getProductsById(id)
            .then((response) => {
                setDetail(response);
            })
    }, [id]);

    return (
        <ItemDetail props={detail}/>
    )
}

export default ItemDetailContainer