import { v4 } from "uuid";
import "./Body.scss";

const Body = ({ dataName, data }) => {
  const boxes = (dataName, data) => {
    switch (dataName) {
      case "users":
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Birthdate</th>
                <th>Age</th>
                <th>Address</th>
                <th>Sex</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, i) => {
                return (
                  <tr key={v4()} className={i % 2 ? "light" : "dark"}>
                    <td>{obj.firstName}</td>
                    <td>{obj.lastName}</td>
                    <td>{obj.birthDate}</td>
                    <td>{obj.age}</td>
                    <td>
                      {obj.address?.address}, {obj.address?.postalCode},{" "}
                      {obj.address?.city}
                    </td>
                    <td>{obj.gender}</td>
                    <td>{obj.phone}</td>
                    <td>Email: {obj.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );

      case "posts":
        return (
          <div className="posts">
            {data.map((obj) => {
              return (
                <div key={v4()} className="postBox">
                  <h2>{obj.title}</h2>
                  <p>{obj.body}</p>
                  <div>
                    <span>
                      <i class="bi bi-hand-thumbs-up"></i>{" "}
                      {obj.reactions?.likes}
                    </span>
                    <span>
                      <i class="bi bi-hand-thumbs-down"></i>{" "}
                      {obj.reactions?.dislikes}
                    </span>
                    <span>
                      <i class="bi bi-eye"></i> {obj.views}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );

      case "comments":
        return (
          <div className="comments">
            {data.map((obj) => {
              const likes = Math.min(obj?.likes || 0, 10);
              const dislikes = Math.max(0, likes > 5 ? 10 - likes : 5 - likes);
              return (
                <div key={v4()} className="commentBox">
                  <div className="header">
                    <h3>
                      <i class="bi bi-person"></i> {obj.user?.username}
                    </h3>
                    <div>
                      {Array(likes)
                        .fill()
                        .map((_, i) => (
                          <i
                            key={`filled-${obj.id}-${i}`}
                            className="bi bi-star-fill"></i>
                        ))}

                      {Array(dislikes)
                        .fill()
                        .map((_, i) => (
                          <i
                            key={`empty-${obj.id}-${i}`}
                            className="bi bi-star"></i>
                        ))}
                    </div>
                  </div>
                  <p>{obj.body}</p>
                </div>
              );
            })}
          </div>
        );

      case "todos":
        return (
          <div className="todos">
            {data.map((obj) => (
              <div key={v4()} className="todoBox">
                <span>{obj.userId}</span>
                <input
                  type="checkbox"
                  checked={obj.completed}
                  disabled={obj.completed}
                />
                <p>{obj.todo}</p>
              </div>
            ))}
          </div>
        );

      case "recipes":
        return (
          <div className="recipes">
            {data.map((obj) => (
              <div key={v4()} className="recipeBox">
                <div className="textBox">
                  <h2>{obj.name}</h2>
                  <h4>Ingredients</h4>
                  <p>{obj.ingredients?.join(", ")}</p>
                  <h4>Preparation</h4>
                  <p>{obj.instructions?.join(" ")}</p>
                  <ul>
                    <li>Preparation time: {obj.prepTimeMinutes}m</li>
                    <li>Cooking time: {obj.cookTimeMinutes}m</li>
                    <li>Difficulty: {obj.difficulty}</li>
                    <li>Cuisine: {obj.cuisine}</li>
                    <li>Calories: {obj.caloriesPerServing}kcal</li>
                  </ul>
                </div>

                <img src={obj.image} alt={obj.name} />
              </div>
            ))}
          </div>
        );

      case "carts":
        return (
          <div className="carts">
            {data.map((cart) => (
              <div key={v4()} className="cart">
                <h2>Cart ID: {cart.id}</h2>
                <p>Total products: {cart.totalProducts}</p>
                <p>Total quantity: {cart.totalQuantity}</p>
                <p>Total price: ${cart.total?.toFixed(2)}</p>
                <p>Discounted price: ${cart.discountedTotal?.toFixed(2)}</p>
                <div className="products">
                  {cart.products?.map((product) => (
                    <div key={v4()} className="product">
                      <img src={product.thumbnail} alt={product.title} />
                      <div className="product-body">
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Total: ${product.total.toFixed(2)}</p>
                        <p>Discount: {product.discountPercentage}%</p>
                        <p>
                          Discounted Price: $
                          {product.discountedTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return;
    }
  };

  return <>{boxes(dataName, data)}</>;
};

export default Body;
