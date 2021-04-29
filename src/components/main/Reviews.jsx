import Axios from "axios";
import { useCallback, useContext, useEffect } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";
import { ErrorsContext } from "../../contexts/ErrorsContext";
import Review from "./Review";
const Reviews = () => {
  const { students, setStudents } = useContext(StudentsContext);
  const { error, setError } = useContext(ErrorsContext);
  const fetchStudents = useCallback(() => {
    const url =
      "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/students.json";
    const fetchData = async () => {
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setStudents(res.data);
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setError(error);
      }
    };
    fetchData();
  }, [setStudents, setError]);
  useEffect(() => fetchStudents(), [] /*eslint-disable-line*/);
  return (
    <section id="reviews">
      <h2 className="text-center">Student Reviews</h2>
      <h5 className="text-center mb-4">Student Reviews</h5>
      {students.length ? (
        <div className="row">
          {students.map((reviewer) => (
            <Review key={reviewer.id} reviewer={reviewer} />
          ))}
        </div>
      ) : (
        <p className="alert text-center alert-danger" role="alert">
          {error}
        </p>
      )}
    </section>
  );
};

export default Reviews;
