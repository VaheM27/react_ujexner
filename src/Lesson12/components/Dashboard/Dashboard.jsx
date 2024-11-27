import "./Dashboard.scss";

const Dashboard = ({ id, name, number, image, someDetail }) => {
  return (
    <div className="card">
      <img src={image} alt="Again Error with images" />
      <p className="detail">{id}</p>
      <p className="detail">{name}</p>
      <p className="detail">{number}</p>
      <p className="detail">{someDetail}</p>
    </div>
  );
};

export default Dashboard;
