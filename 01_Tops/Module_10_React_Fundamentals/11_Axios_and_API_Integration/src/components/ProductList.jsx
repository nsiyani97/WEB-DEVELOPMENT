import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
