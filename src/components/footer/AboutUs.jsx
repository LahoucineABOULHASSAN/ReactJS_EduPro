const AboutUs = () => {
  return (
    <div id="about" className="col card row">
      <img
        src="https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_960_720.jpg"
        alt="certificate online"
      />
      <div className="card-body">
        <h2 className="card-title mb-4">About Us</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          repellendus itaque, deleniti sed ducimus nobis delectus provident nisi
          ad consequuntur aliquid sequi sapiente voluptatum, deserunt quidem
          maxime accusamus ipsam libero?
        </p>
        <a href="#about" className="text-muted">
          <small>See More</small>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
