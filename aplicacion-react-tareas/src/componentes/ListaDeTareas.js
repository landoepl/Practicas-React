import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../hoja-de-estilos/ListaDeTareas.css';

function ListaDeTareas() {

  const [ tareas, setTareas] = useState([]);

  const AgregarTarea = (tarea) => {
    console.log('Tarea agregada')
    console.log(tarea);

    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();  

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = (id) => {
    const ActualizarTareas = tareas.filter( tarea => tarea.id !== id)
    setTareas(ActualizarTareas) 
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    //Fragmentos <> </> Para no anadir div
    <>
      <TareaFormulario  
        onSubmit= { AgregarTarea }
      />
      
      <div className='tareas-lista-contenedor'>
        {
          tareas.map( (tarea) => 
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea= {eliminarTarea}
              completarTarea= {completarTarea}
            />
          )
        }
      </div>
    </>
  );
}
export default ListaDeTareas;