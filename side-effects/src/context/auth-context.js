import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({ //Este objeto no es un componente, pero si contiene un componente
    isLoggedIn: false,
    onLogout: () => {}, // Se agrega aqui para mejorar el autocompletado de codigo,
    onLogin: (email, password) => {} //Agregamos propiedades o cuerpom de funcion para mejorar el autocompletado
}); //Default context, contexto a traves de toda la aplicacion

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
        if(storedUserLoggedIn === '1'){
          setIsLoggedIn(true);
        }
      },[])

    const logoutHandler = () =>{
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }

    const loginHandler = () =>{
        localStorage.setItem("isLoggedIn", '1');
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;