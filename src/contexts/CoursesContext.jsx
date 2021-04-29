import React, { createContext, useState } from "react";
export const CoursesContext = createContext();
const CoursesContextProvider = (props) => {
  const [getcourses, setGetCourses] = useState([]);
  const [error, setError] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  return (
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        error,
        setError,
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
