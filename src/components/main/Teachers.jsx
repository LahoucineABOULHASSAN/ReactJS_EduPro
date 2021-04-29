import { useContext, useEffect, useCallback } from 'react';
import { TeachersContext } from '../../contexts/TeachersContext';
import Axios from 'axios';
import Teacher from './Teacher';
const Teachers = () => {
  const { teachers, setTeachers } = useContext(TeachersContext);
  const fetchTeachers = useCallback(() => {
    const url =
      'https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/teachers.json';
    const fetchData = async () => {
      const res = await Axios.get(url);
      setTeachers(res.data.slice(0, 4));
    };
    fetchData();
  }, [setTeachers]);
  useEffect(() => fetchTeachers(), [] /*eslint-disable-line*/);
  return (
    <section id="teachers">
      <h2 className="text-center">Teachers</h2>
      <h5 className="text-center mb-4">Meet Professional Teachers</h5>
      <div className="row">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
