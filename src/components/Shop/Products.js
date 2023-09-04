import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      title: "Test",
      id: "pooja123",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test2",
      id: "pooja456",
      price: 10,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test3",
      id: "pooja678",
      price: 5,
      description: "This is a first product - amazing!",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
