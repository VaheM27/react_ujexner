import "./Body.css";

const Body = ({ data }) => {
  return (
    <div className="body">
      {data.map((item) => {
        return (
          <div className="stayl" key={item.id}>
            <p>{item.firstname || item.title || item.total}</p>
            <p>{item.lastName || item.price || item.discountedTotal}</p>
            <p>{item.maidenName || item.total || item.email}</p>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
