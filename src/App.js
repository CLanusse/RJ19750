import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  

  

  return (
    <>
        <NavBar logo="Proyecto Profe"/>
        <ItemListContainer greeting={"Hola mundo"}/>
    </>
  );
}

export default App;
