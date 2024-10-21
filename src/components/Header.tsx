import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { ChangeEvent } from "react";
import CountCar from "./CountCar";

interface HeaderProps {
  value: string; // Valor del input
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Manejo del evento onChange
  cartCount: number; // Conteo de productos en el carrito
}

function Header({ value, onChange, cartCount }: HeaderProps) {
  const location = useLocation(); // Obtener la ubicación actual

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-purple">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            YoelTienda
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item position-relative">
                <CountCar count={cartCount} /> {/* Pasa la cantidad de productos */}
                <Link className="nav-link" to={"/carrito"}>
                  Carrito
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/nosotros"}>
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/encuentranos"}>
                  ¿Dónde nos encontramos?
                </Link>
              </li>
            </ul>
            {/* Renderiza el componente Search solo si estamos en la página de inicio */}
            {location.pathname === "/" && <Search value={value} onChange={onChange} />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
