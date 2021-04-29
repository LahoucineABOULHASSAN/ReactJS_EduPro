import React, { createContext, useState } from 'react';
export const TeachersContext = createContext();
const TeachersContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);
  return (
    <TeachersContext.Provider value={{ teachers, setTeachers }}>
      {props.children}
    </TeachersContext.Provider>
  );
};

export default TeachersContextProvider;
