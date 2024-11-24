import "./Body.css";

const Body = ({ data }) => {
  return (
    <div className="body">
      {data.map((item) => {
        return (
          <div className="stayl" key={item.id}>
            <p>{item.firstname || item.title}</p>
            <p>{item.lastName || item.price + "$"}</p>
            <p>{item.maidenName || item.total || item.email}</p>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
