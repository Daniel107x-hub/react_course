# Notes
## State that depends on a previous state
In order to update a state that depends on a previous state, it's recommended to follow the upcoming syntax:

```
setVariable((previousState) => {
    return UPDATED_VARIABLE;
})
```

## Two way binding
Not only listen to events, but use events also to update the values in displays

## Child to parent communication
We can pass data down the component tree via props, but how can we do it in the other direction?

**Se puede realizar haciendo uso de los props!**

Para esto, sera necesario definir, en el componente padre, una funcion que se ejecutara cuando queramos obtener datos desde el componente hijo.
Dicha funcion, debera ser pasada al hijo a traves de props, el cual a su vez, ejecutara llamara a esta funcion con los parametros necesarios cuando lo requiera.

***Ejemplo:***
```
//Componente padre
const ParentComponent = () =>{
    ...
    const onEventHandler = (data) =>{ //Metodo que sera ejecutado desde el hijo y donde recibiremos los datos enviados por el hijo
        console.log(data);
    }
    ...
    return(
        <ChildComponent onEvent={onEventHandler} /> //Pasamos la referencia de nuestra funcion
    )
}

//Componente hijo
const ChildComponent = (props) =>{
    const onEventHandler = (e) =>{
        ...
        props.onEvent(data); //Ejecutamos la funcion desde el hijo y pasamos como argumentos los datos del hijo
        ...
    }
    ...
}
```

> Intentar usar 2 way binding siempre, no solo pasar valores del componente hijo al padre, sino regresar el estado al componente hijo para que sea usado como valor

## Controlled and uncontrolled components
Los **componentes controlados** son aquellos en los que los datos son pasados al padre, y el padre se encarga de devolver el valor que el hijo mostrara (2 way binding).  
Esto implica que el valor, y los cambio en este no son manejados en el hijo, sino en un componente padre.
Cuando un componente solo funciona para presentar datos, y no maneja ningun estado, decimos que es un componente **dumb** o **stateless**
Los componentes encargados de manejar estados son componentes **smart** o **stateful**

## Rendering lists of components

Utilizamos el metodo **.map()** ya que este metodo se encarga de iterar por todo el arreglo y transformarlo despues de aplicar la funcion especificada
```
{
    array.map(item=> <MyCustomComponent item={item}/>)
}
```
### Item keys
Todos los componentes poseen una propiedad llamada key la cual debe de utilizarse siempre que se haga renderizado de listas de componentes.   
Por que?   
React hace el renderizado de listas de la siguiente manera:   
1. Examina el tamaño del array
2. Si es distinto a la ultima vez que se renderizo dicho array, agrega un elemento al final
3. Recorre los elementos del array para actualizar su contenido   

Si no se utiliza la propiedad key, react no tiene forma de identificar si un elemento ya existia o no, por lo cual, recorrera todos los elementos y actualizara su contenido, sin embargo, el atributo key es la manera en que podemos ayudar a react a identificar los elementos previamente existentes, a traves de este identificador unico.
Entonces, si actualizamos una lista, react solo actualizara los nuevos items, en lugar de recorrer toda la lista y actualizar sus atributos.
```
    <MyCustomComponent key={item.index}>
```


## Contenido condicional
Es posible incluir expresiones de JS dentro del codigo JSX que conforma a nuestros componentes haciendo uso de **{ }**, esto nos puede permitir hacer renderizado condicional de componentes. Sin embargo, react no permite el uso de bloques del tipo **if...else if...** o **for loops** en dicho codigo.  
Para solventar los bloques de condiciones, podemos hacer uso de:   


### Operadores ternarios: ###
```isMax ? [Valor si verdadero] : [Valor si falso]```
```
filteredExpenses.length === 0?(
    <p>No expenses</p>
):(
    filteredExpenses.map(expense => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id}/>)
)   
```


### Condiciones: ###
```isMax && [Codigo a devolver si verdadero]```   
```
{filteredExpenses.length === 0 && <p>No expenses found.</p>} 
{filteredExpenses.length >0 &&
    filteredExpenses.map((expense)=>(
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))
}
```
En este caso, JS va a retornar el codigo despues de **&&** en caso de que se satisfaga la condicion, lo cual podemos aprovechar para escribir aqui el componente o subcomponente que deseamos devolver   
