import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartFunctionActions } from "../../Store/cart-functionality";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const indecrementingItem = {
    id: props.item.id,
    title: props.item.title,
    quantity: props.item.quantity,
    totalPrice: props.item.totalPrice,
    price: props.item.price,
  };
  const quantityIncrementHandler = () => {
    dispatch(cartFunctionActions.increment(indecrementingItem));
  };

  const quantitydecrementHandler = () => {
    dispatch(cartFunctionActions.decrement(indecrementingItem));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={quantitydecrementHandler}>-</button>
          <button onClick={quantityIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
