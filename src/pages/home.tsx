import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from '../Product';

interface HomeProps {
  searchValue: string;
  addedProducts: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
}

function Home({ searchValue, addedProducts, addProductToCart, removeProductFromCart }: HomeProps) {
  const [data, setData] = useState<Product[]>([]);
;

  const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      
      const json = await response.json();
      setData(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filtrar productos según la búsqueda
  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );




  return (
    <div className="container-md text-center">
      <h1 className="mx-auto p-2">Productos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="image-container">
                <img
                  src={product.image}
                  className="img-fluid img-hover"
                  alt={product.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <Link className="btn btn-outline-secondary" to={`/detalles/${product.id}`}>
                  Detalles
                </Link>
                {addedProducts.some(p => p.id === product.id) ? (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeProductFromCart(product.id)}
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-success"
                    onClick={() => addProductToCart(product)}
                  >
                    Agregar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Home;
