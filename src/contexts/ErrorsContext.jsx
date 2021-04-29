import React, { createContext, useState } from "react";
export const ErrorsContext = createContext();
const ErrorsContextProvider = (props) => {
  const [error, setError] = useState("");
  return (
    <ErrorsContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {props.children}
    </ErrorsContext.Provider>
  );
};

export default ErrorsContextProvider;
