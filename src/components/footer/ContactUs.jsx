const ContactUs = () => {
  return (
    <div className="col contact-us">
      <h2 className="mb-4">Contact Us</h2>
      <form>
        <input
          type="text"
          className="form-control form-control-sm mb-3"
          placeholder="Enter Full Name"
          required
        />
        <input
          type="email"
          className="form-control form-control-sm mb-3"
          placeholder="Enter Your E-Mail Here"
          required
        />
        <textarea
          className="form-control form-control-sm mb-3"
          placeholder="Enter Your Message Here"
          required
        ></textarea>
        <button type="submit" className="btn btn-dark btn-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
