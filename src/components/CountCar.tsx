interface CountCarProps {
  count: number; // Prop para recibir el conteo de productos
}

function CountCar({ count }: CountCarProps) {
  // Solo se muestra el badge si el conteo es mayor que cero
  if (count <= 0) {
    return null; // No renderiza nada si el conteo es cero o negativo
  }

  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
      {count} {/* Muestra el conteo si es mayor que cero */}
    </span>
  );
}

export default CountCar;
