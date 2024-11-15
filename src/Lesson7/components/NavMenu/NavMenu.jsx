const NavMenu = ({ section, isOpen, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {section}
      {isOpen ? (
        <i className="bi bi-chevron-down"></i>
      ) : (
        <i className="bi bi-chevron-up"></i>
      )}
    </button>
  );
};

export default NavMenu;
