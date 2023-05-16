import { useState } from 'react';
import './estilos/App.css';
import Display from './componentes/Display';
import Boton from './componentes/Boton';
import banner_bici from './img/banner_bici.jpg'


const App = ()=>{
  
  let [contador, setContador] = useState(0);

  const manejarClick = ()=>{
    console.log("click")
    setContador(contador + 1);  
  };

  const clearClick = ()=>{
    console.log("clear click")
    setContador(contador =0);
  };

  return (
    <div className="App">
      <div className='contendor_app'>
        <h1>
          Cantidad de km que deseas recorrer
        </h1>

        <div className="contenedor_img">
          <img 
            className='img'
            src={banner_bici}
            alt='baner'
          />
        </div>

        <Display 
          contador={contador}
        />

        <div className='contendor_boton'>
          <Boton 
            text='Click' 
            esBotonClick= {true}
            manejarClick={manejarClick}
          />

          <Boton 
            text='Reiniciar'
            esBotonClick= {false}
            manejarClick={clearClick}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
