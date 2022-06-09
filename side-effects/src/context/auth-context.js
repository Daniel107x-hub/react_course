import React from "react";

const AuthContext = React.createContext({ //Este objeto no es un componente, pero si contiene un componente
    isLoggedIn: false
}); //Default context, contexto a traves de toda la aplicacion

export default AuthContext;