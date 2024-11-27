import { Link } from "react-router-dom";

export const PageHeader = ({ heading, page, path }) => {
  return (
    <div className="pageHeader">
      <h1>{heading}</h1>
      <div>
        <Link to="/">Գլխավոր</Link>
        <span>▸</span>
        <Link to={path}>{page}</Link>
      </div>
    </div>
  );
};
