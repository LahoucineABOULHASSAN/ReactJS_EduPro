const DropDown = ({ isActive }) => {
  return (
    <li className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Options
      </span>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <span
            className="dropdown-item"
            onClick={(event) => isActive(event, "#about")}
          >
            About
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={(event) => isActive(event, "#contact-us")}
          >
            Contact Us
          </span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={(event) => isActive(event, "#sign-up")}
          >
            Login
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={(event) => isActive(event, "#sign-up")}
          >
            Sign up
          </span>
        </li>
      </ul>
    </li>
  );
};

export default DropDown;
