import React, { useState } from "react";
import '../hoja-de-estilos/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const ManejarCambio = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  const ManejarEnvio = (e) => {
    e.preventDefault(); // evita que se recargue la pagina nuevamente 
    console.log('Enviando formulario.');

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    console.log(tareaNueva);
    props.onSubmit(tareaNueva); //enviar la tarea a listaDeTareas como props
  }
 
  return (
    <form 
      className='tarea-formulario'
      onSubmit={ManejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={ManejarCambio}
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
}

export default TareaFormulario;