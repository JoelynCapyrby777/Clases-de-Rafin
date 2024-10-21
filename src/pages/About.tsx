function About() {
    return (
      <>
        <div className="container-md text-center my-5">
          <h1 className="mb-4">Nosotros</h1>
          
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="p-4 border rounded bg-light shadow-sm flex-fill">
                  <h4 className="text-primary">Nuestra Misión</h4>
                  <p>
                    Nuestra misión es proporcionar productos de la más alta calidad,
                    ofreciendo a nuestros clientes una experiencia excepcional.
                    Creemos en la innovación y el compromiso con la sostenibilidad.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="p-4 border rounded bg-light shadow-sm flex-fill">
                  <h4 className="text-primary">Nuestra Visión</h4>
                  <p>
                    Nos esforzamos por ser líderes en el mercado,
                    ofreciendo soluciones que mejoren la vida de nuestros clientes
                    y contribuyan al bienestar de la comunidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row mt-4">
            {[
              {
                title: "Equipo Innovador",
                text: "Nuestro equipo está compuesto por expertos en diversas áreas, todos comprometidos con la innovación y el crecimiento.",
                img: "https://via.placeholder.com/300",
                alt: "Equipo 1"
              },
              {
                title: "Compromiso Social",
                text: "Creemos en dar de vuelta a la comunidad. Participamos activamente en iniciativas sociales y ambientales.",
                img: "https://via.placeholder.com/300",
                alt: "Equipo 2"
              },
              {
                title: "Calidad Garantizada",
                text: "Nuestros productos son sometidos a rigurosos controles de calidad para asegurar la satisfacción del cliente.",
                img: "https://via.placeholder.com/300",
                alt: "Equipo 3"
              },
            ].map((card, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow">
                  <img src={card.img} className="card-img-top" alt={card.alt} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default About;
  