import React, { createContext, useState } from 'react';
export const StudentsContext = createContext();
const StudentsContextProvider = (props) => {
  const [students, setStudents] = useState([]);
  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {props.children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
