import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poke } from './ejemplos/Poke/Poke';

function App() {  

  

  return (
    <>
        <NavBar logo="Proyecto Profe"/>
        {/* <ItemListContainer greeting={"Hola mundo"}/> */}
        <Poke />
    </>
  );
}

export default App;
