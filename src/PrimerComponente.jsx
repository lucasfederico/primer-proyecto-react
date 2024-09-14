import { useState, useEffect } from "react";
import Saludar from './components/Saludar'
function PrimerComponente(){
  useEffect(()=>{
    console.log("Soy el useeffect y me ejecuto");
  },[]);

  
  const [nombre, setNombre] = useState("Lucas"); // Estado para el nombre en el componente padre
  const apellido = "Gaspar"; // Valor fijo para el apellido
  // Agrupamos nombre, apellido y setNombre en un solo objeto
  const persona = {
    nombre,
    apellido,
    setNombre
  };
  return (
    <>
    <h1>{nombre}</h1>
    <Saludar persona={persona}/>
    </>
  )
}
export default PrimerComponente;