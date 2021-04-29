import { useContext, useEffect, useCallback } from "react";
import { PaginationContext } from "../../contexts/PaginationContext";
import { CoursesContext } from "../../contexts/CoursesContext";
import { ErrorsContext } from "../../contexts/ErrorsContext";
import { paginate } from "../../reducers/pageReducer";
import Axios from "axios";
import Course from "./Course";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";
const Courses = () => {
  const {
    courses,
    setCourses,
    getcourses,
    setGetCourses,
    setFilteredCourses,
    filteredCourses,
  } = useContext(CoursesContext);
  const { error, setError } = useContext(ErrorsContext);
  const { page, dispatch } = useContext(PaginationContext);
  const fetchCourses = useCallback(() => {
    const url =
      "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/courses.json";
    const fetchData = async () => {
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setGetCourses(res.data);
        setCourses(paginate(res.data, 1));
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setError(error);
      }
    };
    fetchData();
  }, [setCourses, setGetCourses, setError]);
  const handleFilter = (item) => {
    if (!item) {
      setFilteredCourses([]);
      dispatch({
        type: "SET_DEFAULT_COURSES",
        numPage: Math.ceil(getcourses.length / 3),
      });
      setCourses(paginate(getcourses, 1));
    } else {
      const results = getcourses.filter((course) => {
        return course.title.toLowerCase().includes(item.toLowerCase());
      });
      if (results) {
        dispatch({
          type: "SET_DEFAULT_COURSES",
          numPage: Math.ceil(results.length / 3),
          pageFiltering: true,
        });
        setFilteredCourses(results);
        setCourses(paginate(results, 1));
      } else {
        setCourses([]);
      }
    }
  };
  useEffect(
    () => {
      fetchCourses();
    }, // eslint-disable-next-line
    []
  );
  return (
    <section id="courses">
      <h2 className="text-center">Popular Courses</h2>
      <h5 className="text-center">
        Upgrade your skills with the newest courses
      </h5>
      <SearchForm handleFilter={handleFilter} courses={getcourses} />
      {courses.length ? (
        <>
          <div className="row mb-4">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
          {page.pageFiltering && filteredCourses ? (
            <Pagination
              arr={filteredCourses}
              numPages={Math.ceil(filteredCourses.length / 3)}
            />
          ) : (
            <Pagination
              arr={getcourses}
              numPages={Math.ceil(getcourses.length / 3)}
            />
          )}
        </>
      ) : (
        <p className="alert text-center alert-danger" role="alert">
          {error}
        </p>
      )}
    </section>
  );
};

export default Courses;
