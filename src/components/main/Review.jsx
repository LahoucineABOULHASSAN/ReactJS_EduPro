const Review = ({ reviewer }) => {
  const { name, image, job, review } = reviewer;
  return (
    <div className="col card-body info">
      <div className="reviewer mb-3">
        <img className="avatar" src={image} alt={name} />
        <div>
          <a className="card-link" href={'#' + name}>
            {name}
          </a>
          <br />
          <small className="text-muted">{job}</small>
        </div>
      </div>
      <p className="text-muted">{review}</p>
    </div>
  );
};

export default Review;
