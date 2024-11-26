import { useEffect, useState } from "react";
import axios from 'axios';
import "../css/product.css";

interface Product {
  _id: string;
  name: string;
  price: number;
  imagePath: any;
}

function ShowProds () {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/show-products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    fetchProducts();
  }, []);

  const handleClick = async (product: Product) => {
    try {
      const response = await axios.post("http://localhost:5000/add-to-cart", {
        productId: product._id,
        name: product.name,
        price: product.price,
        imagePath: product.imagePath,
      });
      alert(response.data.message); // Notify the user
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <>
      <h1>Product Details</h1>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product._id} className="grid-item">
            <img
              src={`http://localhost:5000${product.imagePath}`}
              alt={product.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h3 id="pName">Name: {product.name}</h3>
            <p id="pPrice">Price: ₹{product.price}</p>
            <button id="cart-btn" onClick={() => handleClick(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowProds;
