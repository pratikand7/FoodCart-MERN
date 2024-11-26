import { useEffect, useState } from "react";
import axios from 'axios';
import "../css/cart.css";

interface Product {
    _id: string;
    name: string;
    price: number;
    imagePath: any;
  }
  
  function ShowCart () {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('http://localhost:5000/show-cart');
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };
  
      fetchProducts();
    }, []);

    const handleDelete = async(id:any) =>{
      try {
        await axios.delete(`http://localhost:5000/cart/${id}`);
        setProducts(products.filter((product) => product._id !== id));
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }

    if(products){
        return (
            <>
              <h1 id="cart-h1">Cart Items : <button id="checkout-btn">Checkout</button></h1>
              
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
                    <p>
                    <input type="number" defaultValue={1} id="quantity" />
                    <button id="delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
                    </p>
                  </div>
                ))}
              </div>
            </>
          );
    }else{
        return(<h1>NO ITEMS IN CART.</h1>)
    }

    
    }

    export default ShowCart;