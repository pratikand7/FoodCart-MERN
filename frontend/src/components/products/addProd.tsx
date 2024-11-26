import { useState } from "react";
import axios from "axios";
import '../css/product.css'

export default function AddCat() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClick = async (e:any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    if (image) {
      formData.append('image', image);
  }

    try {
        await axios.post('http://localhost:5000/add-products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        alert('Product added successfully!');
        setName('');
        setPrice('');
        setImage(null);
    } catch (error) {
        console.error('Error adding product:', error);
    }
};
  return (
    <>
      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1" onSubmit={handleClick}>
            <p className="name">
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                id="name"
              />
            </p>

            <p className="price">
              <input
                name="price"
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </p>

            <p className="text">
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </p>
            <div className="submit">
              <input type="submit" value="SEND" id="button-blue" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
