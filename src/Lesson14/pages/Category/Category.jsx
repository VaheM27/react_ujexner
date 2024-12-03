import ProductBox from "../../components/ProductBox/ProductBox";
import { useLocation } from "react-router-dom";
import "./Category.scss";

export const Category = ({ categoryData, category }) => {
  const location = useLocation();

  return (
    <section className="category">
      <div className="container">
        {categoryData.map((product) => (
          <ProductBox
            product={product}
            key={product?.id}
            path={location.pathname}
          />
        ))}
      </div>
    </section>
  );
};
