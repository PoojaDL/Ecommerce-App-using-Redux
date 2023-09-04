import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const openCart = useSelector((state) => state.ui.isCartOpen);
  const cart = useSelector((state) => state.cartFunction);

  useEffect(() => {
    setContent("Sending the data to the cart");
    fetch("https://movie-app-34d2c-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    }).then((data) => {
      console.log(data);
      if (data.ok) {
        setContent("Sent cart data successfully");
      } else {
        setContent("Failed to send data to cart");
      }
    });
  }, [cart]);

  return (
    <Fragment>
      <div style={{ width: "100%", height: "50px", background: "pink" }}>
        <p>{content}</p>
      </div>
      <Layout>
        {openCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
