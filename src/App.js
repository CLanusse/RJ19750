import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { UserAuthContext } from './context/UserAuthContext';
import { useContext } from 'react';
import { UserAuthenticate } from './components/UserAuthenticate/UserAuthenticate';
import { Checkout } from './components/Checkout/Checkout';





function App() {  

  const {isAuthenticated} = useContext(UserAuthContext);

  return (
    <>
      <UIProvider>
        <CartProvider>

          <BrowserRouter>
            <NavBar logo="Proyecto Profe"/>

    
            <Switch>
            { isAuthenticated 
              ?
              <>
              <Route exact path="/">
                  <ItemListContainer />
              </Route>

              <Route exact path="/productos/:categoryId">
                  <ItemListContainer />
              </Route>

              <Route exact path="/detail/:itemId">
                  <ItemDetailContainer />
              </Route>

              <Route exact path="/contacto">
                  <h1>Contacto</h1>
              </Route>

              <Route exact path="/cart">
                <CartScreen/>
              </Route>

              <Route exact path="/checkout">
                <Checkout/>
              </Route>

              <Route path="*">
                  <Redirect to="/"/>
              </Route>
              {/* <Route path="*">
                  <h2>404... no encontrado</h2>
              </Route> */}
              </>
              :
                <UserAuthenticate/>
              }
            </Switch>
          </BrowserRouter>

        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
