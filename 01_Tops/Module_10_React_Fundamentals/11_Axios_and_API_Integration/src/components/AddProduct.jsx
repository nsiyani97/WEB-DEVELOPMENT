import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");

  const addProduct = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        title: title,
        price: 199,
      })
      .then((res) => {
        console.log("Created:", res.data);
        alert("Product added!");
      });
  };

  return (
    <div>
      <input placeholder="Product Name" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
