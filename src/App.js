import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const openCart = useSelector((state) => state.isCartOpen);
  // console.log(openCart);
  return (
    <Layout>
      {openCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
