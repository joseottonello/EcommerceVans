import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../service/firestore";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
`

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
        <Container>
            <ItemDetail props={detail}/>
        </Container>
    )
}

export default ItemDetailContainer