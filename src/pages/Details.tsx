import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../Product";

interface DetailsProps {
  addedProducts: Product[];  // Productos añadidos al carrito
  addProductToCart: (product: Product) => void;  // Función para añadir producto
  removeProductFromCart: (productId: number) => void;  // Función para eliminar producto
}

function Details({ addedProducts, addProductToCart, removeProductFromCart }: DetailsProps) {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await response.json();
      setProduct(json);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div className="text-center">Cargando...</div>;
  }

  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
        {hasHalfStar && <i className="bi bi-star-half text-warning"></i>}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <i key={index} className="bi bi-star text-warning"></i>
        ))}
      </>
    );
  };

  return (
    <div className="container-md my-5">
      <div className="row">
        {/* Imagen del producto */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "300px" }}
          />
        </div>

        {/* Detalles del producto */}
        <div className="col-lg-6 col-md-12">
          <h1 className="display-4">{product.title}</h1>
          <h2 className="text-success my-3">${product.price.toFixed(2)}</h2>

          {/* Clasificación del producto */}
          <div className="my-3">
            <h5 className="mb-2">Clasificación: {product.rating.rate} de 5</h5>
            <div className="d-flex justify-content-start">
              {renderStars(product.rating.rate)}
            </div>
            <small className="text-muted">({product.rating.count} reseñas)</small>
          </div>

          {/* Descripción */}
          <p className="lead my-4">{product.description}</p>

          {/* Botón de Agregar al carrito */}
          {addedProducts.some(p => p.id === product.id) ? (
            <button
              className="btn btn-outline-danger btn-lg"
              onClick={() => removeProductFromCart(product.id)}
            >
              Eliminar
            </button>
          ) : (
            <button
              className="btn btn-outline-success btn-lg"
              onClick={() => addProductToCart(product)}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
