const Body = ({ dataName, data }) => {
  const boxes = (dataName, obj) => {
    switch (dataName) {
      case "users":
        return (
          <tr key={obj.id} className="box">
            <td>{obj.firstName}</td>
            <td>{obj.lastName}</td>
            <td>{obj.birthdate}</td>
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
      case "posts":
        return (
          <tr key={obj.id} className="box">
            <td>{obj.title}</td>
            <td>{obj.body}</td>
            <td>{obj.reactions?.likes}</td>
            <td>{obj.reactions?.dislikes}</td>
            <td>{obj.views}</td>
          </tr>
        );
      case "comments":
        return (
          <tr key={obj.id} className="box">
            <td>{obj.body}</td>
            <td>By: {obj.user?.username}</td>
            <td>{obj.likes}</td>
          </tr>
        );
      case "todos":
        return (
          <tr key={obj.id} className="box">
            <td>
              <input
                type="checkbox"
                checked={obj.completed}
                disabled={obj.completed}
              />
            </td>
            <td>{obj.todo}</td>
            <td>{obj.userId}</td>
          </tr>
        );
      case "recipes":
        return (
          <tr key={obj.id} className="box">
            <td>{obj.name}</td>
            <td>
              <img src={obj.image} alt={obj.name} />
            </td>
            <td>{obj.ingredients?.join(", ")}</td>
            <td>{obj.instructions?.join(" ")}</td>
          </tr>
        );
      case "carts":
        return obj.products?.map((product) => {
          return (
            <tr key={product.id} className="box">
              <td>{product.title}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} />
              </td>
              <td>Price: {product.price}</td>
            </tr>
          );
        });
      default:
        return (
          <tr key={obj.id} className="box">
            <td>Data not recognized</td>
          </tr>
        );
    }
  };

  return (
    <table className="body">
      <tbody>{data.map((obj) => boxes(dataName, obj))}</tbody>
    </table>
  );
};

export default Body;
