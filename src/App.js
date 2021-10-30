import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { UserAuthContext } from './context/UserAuthContext';
import { useContext } from 'react';
import { UserAuthenticate } from './components/UserAuthenticate/UserAuthenticate';
import Signup from './components/UserAuthenticate/Signup';

// Estilos de bootwatch
import 'bootswatch/dist/minty/bootstrap.min.css';

function App() {
  const { isAuthenticated } = useContext(UserAuthContext);

  return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            <Route exact path='/login'>
              <UserAuthenticate />
            </Route>

            {/* <Route exact path='/signup'>
              <UserAuthenticate />
            </Route> */}

            <Route exact path='/signup' component={Signup} />

            <Switch>
              {isAuthenticated ? (
                <>
                  <NavBar logo='Proyecto Profe' />
                  <Route exact path='/'>
                    <ItemListContainer />
                  </Route>

                  <Route exact path='/productos/:categoryId'>
                    <ItemListContainer />
                  </Route>

                  <Route exact path='/detail/:itemId'>
                    <ItemDetailContainer />
                  </Route>

                  <Route exact path='/contacto'>
                    <h1>Contacto</h1>
                  </Route>

                  <Route exact path='/cart'>
                    <CartScreen />
                  </Route>

                  <Route path='*'>
                    <Redirect to='/' />
                  </Route>
                  {/* <Route path="*">
                  <h2>404... no encontrado</h2>
              </Route> */}
                </>
              ) : (
                <UserAuthenticate />
              )}
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
