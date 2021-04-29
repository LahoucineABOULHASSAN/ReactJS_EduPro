import DropDown from './DropDown';
const Menu = ({ isActive }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a
          className="nav-link isActive"
          aria-current="page"
          href="#courses"
          onClick={(event) => isActive(event)}
        >
          Courses
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#teachers"
          onClick={(event) => isActive(event)}
        >
          Teachers
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#reviews"
          onClick={(event) => isActive(event)}
        >
          Reviews
        </a>
      </li>
      <DropDown isActive={isActive} />
    </ul>
  );
};

export default Menu;
