export const paginate = (arr, part) => {
  const chunk_size = 3;
  let parts = [];
  let myChunk = [];
  for (let index = 0; index < arr.length; index += chunk_size) {
    myChunk = arr.slice(index, index + chunk_size);
    parts.push(myChunk);
  }
  return parts[part - 1];
};
export const pageReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALE':
      return {
        ...state,
        numPage: action.numPage,
        nextPage: action.nextPage,
      };
    case 'PAGINATION':
      return {
        ...state,
        currentPage: action.currentPage,
        nextPage: action.nextPage,
        previousPage: action.previousPage,
      };
    case 'SET_DEFAULT_COURSES':
      return {
        numPage: action.numPage,
        currentPage: 1,
        nextPage: null,
        previousPage: null,
        pageFiltering: action.pageFiltering,
      };
    default:
      return state;
  }
};
