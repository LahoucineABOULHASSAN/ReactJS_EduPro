import { useCallback, useContext, useEffect } from 'react';
import { CoursesContext } from '../../contexts/CoursesContext';
import { PaginationContext } from '../../contexts/PaginationContext';
import { paginate } from '../../reducers/pageReducer';
const Pagination = ({ arr }) => {
  const { page, dispatch } = useContext(PaginationContext);
  const { setCourses } = useContext(CoursesContext);
  const makePages = (page) => {
    const { currentPage, numPage, nextPage } = page;
    let pages = [];
    if (numPage > 0) {
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (
          (i > 0 && nextPage) ||
          (i > 0 && currentPage === numPage && i < currentPage + 1)
        ) {
          pages.push(
            <li
              className={
                page.currentPage === i ? 'page-item active' : 'page-item'
              }
              key={i}
            >
              <button
                className="page-link"
                onClick={(event) =>
                  hundlePage(parseInt(event.target.textContent))
                }
              >
                {i}
              </button>
            </li>
          );
        }
      }
    }
    return pages;
  };
  const hundlePage = (currentPage) => {
    dispatch({
      type: 'PAGINATION',
      currentPage,
      nextPage: currentPage < page.numPage ? currentPage + 1 : null,
      previousPage: currentPage > 1 ? currentPage - 1 : null,
    });
    setCourses(paginate(arr, currentPage));
  };
  const initializePageButtons = useCallback(() => {
    if (arr.length > 1) {
      dispatch({
        type: 'INITIALE',
        numPage: Math.ceil(arr.length / 3),
        nextPage: 2,
      });
    }
  }, [arr.length, dispatch]);
  const handleDisabledButtons = useCallback(() => {
    const next = document.querySelector('.next');
    const previous = document.querySelector('.previous');
    !page.nextPage ? (next.disabled = true) : (next.disabled = false);
    !page.previousPage
      ? (previous.disabled = true)
      : (previous.disabled = false);
  }, [page.nextPage, page.previousPage]);
  useEffect(() => initializePageButtons(), [initializePageButtons]);
  useEffect(() => handleDisabledButtons(), [
    page.numPage,
    page.currentPage,
    handleDisabledButtons,
  ]);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={!page.previousPage ? 'page-item disabled' : 'page-item'}>
          <button
            className="page-link previous"
            onClick={() => hundlePage(page.previousPage)}
          >
            &laquo;
          </button>
        </li>
        {makePages(page)}
        <li className={!page.nextPage ? 'page-item disabled' : 'page-item'}>
          <button
            className="page-link next"
            onClick={() => hundlePage(page.nextPage)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
