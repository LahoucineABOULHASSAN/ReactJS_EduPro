import Axios from 'axios';
import { useCallback, useContext, useEffect } from 'react';
import { StudentsContext } from '../../contexts/StudentsContext';
import Review from './Review';
const Reviews = () => {
  const { students, setStudents } = useContext(StudentsContext);
  const fetchStudents = useCallback(() => {
    const url =
      'https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/students.json';
    const fetchData = async () => {
      const res = await Axios.get(url);
      setStudents(res.data);
    };
    fetchData();
  }, [setStudents]);
  useEffect(() => fetchStudents(), [] /*eslint-disable-line*/);
  return (
    <section id="reviews">
      <h2 className="text-center">Student Reviews</h2>
      <h5 className="text-center mb-4">Student Reviews</h5>
      <div className="row">
        {students.map((reviewer) => (
          <Review key={reviewer.id} reviewer={reviewer} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
