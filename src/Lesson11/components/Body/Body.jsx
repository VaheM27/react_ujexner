import "./Body.scss";

const Body = ({ arr }) => {
  return (
    <div className="body">
      {arr.map((item, i) => {
        return (
          <div key={i} className="card">
            <p>{item.firstName || item.name || item.title}</p>
            <p>
              {item.age ||
                item.rating ||
                item.nationality ||
                item.email ||
                `${item.completed}`}
            </p>
            <p>
              {item.username ||
                item.cuisine ||
                item.body ||
                item.userId ||
                item.biography ||
                item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
