import './App.css';
import Testimonio from './componentes/Testimonio.js'
import { AvatarShawn, AvatarSarah, AvatarEmma } from './componentes/Avatar-testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        < Testimonio 
          nombre= { AvatarShawn.nombre }
          pais= { AvatarShawn.pais }
          imagen= { AvatarShawn.imagen }  
          alt= { AvatarShawn.alt }
          cargo= { AvatarShawn.cargo }
          empresa= { AvatarShawn.empresa }
          testimonio= { AvatarShawn.testimonio }
        />
        < Testimonio 
          nombre= { AvatarSarah.nombre }
          pais= { AvatarSarah.pais }
          imagen= { AvatarSarah.imagen }
          alt= { AvatarSarah.alt }
          cargo= { AvatarSarah.cargo }
          empresa= { AvatarSarah.empresa }
          testimonio= { AvatarSarah.testimonio }
        />
        < Testimonio 
          nombre= { AvatarEmma.nombre }
          pais= { AvatarEmma.pais }
          imagen= { AvatarEmma.imagen }
          alt= { AvatarEmma.alt }
          cargo= { AvatarEmma.cargo }
          empresa= { AvatarEmma.empresa }
          testimonio= { AvatarEmma.testimonio }
        />
      </div>
    </div>
  );
}

export default App;
