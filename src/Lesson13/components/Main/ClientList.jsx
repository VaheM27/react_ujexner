import more from "../../assets/png/more-horizontal.png";

export const ClientList = ({ src, alt, name, sex, chooseUser, className }) => {
  return (
    <li onClick={chooseUser} className={className}>
      <div className="cl-data">
        <img src={src} alt={alt} />
        <div className="cl-name">
          <p>{name}</p>
          <span>{sex}</span>
        </div>
      </div>
      <button>
        <img src={more} alt="more" />
      </button>
    </li>
  );
};
