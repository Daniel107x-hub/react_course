# Side effects <-> effects
React tiene varios objetivos principales:  
-Renderizar UI  
-Reaccionar a las entradas del usuario  
-Volver a renderizar la UI cuando sea necesario  

Esto se logra a traves de:  
-Evaluar codigo JSX  
-Manejar estado y props  
-Reaccionar a eventos y entradas  
-Reevaluar componentes en cambio de estado o props  

Los efectos secundarios son el resto de funcionalidades involucradas en una pagina web como por ejemplo:  
-Almacenar datos en el almacenamiento del navegador  
-Enviar peticiones HTTP a servidores Backend  
-Establecer y manejar timers   
-etc.

Estas tareas deben de suceder fuera de la evaluacion normal de componentes y del ciclo de renderizado, especialmente
porque podrian bloquear o retrasar el renderizado, como las peticiones HTTP

---

## useEffect Hook
Este hook es un hook o funcion que tiene la siguiente estructura:
```
useEffect(()=>{
    ...
}, [DEPENDENCIES]);
```
El primer argumento es una funcion que sera ejecutada **despues** de cada evaluacion del componente **si** es que las dependencias se han modificado.
El segundo argumento es un arreglo de dependencias tal que cuando cualquier dependencia cambia, la funcion sera reejecutada.

***Dependencias como arreglo vacio***  
Si las dependencias son un arreglo vacio, el flujo sera el siguiente:  
1. El componente se evalua y renderiza  
2. Como las dependencias se "inicializan", se detecta un cambio en ellas (aunque sean nulas), y se ejecuta la funcion de efecto  

Si posteriormente se reevalua el componente debido a un cambio de estado, el efecto no se volvera a ejecutar porque no ha habido un cambio en las dependencias,
dado que son un arreglo vacio, asi logramos que el efecto solo se ejecute una vez en la renderizacion inicial de la pantalla

***Dependencias no vacias***  
Es importante recalcar que usamos el hoox useEffect cuando queremos trabajar con codigo que debe ser ejecutado en respuesta o como un efecto secundario de algo.
Por ejemplo, supongamos que tenemos un componente donde estamos validando un campo user y otro password, y en funcion de ellos habilitamos o deshabilitamos un boton.

```
 /*
  En este caso usamos un side effect para simplificar el codigo, la que la misma logica se encontraba repetida cuando se modificaba la contrasenia o el usuario.
  En este efecto, hemos agregado esas variables como dependencias, entonces este codigo sera ejecutado cuando la contrasenia o el usuario sean modificados
  */
  useEffect(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  },[enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // LOGICA REPETIDA
    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // ); 
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // LOGICA REPETIDA
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };
```

Podemos ver que en este caso el hookm nos ayudo a eliminar logica repetida, y que debe de ejecutarse tras una accion de actualizar ya sea el campo user o password

***Que agregar y no agregar como dependencias?***   
Se debe agregar toda funcion, variable de estado, o todo aquello que se use dentro de la funcion de efecto.  
No se debe de agregar:  
1. Funciones de actualizacion de estado  
2. APIs o funciones "built in" como localStorage, fetch(), etc.  
3. Variables o funciones definidas fuera del componente  

En resumen, solo de deben de agregar cosas que pueden cambiar debido a una reevaluacion del componente

### Cleanup function
Algunas veces tendremos un efecto que tendra que realizar limpieza... que es esto?  

Una tecnica llamada **debouncing** es utilizada cuando, por ejemplo, no queremos que algo se realice al minimo cambio. Por ejemplo, supongamos que tenemos
un formulario donde el suaurio ingresa su usuario y contrasena y en cada cambio validamos si los valores son validos o no.  

```
useEffect(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  },[enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
```
En el codigo anterior, la funcion de efecto se esta ejecutando en cada nuevo caracter ingresado, modificado en la entrada.
Para este caso puede no ser un problema, pero si estuvieramos enviando peticiones HTTP, generaria trafico y posiblemente costos, para lo cual utilizamos el debouncing
donde tal vez esperamos a que se acumulen cierto numero de caracteres o esperamos a que el usuario deje de teclear por 500ms antes de ejecutar la validacion.

```
useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log("Checking validity");
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 1500)

    return ()=>{
      console.log("CLEANUP");
      clearTimeout(identifier);
    }
  },[enteredEmail, enteredPassword])
```
En esta modificacion, estamos haciendo que la validacion se ejecute 1500ms despues de que se ejecuta la funcion de efecto(En cada tecla), sin embargo, notamos una diferencia.  

