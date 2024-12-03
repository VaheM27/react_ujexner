import Slider from "../Slider/Slider";
import "./AboutProduct.scss";

const AboutProduct = ({ product, next, prev }) => {
  return (
    <section className="aboutProduct">
      <div className="navigation">
        <div className="navigation-container">
          <button onClick={prev}>
            <i className="bi bi-chevron-double-left"></i>
          </button>
          <h1>{product?.title}</h1>
          <button onClick={next}>
            <i className="bi bi-chevron-double-right"></i>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="sec-body">
          <div className="sec-body-content">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <span>$ {product?.price}</span>
          </div>
          <Slider product={product} />
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
