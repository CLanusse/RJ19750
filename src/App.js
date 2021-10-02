import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Clock } from './ejemplos/Clock/Clock'
import { useEffect, useState } from 'react';

function App() {  

  const [clock, setClock] = useState(true)

  useEffect(()=>{

    setTimeout(()=> {
      setClock(!clock)
    }, 3000)

  }, [clock] )

  return (
    <>
        <NavBar logo="Proyecto Profe"/>
        <ItemListContainer greeting={"Hola mundo"}/>
        { clock && <Clock /> }
    </>
  );
}

export default App;
