import React from 'react';

interface ProductCountProps {
  count: number; // Cantidad actual del producto
  onIncrement: () => void; // Función para aumentar la cantidad
  onDecrement: () => void; // Función para disminuir la cantidad
}

const ProductCount: React.FC<ProductCountProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <button 
        className="btn btn-outline-secondary me-2" // Botón para aumetar
        onClick={onIncrement}
      >
        +
      </button>
      <span className="mx-5 fs-5">{count}</span> {/* Tamaño de fuente más grande */}
      <button 
        className="btn btn-outline-secondary ms-2" // Botón para disminuir
        
        onClick={onDecrement} 
        disabled={count <= 0}
      >
        -
      </button>
    </div>
  );
};

export default ProductCount;
