import "./Dashboard.scss";

const Dashboard = ({ id, src, name, text, price }) => {
  return (
    <div className="board">
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="productInfo">{id}</p>
            </td>
            <td>
              <img src={src} alt="Product Image" className="productImg" />
            </td>
            <td>
              <p className="productInfo">{name}</p>
            </td>
            <td>
              <p className="productInfo">{text}</p>
            </td>
            <td>
              <p className="productInfo">{price}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
