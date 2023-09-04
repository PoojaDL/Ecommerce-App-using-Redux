import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../Store/cart-reducer";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(cartActions.closeCart());
  };

  // const cartItems = useSelector((state) => state.cartFunction.items);

  useEffect(() => {
    fetch("https://movie-app-34d2c-default-rtdb.firebaseio.com/cart.json")
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error("Error");
        }
      })
      .then((res) => setCartItems(res.items));
  }, []);

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
