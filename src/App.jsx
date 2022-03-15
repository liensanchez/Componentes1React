import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';

<></> /* se hace esto para evitar hacer un div y que nos haga otro nodo */

//componente Contenedor=app

function App() {

  let titulo='soy titulo dinamico' //las variables son estados, solo presentan datos
  let subtitulo='subtitulo hola'

  return (

    <div className='App'>

      <NavBar />

      <Titulo tituloProps={titulo} subtituloProps={subtitulo} /> {/*Extremadamente modular y dinamico porque directamente lo hice una sola vez */}
      {/*tmb se puede poner como Titulo()*/}

    </div>
  );

}

export default App;
