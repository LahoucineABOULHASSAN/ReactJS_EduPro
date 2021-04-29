const SignUp = () => {
  return (
    <form id="sign-up" className="col">
      <h2 className="text-center mb-4">Signup Today</h2>
      <input
        className="form-control form-control-sm mb-3"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="form-control form-control-sm mb-3"
        type="email"
        placeholder="Email"
      />
      <input
        className="form-control form-control-sm mb-5"
        type="password"
        placeholder="Password"
      />
      <input className="btn btn-light" type="submit" value="Get Started" />
    </form>
  );
};

export default SignUp;
