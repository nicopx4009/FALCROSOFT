import img from "../assets/img/logoV.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  //REDIRIGE
  const navigate = useNavigate();
  const calendary = () => {
    navigate("/Calendar");
  };
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="index.html">
              <img src={img} alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Sobre
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Portafolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Equipo
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="" onClick={calendary}>
                  Calendar
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
