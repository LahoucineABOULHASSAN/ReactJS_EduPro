const Header = () => {
  return (
    <header id="home">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="d-block w-100"
              alt="online education"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Distance Learning Education Center</h1>
              <p>
                Our online courses are designed to fit in your industry
                supporting all-around with latest technologies
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/5198252/pexels-photo-5198252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="man learning"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Professional Trainers & Teachers</h1>
              <p>
                Our work group is based on known and Professionals people who
                love their work
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/4050296/pexels-photo-4050296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="girl learning"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>International Certification</h1>
              <p>
                Our certifications will help you find your dream job more
                easily.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleDark"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleDark"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
