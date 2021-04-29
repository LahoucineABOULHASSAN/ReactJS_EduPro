import AboutUs from './footer/AboutUs';
import ContactUs from './footer/ContactUs';
import Infos from './footer/Infos';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="contact-us" className="row">
        <AboutUs />
        <ContactUs />
      </div>
      <Infos />
    </footer>
  );
};

export default Footer;
