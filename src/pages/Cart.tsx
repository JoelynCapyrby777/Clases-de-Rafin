import React, { useEffect, useState } from 'react';
import ProductCount from '../components/ProductCount';
import { Product } from '../Product';

interface CartProps {
  addedProducts: Product[];
  removeProductFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ addedProducts, removeProductFromCart }) => {
  // Mapa para almacenar las cantidades de cada producto
  const [productCounts, setProductCounts] = useState<{ [key: number]: number }>({});

  // Inicializa el estado productCounts cuando el componente se monta
  useEffect(() => {
    const initialCounts = addedProducts.reduce((acc, product) => {
      acc[product.id] = 1; // Inicializa la cantidad en 1
      return acc;
    }, {} as { [key: number]: number });
    
    setProductCounts(initialCounts);
  }, [addedProducts]);

  const handleIncrement = (productId: number) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    setProductCounts((prevCounts) => {
      const newCount = (prevCounts[productId] || 1) - 1;
      if (newCount <= 0) {
        const { [productId]: _, ...rest } = prevCounts; // Elimina la clave
        return rest;
      }
      return {
        ...prevCounts,
        [productId]: newCount,
      };
    });
  };

  const getTotal = () => {
    return addedProducts.reduce((total, product) => {
      const count = productCounts[product.id] || 1; // Usa 1 si no hay entrada
      return total + product.price * count;
    }, 0);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Carrito de compras</h1>

      {addedProducts.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {addedProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <ProductCount
                      count={productCounts[product.id] || 1} // Asegúrate de que el contador inicie en 1
                      onIncrement={() => handleIncrement(product.id)}
                      onDecrement={() => handleDecrement(product.id)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeProductFromCart(product.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total de su compra: ${getTotal().toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
