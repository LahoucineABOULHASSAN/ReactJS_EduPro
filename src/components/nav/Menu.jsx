import DropDown from "./DropDown";
const Menu = ({ isActive }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <span
          className="nav-link isActive"
          aria-current="page"
          onClick={(event) => isActive(event, "#courses")}
        >
          Courses
        </span>
      </li>
      <li className="nav-item">
        <span
          className="nav-link"
          onClick={(event) => isActive(event, "#teachers")}
        >
          Teachers
        </span>
      </li>
      <li className="nav-item">
        <span
          className="nav-link"
          onClick={(event) => isActive(event, "#reviews")}
        >
          Reviews
        </span>
      </li>
      <DropDown isActive={isActive} />
    </ul>
  );
};

export default Menu;
