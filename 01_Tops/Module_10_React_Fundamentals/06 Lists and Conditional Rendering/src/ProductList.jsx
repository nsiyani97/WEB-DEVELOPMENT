const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mobile", price: 20000, inStock: false },
  { id: 3, name: "Headphones", price: 3000, inStock: true },
];

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          {/* Conditional Rendering */}
          {product.inStock ? <button>Buy Now</button> : <p style={{ color: "red" }}>Out of Stock</p>}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
