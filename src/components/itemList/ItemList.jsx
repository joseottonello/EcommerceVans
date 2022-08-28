import { lazy, Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import '../../sass/item.scss';
const Item = lazy(() => import('../item/Item'));

const ItemList = ({props}) => {
    return (
        <Suspense fallback={
        <BeatLoader
            size={10}
            color="#c21010"
            cssOverride={{
            display: 'flex',
            justifyContent: 'center',
            margin: '15rem'
        }}
        />}>
            <div 
            className="itemList-container">
                {props.map((items) => (
                    <Item key={items.id} props={items} />
                ))}
            </div>
        </Suspense>
    )
}

export default ItemList