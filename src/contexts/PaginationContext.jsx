import React, { createContext, useReducer } from 'react';
import { pageReducer } from '../reducers/pageReducer';
export const PaginationContext = createContext();
const PaginationContextProvider = (props) => {
  const [page, dispatch] = useReducer(pageReducer, {
    numPage: 1,
    currentPage: 1,
    nextPage: null,
    previousPage: null,
    pageFiltering: false,
  });
  return (
    <PaginationContext.Provider value={{ page, dispatch }}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
