const SearchForm = ({ handleFilter, courses }) => {
  const options = (title, id) => {
    return <option value={title} key={id} />;
  };
  return (
    <form className="mb-4" onSubmit={(event) => event.preventDefault()}>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => handleFilter(event.target.value)}
      />
      <datalist id="datalistOptions">
        {courses.slice(0, 4).map((course) => options(course.title, course.id))}
      </datalist>
    </form>
  );
};

export default SearchForm;
