import { useEffect, useState } from "react";


function Home() {
  const [data, setData] = useState([]);//Este alamecena datos de la api

  //funcion asincrona que realiza una peticion a una Api nos devuelve n json
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const json = await response.json();
    setData(json);
  };

  //detecta cuando algo cambia e la all e invoca getproducts
  useEffect(() => {
    getProducts();
    console.log(data);
  }, []);

    return (
      <>
      <div className="container" >
      <h1>Productos <span class="badge text-bg-secondary">New</span></h1>

      
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="#" className="btn btn-primary">Detalles</a>
                  </div>
                  <a href="#" className="btn btn-success">Agregar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </>
    );
    
  
  
  
  

}

export default Home;
