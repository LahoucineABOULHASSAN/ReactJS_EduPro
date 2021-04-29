const Teacher = ({ teacher }) => {
  const { name, image, desc, medias } = teacher;
  return (
    <div className="col">
      <div className="card mb-1">
        <img src={image} className="card-img card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
      <div className="card-body">
        {medias.map((media) => (
          <a key={media.id} href={media.url}>
            <i
              className={'icon large ' + media.icon}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={media.icon}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
