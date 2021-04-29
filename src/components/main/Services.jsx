import SignUp from './SignUp';

const Services = () => {
  return (
    <section id="services">
      <div className="row">
        <SignUp />
        <div className="col">
          <h2 className="card-title  text-dark mb-4">
            Start your journey to a better life with online practical courses
          </h2>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li>
                <span>
                  <i className="users large icon"></i>
                </span>
                <div>
                  <h6>Professional Trainers</h6>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet elit. Eum animi, accusamus
                  </p>
                </div>
              </li>
              <li>
                <span>
                  <i className="certificate large icon"></i>
                </span>
                <div>
                  <h6>International Certificates</h6>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet elit. Eum animi, accusamus
                  </p>
                </div>
              </li>
              <li>
                <span>
                  <i className="gift large icon"></i>
                </span>
                <div>
                  <h6>Free For Three Months</h6>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet elit. Eum animi, accusamus
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
