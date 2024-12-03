import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../Routes";
import AboutProduct from "../../components/AboutProduct/AboutProduct";

export const Product = ({ categoryData, category }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const currentIndex = categoryData.findIndex(
      (item) => item?.id === Number(id)
    );
    setIndex(currentIndex);
  }, [id, categoryData]);

  const next = () => {
    const nextIndex = (index + 1) % categoryData.length;
    navigate(
      `/${ROUTES[category.toUpperCase()]}/${categoryData[nextIndex]?.id}`
    );
  };

  const prev = () => {
    const prevIndex = (index - 1 + categoryData.length) % categoryData.length;
    navigate(
      `/${ROUTES[category.toUpperCase()]}/${categoryData[prevIndex]?.id}`
    );
  };

  console.log(categoryData);
  useEffect(() => {
    categoryData.map((item) => {
      if (item?.id === Number(id)) {
        setProduct(item);
      }
    });
  }, [id]);

  return (
    <AboutProduct product={product} next={() => next()} prev={() => prev()} />
  );
};
