const Course = ({ course }) => {
  const { title, img, start, duration, premium, price, desc } = course;
  const { name, image } = course.teacher;
  return (
    <div className="card col">
      <div className="card bg-dark text-white">
        <img className="card-img" src={img} alt={title} />
        <div className="carousel-caption d-none d-md-block">
          <span>
            <i className="calendar alternate icon"></i> {start + " - "}
          </span>
          <span>{duration + " Hours"}</span>
        </div>
      </div>
      <div className="card-body mb-1">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <small className="text-muted">{desc}</small>
        </p>
      </div>
      <div className="card-body info">
        <div>
          <img className="avatar" src={image} alt={name} />
          <a className="card-link" href={"#" + name}>
            {name}
          </a>
        </div>
        <button className={premium ? "btn btn-success" : "btn btn-info"}>
          {premium ? "$ " + price : "Free"}
        </button>
      </div>
    </div>
  );
};

export default Course;
