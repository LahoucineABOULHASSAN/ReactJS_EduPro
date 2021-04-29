import { useContext, useEffect, useCallback } from "react";
import { TeachersContext } from "../../contexts/TeachersContext";
import { ErrorsContext } from "../../contexts/ErrorsContext";
import Axios from "axios";
import Teacher from "./Teacher";
const Teachers = () => {
  const { teachers, setTeachers } = useContext(TeachersContext);
  const { error, setError } = useContext(ErrorsContext);
  const fetchTeachers = useCallback(() => {
    const url =
      "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/teachers.json";
    const fetchData = async () => {
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setTeachers(res.data.slice(0, 4));
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setError(error);
      }
    };
    fetchData();
  }, [setTeachers, setError]);
  useEffect(() => fetchTeachers(), [] /*eslint-disable-line*/);
  return (
    <section id="teachers">
      <h2 className="text-center">Teachers</h2>
      <h5 className="text-center mb-4">Meet Professional Teachers</h5>
      {teachers.length ? (
        <div className="row">
          {teachers.map((teacher) => (
            <Teacher key={teacher.id} teacher={teacher} />
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

export default Teachers;
