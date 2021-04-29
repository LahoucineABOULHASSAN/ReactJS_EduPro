const Infos = () => {
  return (
    <div id="infos" className="row">
      <div className="col subscribe">
        <h5 className="mb-4">NewsLetter Subscribe</h5>
        <form>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="E-Mail Here"
            required
          />
          <button type="submit" className="btn btn-outline-primary mb-3">
            Send
          </button>
        </form>
        <small className="text-muted">
          ** Lorem ipsum, dolor sit amet conse.
        </small>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="p-3">
              <h5>About Us</h5>
              <small className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                voluptates.
              </small>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h5>Contact Info</h5>
              <small className="text-muted">
                <i className="phone volume icon"></i> (808) 08 080 8080
              </small>
              <br />
              <small className="text-muted">
                <i className="mail icon"></i>servicepro@yoursite.com
              </small>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h5>
                <a href="https://facebook.com">
                  <i className="facebook icon"></i>
                </a>
                <a href="https://twitter.com">
                  <i className="twitter icon"></i>
                </a>
                <a href="https://linkedin.com">
                  <i className="linkedin icon"></i>
                </a>
              </h5>
              <small className="text-muted">Copyright &copy; 2020 EduPro</small>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h5>Quick Links</h5>
              <small>
                <a className="text-muted" href="#career">
                  Career
                </a>
              </small>
              <small>
                <a className="text-muted" href="#investor">
                  Investor
                </a>
              </small>
              <small>
                <a className="text-muted" href="#policy">
                  Privacy & policy
                </a>
              </small>
              <small>
                <a className="text-muted" href="#terms">
                  Terms & Conditions
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Infos;
