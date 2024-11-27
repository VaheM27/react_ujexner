export const Dropdown = ({
  activeDropdown,
  context,
  icon,
  bold,
  header,
  drop,
  id,
}) => {
  const isActive = activeDropdown === id;

  return (
    <div className={`dropdown ${isActive ? "actived" : ""}`}>
      <div className="top" onClick={() => drop(id)}>
        <div>
          {icon}
          <h5>
            <span>{bold}</span>
            {header}
          </h5>
        </div>
        <i className={`bi bi-chevron-${isActive ? "up" : "down"}`}></i>
      </div>
      <p className={isActive ? "show" : "hide"}>{context}</p>
    </div>
  );
};
