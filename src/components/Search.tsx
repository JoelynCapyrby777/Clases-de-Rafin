import React, { ChangeEvent } from "react";

interface SearchProps {
  value: string; // Valor del input
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Manejo del evento onChange
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value} // Vincula el valor del input al estado en Header
        onChange={onChange} // Vincula la función que maneja el cambio
      />
    </div>
  );
};

export default Search;
