import { useState } from "react";
export const PrimerComponente = () => {

  const [cantidad, setCantidad] = useState(0)
  const [nombre, setNombre] = useState(0)
  function handleClick(e){
    if (e.target.getAttribute("name") == "boton 1") {
      console.warn("Soy el boton 1");
    }
    else if (e.target.getAttribute("name") == "boton 2") {
      console.warn("Soy el boton 2");
    }
    else if (e.target.getAttribute("name") == "boton 3") {
      console.warn("Soy el boton 3");
    }
    else if (e.target.getAttribute("name") == "boton 4") {
      console.warn("Soy el boton 4");
    }
  }

  const contarOvejas = ()=>{
    setCantidad(cantidad+1);
    
    console.log(cantidad)
  }
  const onChangeInput = (e)=>{
    setNombre(e.target.value);
  }
  return (
    <>
    <button onClick={handleClick} name="boton 1">Apretame</button>
    <button onClick={handleClick} name="boton 2">Apretame</button>
    <button onClick={handleClick} name="boton 3">Apretame</button>
    <button onClick={handleClick} name="boton 4">Apretame</button>

    <button onClick={contarOvejas}>contar</button>
    <h1>Tengo {cantidad} ovejas</h1>
    <input type="text" onChange={onChangeInput}/>
    <h3>Hola {nombre}</h3>
    </>
  )
}
