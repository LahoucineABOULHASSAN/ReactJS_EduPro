import Menu from "./nav/Menu";
const Nav = () => {
  const isActive = (event, elem) => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((elem) => {
      if (elem === event.target) {
        event.target.classList.add("isActive");
      } else elem.classList.remove("isActive");
    });
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach((elem) => {
      if (elem === event.target) {
        event.target.classList.add("isActive");
      } else elem.classList.remove("isActive");
    });
    scrollTo(elem);
  };
  const scrollTo = (elem) => {
    const sticky = document.querySelector(elem).offsetTop;
    document.body.scrollTop = sticky - 30; // For Safari
    document.documentElement.scrollTop = sticky - 30;
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          EduPro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu isActive={isActive} />
          <div>
            <i className="phone icon"></i>
            <span className="text-muted">+88 8888 8888</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
