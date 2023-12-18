import img from "../assets/img/gettyimages-1322205588-612x612.jpg";
import imageService from "../assets/img/0f7d502f-dabf-4e6e-951d-f286d6475a95.jpg";
import imageFeatured1 from "../assets/img/featured-1.png";
import imageFeatured2 from "../assets/img/featured-2.png";
import imageFeatured3 from "../assets/img/featured-3.png";
import imageFeatured4 from "../assets/img/featured-4.png";
import imageWhyUs from "../assets/img/why-us.jpg";
import imagePortafolio from "../assets/img/portfolio/c6216a3e-db1f-4257-a205-6c5891c9884d.jpg";
import imagePortafolio2 from "../assets/img/portfolio/84895e77-c9d4-471b-9216-f49f3ed9611f.jpg";
import imagePortafolio3 from "../assets/img/portfolio/175a88db-1a83-44f7-beab-91d5d5de2b4e.jpg";
import imagePortafolio4 from "../assets/img/portfolio/oie_161535282O1T28d9.jpg";
import imagePortafolio5 from "../assets/img/portfolio/dotnet.png";
import imagePortafolio6 from "../assets/img/portfolio/oie_1615411xR7xCUo6.png";
import imagePortafolio7 from "../assets/img/portfolio/saint-petersburg-russia-july-4-600nw-1450234691.png";
import imagePortafolio8 from "../assets/img/portfolio/oie_16161342NT6UTAsB.jpg";
import imagePortafolio9 from "../assets/img/portfolio/e2cfa41a2972dc466306d84abfc33f7fcaf5ad19.png";
import imageTestimonials from "../assets/img/testimonials/testimonials-1.jpg";
import imageTestimonials2 from "../assets/img/testimonials/testimonials-2.jpg";
import imageTestimonials3 from "../assets/img/testimonials/testimonials-3.jpg";
import imageTestimonials4 from "../assets/img/testimonials/testimonials-4.jpg";
import imageTestimonials5 from "../assets/img/testimonials/testimonials-5.jpg";
import imageCliente from "../assets/img/clients/client-1.png";
import imageCliente2 from "../assets/img/clients/client-2.png";
import imageCliente3 from "../assets/img/clients/client-3.png";
import imageCliente4 from "../assets/img/clients/client-4.png";
import imageCliente5 from "../assets/img/clients/client-5.png";
import imageCliente6 from "../assets/img/clients/client-6.png";
import imageTeam from "../assets/img/team/oie_vR7qNiJ2vBGI.png";
import imageTeam2 from "../assets/img/team/oie_vR7qNiJ2vBGI.png";
import imageTeam3 from "../assets/img/team/oie_vR7qNiJ2vBGI.png";
import "../assets/js/main.js";

