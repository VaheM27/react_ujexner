import { useState, useEffect } from "react";
import "./Slider.scss";

const Slider = ({ product }) => {
  const [id, setId] = useState(0);
  const [src, setSrc] = useState(product?.images?.[id]);
  const selectImage = (id) => setId(id);

  useEffect(() => {
    setId(0);
  }, [product]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSrc(product.images[id]);
    }
  }, [id, product]);

  return (
    <div className="slider">
      <div className="slider-top">
        <img src={src} alt={product?.title} />
      </div>
      <div className="slider-bottom">
        {product?.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={product?.title}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
