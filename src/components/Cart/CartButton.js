import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../Store/cart-reducer";

const CartButton = (props) => {
  const cartLength = useSelector((state) => state.cartFunction.items).length;

  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(cartActions.openCart());
  };

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
