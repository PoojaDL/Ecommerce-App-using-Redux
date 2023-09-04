import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartFunctionActions } from "../../Store/cart-functionality";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const itemToAdd = {
      id: props.id,
      title: props.title,
      price: props.price,
    };
    dispatch(cartFunctionActions.addItem(itemToAdd));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