La funcion de efecto puede retornar una funcion conocida como **cleanup function**, esta funcion sera ejecutada antes de ejecutar la funcion de efecto la proxima vez, excepto por la primera vez que se renderiza el componente, es decir:  

1.  Se renderiza el componente por primera vez  
2.  Se ejecuta la funcion de efecto y se establece el timer  
3.  Se establece una funcion de cleanup retornada en la funcion de efecto   

Al haber un cambio en enteredEmail o enteredPassword:  

4.  Se ejecuta la funcion de cleanup definida en la ejecucion anterior (En este caso, si no han transcurrido los 1500ms, el timer previo sera eliminado/detenido)  
5.  Se ejecuta la funcion de efecto de nuevo estableciendo un timer de nuevo en 1500ms  
6.  Se establece la funcion de cleanup con el nuevo timer.  

***
# Resumen
## Hook sin arreglo de dependencias
Si useEffect no solo tiene un arreglo de dependencias vacias, sino que no tiene dependencias
```
    useEffect(()=>{
        console.log("EFFECT");
    })
```
La funcion de efecto se ejecutara siempre en despues de cada re renderizado del componente , incluida la primera vez

## Hook con arreglo de dependencias vacio
```
    useEffect(()=>{
        console.log("EFFECT");
    },[])
```
La funcion de efecto se ejecutara despues de la primera vez que el componente es renderizado y montado por primera vez, pero no en actualizaciones posteriores (rerender cycle)

##  Hook con n dependencias
```
    useEffect(()=>{
        console.log("EFFECT");
    },[enteredEmail])
```
Ahora la funcion de efecto se ejecutara despues de cada ciclo de renderizado siempre que enteredEmail haya cambiado, incluyendo la primera vez que el componente es montado/renderizado

##  Cleanup function
```
    useEffect(()=>{
        console.log("EFFECT");

        return ()=>{
            console.log("CLEANUP");
        }
    },[enteredEmail])
```
La funcion retornada sera ejecutada al finalizar cada ciclo de renderizado posterior, siempre que enteredEmail haya cambiado y antes de ejecutar la funcion de efecto, sin incluir la primera vez que se ejecuta la funcion de efecto, asi como cuando el componente es desmontado (Removido de la UI)

---
## useReducer hook
Use reducer es otro hook incluido en la libreria de react que ayuda en el manejo de estado mas complejo que el manejado por useState; por ejemplo, multiples estados, multiples maneras de modificarlos o dependencias en otros estados.  
En estos casos, useState se vuelve muy complicado y es mas suceptible a errores, asi como puede llevar a la escritura de codigo ineficiente o con bugs. En estos casos, **useReducer** 
puede ser utilizado como un reemplazo de ***useState*** si se necesita un manejo del estado mas potente.

Algunos ejemplos donde podriamos usar useReducer en lugare de useState son:  
1.  Tenemos estados separados que podrian mejor agruparse juntos:  
    ```
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    ```  

2.  Tenemos actualizaciones de estado que dependen en otros estados (En este caso tampoco podemos utilizar la actualizacion de un estado con base en el estado pasado ya que estamos hablando de dos estados distintos y por la manera en que react maneja las actualizaciones de estado, puede que estas funciones se ejecuten antes de que sus estados de los cuales dependen sean actualizados):   
    ```
    const validateEmailHandler = () => {
      setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
      setPasswordIsValid(enteredPassword.trim().length > 6);
    };
    ```  

### Sintaxis
```
const[state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
```
**state**:  Ultimo estado, utilizado en el ciclo de reevaluacion/rerenderizado del componente  
**dispatchFn**: Funcion que puede ser utilziada para actualizar la snapshot del estado devuelto   
**reducerFn**: Funcion que es ejecutada automaticamente cuando una accion es despachada a traves de la ***dispatchFn()***, recibe la snapshot del ultimo estado y debe devolver el nuevo estado actualizado:
    ```
    (prevState, action) => newState
    ```  
**initialState**: Estado inicial  
**initFn**: Funcion para setear el estado inicial de manera programatica en caso de que el estado inicial sea muy complicado

## Ejemplo de uso, simplificar multiples estados asociados en un solo manejador de estado