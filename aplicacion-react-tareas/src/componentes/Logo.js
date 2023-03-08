/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FreeCodeCampLogo from '../imagenes/freecodecamp-logo.png'
import '../hoja-de-estilos/Logo.css'

const Logo = () => (
  <div className='freecodecamp-logo-contenedor'>
    <img
      src={FreeCodeCampLogo}
      className='freecodecamp-logo'
    />
  </div>
);

export default Logo;