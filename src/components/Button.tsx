import { useState } from "react";

function Button() {
    const[nameStudent,setNameStudent]= useState("Yoel")
    const showNameStudent=() => {
        setNameStudent('Diana')
    }
  return (
    //jsx

    <>
    <h1>Ejemplo de boton</h1>
    
      <button className="btn btn-primary" onClick={showNameStudent} >Dar Click</button>
    </>
  );
}

export default Button;
