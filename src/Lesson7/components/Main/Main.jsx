import { useState } from "react";
import { carsData, productsData, usersData } from "../../constants/data";
import Navbar from "../Navbar/Navbar";
import "./Main.css";
import "../../medias/mediaMain.css";

const Main = () => {
  const [showCars, setShowCars] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const toggleUsers = () => {
    setShowUsers(true);
    setShowCars(false);
    setShowProducts(false);
  };

  const toggleCars = () => {
    setShowUsers(false);
    setShowCars(true);
    setShowProducts(false);
  };

  const toggleProducts = () => {
    setShowUsers(false);
    setShowCars(false);
    setShowProducts(true);
  };

  return (
    <>
      <Navbar
        toggleUsers={toggleUsers}
        toggleCars={toggleCars}
        toggleProducts={toggleProducts}
      />
      <main>
        {showUsers && (
          <div className="user-container contBox">
            {usersData.map((user, index) => (
              <div key={user.id || index} className="userData-item itemBox">
                <h1>User ID: {index + 1}</h1>
                <h2>Name: {user.name || "Unknown"}</h2>
                <p>Age: {user.age || "N/A"}</p>
                <a href={`mailto:${user.email}`}>E-Mail: {user.email || "N/A"}</a>
                <p>Phone Number: {user.phone || "N/A"}</p>
                <h3>Address: {user.address.city || "No address provided"}</h3>
              </div>
            ))}
          </div>
        )}

        {showCars && (
          <div className="cars-container contBox">
            {carsData.map((car, index) => (
              <div key={car.id || index} className="carsData-item itemBox">
                <h1>Car ID: {index + 1}</h1>
                <img src={car.image} alt={car.model} />
                <h2>Model: {car.make} {car.model}</h2>
                <p>Year: {car.year}</p>
                <p>Color: {car.color}</p>
                <h3>Price: ${car.price.toLocaleString()}</h3>
                <button>BUY</button>
              </div>
            ))}
          </div>
        )}

        {showProducts && (
          <div className="products-container contBox">
            {productsData.map((product, index) => (
              <div key={product.id || index} className="productData-item itemBox">
                <h1>Product ID: {index + 1}</h1>
                <img src={product.image} alt={product.model} />
                <h2>Brand: {product.brand} {product.model}</h2>
                <p>Name: {product.name}</p>
                <h3>Price: ${product.price.toLocaleString()}</h3>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Main;
