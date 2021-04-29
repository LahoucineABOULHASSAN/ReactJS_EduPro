import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import './stylesheets/global.css';
import './stylesheets/app.css';
import './stylesheets/screens.css';
const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
