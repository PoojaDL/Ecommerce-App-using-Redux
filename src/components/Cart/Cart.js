import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../Store/cart-reducer";

const Cart = (props) => {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(cartActions.closeCart());
  };

  const cartItems = useSelector((state) => state.cartFunction.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <button className={classes.button} onClick={closeCartHandler}>
        Close Cart
      </button>
    </Card>
  );
};

export default Cart;
