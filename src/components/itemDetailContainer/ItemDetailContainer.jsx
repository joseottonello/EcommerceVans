import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../service/firestore";
import { lazy, Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import './itemdetailcontainer.scss';
const ItemDetail = lazy(() => import('./itemDetail/ItemDetail'));

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
        <Suspense fallback={
            <BeatLoader
                size={5}
                color="#c21010"
                cssOverride={{
                display: 'flex',
                justifyContent: 'center',
                margin: '15rem'
            }}
            />}>
                <div className="itemdetailcontainer">
                    <ItemDetail props={detail}/>
                </div>
        </Suspense>
    )
}

export default ItemDetailContainer