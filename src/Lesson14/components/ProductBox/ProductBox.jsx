import { Link } from "react-router-dom";
import "./ProductBox.scss";

const ProductBox = ({ product, path }) => {
  return (
    <div className="productBox">
      <img src={product?.thumbnail} alt={product?.title} />
      <h2>{product?.title}</h2>
      <Link to={`${path}/${product.id}`}>View Product</Link>
    </div>
  );
};

export default ProductBox;
