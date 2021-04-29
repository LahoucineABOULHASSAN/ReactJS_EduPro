const DropDown = ({ isActive }) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#about"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Options
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a
            className="dropdown-item"
            href="#about"
            onClick={(event) => isActive(event)}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#contact-us"
            onClick={(event) => isActive(event)}
          >
            Contact Us
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#login"
            onClick={(event) => isActive(event)}
          >
            Login
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#sign-up"
            onClick={(event) => isActive(event)}
          >
            Sign up
          </a>
        </li>
      </ul>
    </li>
  );
};

export default DropDown;
