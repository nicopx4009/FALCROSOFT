import img from "../assets/img/logoF.png";
import Cabecera from "./Cabecera";
import Cuerpo from "./Cuerpo";
import Footer from "./Footer";
const Principal = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <a href="#" className="hero-logo" data-aos="zoom-in">
            <img src={img} alt="" />
          </a>
          <h1 data-aos="zoom-in">Bienvenido a Falcrosoft</h1>
          <h2 data-aos="fade-up">Donde creemos que todo es posible</h2>
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href="#about"
            className="btn-get-started scrollto"
          >
            Empecemos
          </a>
        </div>
      </section>
      <Cabecera />
      <Cuerpo />
      <Footer />
    </>
  );
};

export default Principal;
