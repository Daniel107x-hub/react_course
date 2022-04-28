# Estilos 
## Estilos condicionales
Una de las maneras en las que podemos aplicar estilos a ciertos elementos dentro de una pagina es haciendo uso de los **inline styles**. Podemos aplicarlos de la siguente manera:
```
<input type="text" style={{
    border: !isValid ? '1px solid red' : '',
    background: !isValid ? '#FF000044' : 'white'
    }} onChange={goalInputChangeHandler} />
```
Al insertar las dobles llaves, en el interior podemos escribit codigo javascript, lo cual nos permitira hacer validaciones aunque el nombre de los estilos pase de ser **dash-case** a ***camelCase***.   
Asi ahora en lugar de tener una propiedad llamada *border-color*, ahora se llama **borderColor** porque estamos usando codigo JSX

Es importante recalcar que los inline styles tienen la mayor prioridad, por lo cual es posible que sobreescribamos otros estilos que ya estabamos aplicando.  
Otro problema es que tenemos cierta duplicacion, ya que tenemos los estilos definidos en su archivo css y tambien tenemos que escribirlos en nuestros estilos condicionales para poder
regresar al estilo previo, o viceversa.

## Clases condicionales
Una alternativa a agregar inline styles son las clases condicionales. A un elemento, dada una condicion, podemos aplicarle una clase css la cual contendra ciertos estilos definidos para dicha clase. Por ejemplo, para el caso anterior, podemos crear una clase *invalid* que contenga los estilos asociados a nuestro form. Para hacer esto y tambien mantener el scope de nuestras clases, podemos hacer lo siguiente:
```
//.css file
.form-control.invalid input{ //El elemento tiene las clases .form-control e invalid, pero dentro apuntamos al hijo del tipo input
    border-color : red;
    background : #FF000033;
}

.form-control.invalid label{
    color : red;
}

//Component js
<form onSubmit={formSubmitHandler}>
    <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
    </div>
    <Button type="submit">Add Goal</Button>
</form>
```
Las comillas **``** son conocidas como template strings.

## Styled components
Hasta ahora, los estilos creados son aplicados a todos los elementos del la pagina sin importar en que componente se haya importado. Es decir, siempre que cualquier componente utilice cierto estilo previamente definido en un archivo css, se le aplicara dicho estilo sin importar en que parte de la pagina este. Con esto decimos que los estilos no tienen un alcance definido (scoped).   
Si queremos evitar esto, podemos hacer uso de **styled components**.  

Styled components es un paquete que nos permite crear componentes cuyos estilos olo se encuentran restringidos en alcance a dichos componentes donde fueron creados, es decir, su scope esta limitado.

```
npm install --save styled-components
```