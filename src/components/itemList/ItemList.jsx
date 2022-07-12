import Item from "../item/Item";
import "../../assets/scss/itemList/itemList.scss";

const ItemList = ({props}) => {
    return (
        <div className="containerList">
            {props.map((items) => (
                <Item key={items.id} props={items} />
            ))}
        </div>
    )
}

export default ItemList