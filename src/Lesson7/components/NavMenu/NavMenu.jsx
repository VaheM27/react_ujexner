const NavMenu = ({ section, isOpen, onToggle }) => (
  <button onClick={onToggle}>
    {section}
    <i className={`bi bi-chevron-${isOpen ? 'down' : 'up'}`} />
  </button>
);

export default NavMenu;
