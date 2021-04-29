import CoursesContextProvider from "../contexts/CoursesContext";
import PaginationContextProvider from "../contexts/PaginationContext";
import TeachersContextProvider from "../contexts/TeachersContext";
import StudentsContextProvider from "../contexts/StudentsContext";
import ErrorsContextProvider from "../contexts/ErrorsContext";
import Courses from "./main/Courses";
import Features from "./main/Features";
import Reviews from "./main/Reviews";
import Services from "./main/Services";
import Teachers from "./main/Teachers";

const Main = () => {
  return (
    <main>
      <ErrorsContextProvider>
        <CoursesContextProvider>
          <PaginationContextProvider>
            <Courses />
          </PaginationContextProvider>
        </CoursesContextProvider>
        <Features />
        <TeachersContextProvider>
          <Teachers />
        </TeachersContextProvider>
        <StudentsContextProvider>
          <Reviews />
        </StudentsContextProvider>
        <Services />
      </ErrorsContextProvider>
    </main>
  );
};

export default Main;
