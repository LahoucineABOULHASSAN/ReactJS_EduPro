import React, { createContext, useState } from 'react';
export const CoursesContext = createContext();
const CoursesContextProvider = (props) => {
  const [getcourses, setGetCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  return (
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        filteredCourses,
        setFilteredCourses,
        getcourses,
        setGetCourses,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
