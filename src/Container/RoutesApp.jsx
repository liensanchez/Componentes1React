import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Titulo from '../components/Titulo/Titulo';



let titulo='soy titulo dinamico' //las variables son estados, solo presentan datos

let subtitulo='subtitulo hola'


function RoutesApp() {

  return (

    <>

      <NavBar> </NavBar>

      <Titulo tituloProps={titulo} subtituloProps={subtitulo} /> {/*Extremadamente modular y dinamico porque directamente lo hice una sola vez */}
      {/*tmb se puede poner como Titulo()*/}

      
    </>
  )

}

export default RoutesApp