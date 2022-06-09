import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  /*
  Insertar esto aqui presenta un problema.
  Este bloque se va a ejecutar cuando se renderice el componente y establecera isLoggedIn a true
  Como se esta actualizando el estado, el componente se volvera a cargar
  Como el componente se vuelve a cargar, este bloque se vuleve a ejecutar, y asi tenemos un ciclo infinito
  const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
  if(storedUserLoggedIn === '1'){
    setIsLoggedIn(true);
  }
  */

  /*
  El siguiente bloque se ejecutara despues de la reevaluacion del componente, pero si y solo si las dependencias fueron modificadas.

  En este caso las dependencias son un arreglo vacio, entonces pasara lo siguiente:
  -Al inicio de la aplicacion, el componente se evaluara y se ejecutara la funcioon de efecto al final porque antes del inciio podemos decir que no habia dependencias
  -Como estamos actualizando el estado, el componente se volvera a evaluar pero el efecto ya no se ejecutara, porque las dependencias no cambiaron desde el ciclo anterior
  */
  useEffect(()=>{
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
    if(storedUserLoggedIn === '1'){
      setIsLoggedIn(true);
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
