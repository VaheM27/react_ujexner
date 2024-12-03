import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <div className="loading">Loading...</div>;

  const PrevBtn = () => {
    if (productId > 1) {
      navigate(`/products/${+productId - 1}`);
    }
  };

  const NextBtn = () => {
    navigate(`/products/${+productId + 1}`);
  };

  return (
    <div className="productBox">
      <h1>About This Product</h1>
      <img src={product.images[0]} className="productImage" />
      <h2>Title: {product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>SKU: {product.sku}</p>
      <p>Weight: {product.weight}</p>
      <p>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</p>
      <p>Warranty: {product.warrantyInformation}</p>
      <p>Shipping Info: {product.shippingInformation}</p>
      <p>Availability: {product.availabilityStatus}</p>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Reviewer: {review.reviewerName}</p>
            <p>Date: {new Date(review.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      <div className='btns'>
        <button className='btn' onClick={PrevBtn} disabled={+productId <= 1}>Prev</button>
        <button className='btn' onClick={NextBtn} disabled={+productId >= 30}>Next</button>
      </div>
    </div>
  );
};

export default Product;
