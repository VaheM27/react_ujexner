import "./TableHead.scss";

const TableHead = ({ sortByTitle, sortByNum, title, num, info }) => {
  return (
    <div className="tableHead">
      <p className="thead">Image</p>
      <p className="thead">#</p>
      <p className="thead" onClick={sortByTitle}>
        {title}
      </p>
      <p className="thead" onClick={sortByNum}>
        {num}
      </p>
      <p className="thead">{info}</p>
    </div>
  );
};

export default TableHead;
