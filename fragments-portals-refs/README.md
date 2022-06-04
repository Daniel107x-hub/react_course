# Fragmentos, portals y refs
## Limitaciones de JSX
- No es posible tener mas de un elemento raiz en JSX, y tampoco se puede almacenar mas de un elemento raiz en una variable
    ```
        return(
            <h1> Header </h1>
            <p> This doesn't work </p>
        );
    ```    

Una solucion podria ser envolver los componentes dentro de un div
```
    return(
        <div>
            <h1> Header </h1>
            <p> This doesn't work </p>
        </div>
    );
```  
Otra podria ser envolver los elementos que se estan devolviendo dentro de un array, ya que JSX puede trabajar con arrays
```
    return(
        [
            <h1> Header </h1>,
            <p> This doesn't work </p>
        ]
    );
```
Sin embargo, recordemos que siempre quese trabaja con arrays, react requiere un id para cada uno de los elementos en la lista, y muichas veces es mejor simplemente agregar
un warpper div que envuelva a los hijos, aunque ahoora el problema es que podemos terminar con muchos divs anidados, y no es una buena practica.

Tambien podemos crear un componente Wrapper que devuelva a todos sus hijos.
```
    return(
        <Wrapper>
            <h1> Header </h1>
            <p> This doesn't work </p>
        </Wrapper>
    );

    const Wrapper = (props) =>{
        return props.children;
    }
```  
Esto no agregara ningun elemento nueva al DOM, simplemente hara que se cumpla la regla donde en una variable solo puede haber almacenado un componente raiz.

React ya properciona esta funcionalidad por defectp con los fragmentos

```
    return(
        <React.Fragment>
            <h1> Header </h1>
            <p> This doesn't work </p>
        </React.Fragment>
    );
```  

## React Portals
Supongamos el siguiente codigo
```
return(
    <React.Fragment>
        <MyModel />
        <MyForm />
    </React.Fragment>
)
```

Que deberia de devolver un codigo similar a este:
```
    <section>
        <h1>Othe content ... </h1>
        <div class="myModal>
            <h2>Modal title!</h2>
        </div>
        <form>
         ... Form content ...
        </form>
    </section>
```

El div con el modal tiene un problema. Puede funcionar debido a los estilos, pero semanticamente esta mal la estructura ya que dicho elemento se sobrepone a 
todos los elementos de la pagina, no deberia de estar anidado a ellos.

Los portales sirven para mover copntenido desde la estructura JSX hacia otro lado del DOM, algo especialmenbte util para resolver detalles de semantica 
como en el ejemplo anterior.

EL metodo para crear portales recibe dos parametros, el primero es el elemento a renderizar y el segundo es la ubicacion del elemento padre donde
el componente se va a renderizar, por ejemplo:
```
import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = props =>{
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props =>{
  return(
    <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))
      }
      {
        ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById("overlay-root"))
      }
    </React.Fragment>
  );
};

export default ErrorModal;
```

Y en nuestro index html tenemos la siguiente estructura
```
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    <div id="root"></div>
    <!--
        This HTML file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm start` or `yarn start`.
        To create a production bundle, use `npm run build` or `yarn build`.
-->
</body>
```
Ahi es donde los modulos se van a renderizar

## References
Las references otogan acceso a los elementos del DOM y nos permiten trabajar con ellos.
Con las referencias, podemos establecer una conexion entre elementos HTML que estan siendo renderizados y codigo HTML, esto permite, por ejemplo,
que en lugar de actualizar un estado cada que el valor en un input text cambie, podamos hacer uso del valor solo cuando un formulario se vaya a submit.

## Uncontrolled components vs controlled
Los componentes no controlados son aquellos donde nosotros no manejamos el estado con React, sino que el estado se maneja de manera interna