const Cuerpo = () => {
  return (
    <>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Sobre Nosotros</h2>
              <p>
                Capturamos tu idea de negocios y la automatizamos de la manera
                mas eficiente.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="image">
                  <img src={img} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                  <h3>Siempre valoramos los ideales de los Usuarios</h3>
                  <p className="fst-italic">
                    En el vasto mundo de la tecnología y la programación, los
                    ideales de los usuarios son la brújula que guía cada línea
                    de código y cada avance innovador. Detrás de cada algoritmo,
                    diseño o sistema, se encuentra la búsqueda constante por
                    satisfacer las necesidades y expectativas de quienes hacen
                    uso de estas herramientas.
                  </p>
                  <ul>
                    <li>
                      <i className="bx bx-check-double"></i> Interfaces
                      Intuitivas: Diseños de usuario centrados en la facilidad
                      de uso y la comprensión intuitiva.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> Algoritmos
                      Personalizados: Programación adaptativa que se ajusta a
                      las preferencias y necesidades individuales de los
                      usuarios.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> Aplicaciones
                      Móviles Intuitivas: Programas diseñados para dispositivos
                      móviles que se adaptan a los patrones de uso y las
                      preferencias de los usuarios.
                    </li>
                  </ul>
                  <p>
                    Estas son solo algunas de las herramientas que se
                    implementan para dar vida a estos ideales, transformándolos
                    en experiencias tangibles que enriquecen y simplifican la
                    interacción entre las personas y la tecnología.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Servicios</h2>
              <p>Ofrecemos los mejores servicios para desarrollar software</p>
            </div>

            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up">
                  <i className="bx bx-receipt"></i>
                  <h4>Desarrollo Web</h4>
                  <p>
                    Desarrollamos servicios web intuitivos y con una alta
                    usabilidad para el usuario
                  </p>
                </div>
                <div
                  className="icon-box mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bx bx-cube-alt"></i>
                  <h4>Creacion y normalizacion de bases de datos</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
                <div
                  className="icon-box mt-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bx bx-images"></i>
                  <h4></h4>
                  <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </div>
                <div
                  className="icon-box mt-5"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bx bx-shield"></i>
                  <h4></h4>
                  <p>
                    Expedita veritatis consequuntur nihil tempore laudantium
                    vitae denat pacta
                  </p>
                </div>
              </div>
              <div
                className="image col-lg-6 order-1 order-lg-2"
                style={{ backgroundImage: "url(" + imageService + ")" }}
                data-aos="fade-left"
                data-aos-delay="100"
              ></div>
            </div>
          </div>
        </section>
        <section id="featured" className="featured">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <figure>
                      <img src={imageFeatured1} alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <figure>
                      <img src={imageFeatured2} alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <figure>
                      <img src={imageFeatured3} alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <figure>
                      <img src={imageFeatured4} alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      <h4>Consultoria</h4>
                      <p>
                        recopilamos información, la analizamos, detectamos el
                        problema y planteamos recomendaciones para resolverlo,
                        además, ayudamo a que dichos cambios puedan ser
                        implementados efectivamente
                      </p>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                      <h4>Business Intelligence</h4>
                      <p>
                        Combinamos análisis de negocios,visualización,
                        herramientas e infraestructura de datos, además de
                        prácticas recomendadas para ayudarte tomar decisiones
                        basadas en los datos.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                      <h4>Desarrollo a la Medida</h4>
                      <p>
                        Conocemos al cliente, es abrir el archivo que revela su
                        empresa, avistamiento de la personalidad de la marca,
                        metas, expectativas en el mundo digital, y todo lo que
                        enmarca la visión que puedas tener como empresa, los
                        clientes en cuestión.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                      <h4>Base de Datos</h4>
                      <p>
                        las bases de datos pueden almacenar prácticamente
                        cualquier información que usted requiera, siempre y
                        cuando las tenga correctamente instaladas
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="why-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-stretch">
                <div className="content" data-aos="fade-up">
                  <h3>
                    Desarrollos Realizados{" "}
                    <strong>con nuestros usuarios</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>

                <div className="accordion-list">
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="100">
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-1"
                      >
                        <span>01</span> Non consectetur a erat nam at lectus
                        urna duis?{" "}
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis
                          urna id volutpat lacus laoreet non curabitur gravida.
                          Venenatis lectus magna fringilla urna porttitor
                          rhoncus dolor purus non.
                        </p>
                      </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="200">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-2"
                        className="collapsed"
                      >
                        <span>02</span> Feugiat scelerisque varius morbi enim
                        nunc? <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="300">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed"
                      >
                        <span>03</span> Dolor sit amet consectetur adipiscing
                        elit? <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-5 order-1 order-lg-2 align-items-stretch video-box"
                style={{ backgroundImage: "url(" + imageWhyUs + ")" }}
                data-aos="zoom-in"
              >
                <a
                  href="https://www.youtube.com/watch?v=LIqQNG_q2us"
                  className="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                ></a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Portafolio</h2>
              <p>
                Aqui podras encontrar todo sobre nosotros y el desarrollo de
                software
              </p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    Todo
                  </li>
                  <li data-filter=".filter-app">Apps</li>
                  <li data-filter=".filter-card">Tarjetas</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio2} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio2}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio3} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio3}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio4} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio4}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio5} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio5}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio6} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio6}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio7} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio7}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio8} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio8}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={imagePortafolio9} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href={imagePortafolio9}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div className="quote-icon">
              <i className="bx bxs-quote-right"></i>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      hemos visto cómo las complejas ideas se convierten en
                      productos funcionales y de alta calidad. Su enfoque en la
                      excelencia técnica, la orientación al cliente y la
                      creación de un equipo altamente capacitado han sido
                      pilares en la consecución de nuestros objetivos. Estamos
                      agradecidos por su liderazgo, que ha transformado nuestra
                      empresa en un referente en el mundo de la programación
                    </p>
                    <img
                      src={imageTestimonials}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      hemos visto cómo las complejas ideas se convierten en
                      productos funcionales y de alta calidad. Su enfoque en la
                      excelencia técnica, la orientación al cliente y la
                      creación de un equipo altamente capacitado han sido
                      pilares en la consecución de nuestros objetivos. Estamos
                      agradecidos por su liderazgo, que ha transformado nuestra
                      empresa en un referente en el mundo de la programación
                    </p>
                    <img
                      src={imageTestimonials2}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      hemos visto cómo las complejas ideas se convierten en
                      productos funcionales y de alta calidad. Su enfoque en la
                      excelencia técnica, la orientación al cliente y la
                      creación de un equipo altamente capacitado han sido
                      pilares en la consecución de nuestros objetivos. Estamos
                      agradecidos por su liderazgo, que ha transformado nuestra
                      empresa en un referente en el mundo de la programación
                    </p>
                    <img
                      src={imageTestimonials3}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      hemos visto cómo las complejas ideas se convierten en
                      productos funcionales y de alta calidad. Su enfoque en la
                      excelencia técnica, la orientación al cliente y la
                      creación de un equipo altamente capacitado han sido
                      pilares en la consecución de nuestros objetivos. Estamos
                      agradecidos por su liderazgo, que ha transformado nuestra
                      empresa en un referente en el mundo de la programación
                    </p>
                    <img
                      src={imageTestimonials4}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      hemos visto cómo las complejas ideas se convierten en
                      productos funcionales y de alta calidad. Su enfoque en la
                      excelencia técnica, la orientación al cliente y la
                      creación de un equipo altamente capacitado han sido
                      pilares en la consecución de nuestros objetivos. Estamos
                      agradecidos por su liderazgo, que ha transformado nuestra
                      empresa en un referente en el mundo de la programación
                    </p>
                    <img
                      src={imageTestimonials5}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section id="clients" className="clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in">
                <img src={imageCliente} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-2 col-md-4 col-6"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img src={imageCliente2} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-2 col-md-4 col-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={imageCliente3} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-2 col-md-4 col-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img src={imageCliente4} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-2 col-md-4 col-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img src={imageCliente5} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-2 col-md-4 col-6"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img src={imageCliente6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="team">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Equipo</h2>
              <p>Equipo de trabajo a Realizar el desarrollo de software</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="zoom-in">
                  <div className="member-img">
                    <img src={imageTeam} className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>
                      Ha trabajado en diversos proyectos de programación,
                      implementando soluciones web innovadoras utilizando las
                      últimas tecnologías. Su experiencia incluye el análisis de
                      requisitos, el diseño y la creación de aplicaciones web
                      escalables y eficientes. Ha demostrado habilidades sólidas
                      en el desarrollo con .NET Core, asegurando la
                      funcionalidad, el rendimiento y la seguridad de las
                      aplicaciones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="zoom-in" data-aos-delay="100">
                  <div className="member-img">
                    <img src={imageTeam2} className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>
                      Ha trabajado en diversos proyectos de programación,
                      implementando soluciones web innovadoras utilizando las
                      últimas tecnologías. Su experiencia incluye el análisis de
                      requisitos, el diseño y la creación de aplicaciones web
                      escalables y eficientes. Ha demostrado habilidades sólidas
                      en el desarrollo con .NET Core, asegurando la
                      funcionalidad, el rendimiento y la seguridad de las
                      aplicaciones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="zoom-in" data-aos-delay="200">
                  <div className="member-img">
                    <img src={imageTeam3} className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>
                      Ha trabajado en diversos proyectos de programación,
                      implementando soluciones web innovadoras utilizando las
                      últimas tecnologías. Su experiencia incluye el análisis de
                      requisitos, el diseño y la creación de aplicaciones web
                      escalables y eficientes. Ha demostrado habilidades sólidas
                      en el desarrollo con .NET Core, asegurando la
                      funcionalidad, el rendimiento y la seguridad de las
                      aplicaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Contacto</h2>
              <p>Puedes mandarnos tus contactos para comunicarnos contigo.</p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div
                  className="info d-flex flex-column justify-content-center"
                  data-aos="fade-right"
                >
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Localidad:</h4>
                    <p>
                      A108 Adam Street,
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@falcroson.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Telefono:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  data-aos="fade-left"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Tu Nombre"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Tu Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Encabezado"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Enviar Mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cuerpo;
