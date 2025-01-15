import React, { useState, useEffect } from "react";
import './App.css';

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      productName: "",
      description: "",
      price: "",
      category: "",
      img: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          rows="4"
        ></textarea>
        <label>Price ($)</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          required
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
        </select>
        <label htmlFor="img">Image URL</label>
        <input
          type="url"
          id="img"
          name="img"
          onChange={handleChange}
          placeholder="Enter image URL"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

const ProductDataDisplay = ({ submittedData }) => {
  return (
    <div className="form-data-display">
      {submittedData.length > 0 && (
        <div className="submitted-products">
          {submittedData.map(({ productName, description, price, category, img }, index) => (
            <div className="submitted-product" key={index}>
              <h3>{productName}</h3>
              <p>{description}</p>
              <p>Price: ${price}</p>
              <p>Category: {category}</p>
              {img && <img src={img} alt={productName} />}
              <button onClick={() => alert(`Buying ${productName}`)}>Buy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Card = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Price: ${price}</strong></p>
      <p>Category: {category}</p>
      <p>Rating: {rating.rate} ({rating.count} reviews)</p>
      <button className="buy-btn">Buy</button>
    </div>
  );
};

const ProductsList = () => {
  const data = [
    {
      id: 1,
      title: 'Mobile',
      price: 50000,
      description: 'Mobile',
      category: 'Electronics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLUjQhWiyq8cX8xt2eojwFkCNgYHlorVhUg&s',
      rating: { rate: 5, count: 10 },
    },
    {
      id: 2,
      title: 'Laptop',
      price: 70000,
      description: 'Description for product 2',
      category: 'Electronics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9f2QUbBeNz-y3lQP6Q4mPzes3SX1LiS4yA&s',
      rating: { rate: 3.8, count: 25 },
    }
  ];

  return (
    <div className="product-list-container">
      <h1>Products List</h1>
      <div className="product-list">
        {data.slice(0, 4).map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleProductSubmit = (data) => {
    setSubmittedData((prev) => [...prev, data]);
  };

  return (
    <div className="app">
      <ProductForm onSubmit={handleProductSubmit} />
      <div className="timer-container">
        <Timer duration={30 * 60} />
      </div>
      <ProductDataDisplay submittedData={submittedData} />
      <div className="timer-container">
        <Timer duration={60 * 60} />
      </div>
      <ProductsList />
    </div>
  );
};

export default App;