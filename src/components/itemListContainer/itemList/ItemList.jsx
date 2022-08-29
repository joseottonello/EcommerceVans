import Item from './item/Item';
import './itemlist.scss';

const ItemList = ({props}) => {
    return (
        <div className="itemlist-container">
            {props.map((items) => (
                <Item key={items.id} props={items} />
            ))}
        </div>
    )
}

export default ItemList