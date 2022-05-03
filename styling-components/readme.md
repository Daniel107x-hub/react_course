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

### Tagged templates
Podemos usar estas templates para llamar funciones que en su argumento tienen algun string, por ejemplo

```
function miTaggedTemplateLiteral(strings) {
  return console.log(strings);
}


miTaggedTemplateLiteral`Hola`;
// ['Hola']
miTaggedTemplateLiteral`Hola k ase`;
// ['Hola k ase'];
```

Si ahora usamos variables en dicha funcion, podremos ver que los strings estaticos son puestos en un array, y las variables son separadas
```
function miTaggedTemplateLiteral(strings, value, value2) {
  return console.log(strings, value, value2);
}

let nombre = "Carlos";
let edad = 32;
miTaggedTemplateLiteral`Hola soy ${nombre} y tengo ${edad} años`;

// ["Hola soy ", " y tengo ", " años"]
// "Carlos"
// 32
```

Styled components permite tener componentes con estilos con scope, cada componente tendra su estilo contenido
```
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
```
Dado que los estilos afectaran solo al componente donde este contenidos, podemos omitir las clases selectoras. En el caso anterior, eliminamos la clase .button
El simbolo & nos permite indicar que los eselectores son aplicados al componente donde estan descritos. En este caso los estilos de hover, focus, etc, seran aplicados al componente styled button.  
Se usa para aputar tambien a componentes anidados,por ejemplo, si tuvieramos un selector
```
.form label{
  "color" : red;
}
```
Podriamos hacer en su lugar:
```
& label{
  "color" : red;
}
```   
Los estilos condicionales tambien son aplicables a los styled components. Si por ejemplo, tenemos un caso donde un boton tendra un estilo en funcion de si ciertas entradas son validas o no, como en el siguiente ejemplo:

```
&.invalid input { 
  border-color : red;
  background : #FF000033;
}

&.invalid label{
  color : red;
}
```

Si la clase invalid esta presente tambien, los estilos cambiaran. Podemos pasar dicha clase a traves de props como si de un componente normal se tratase:

```
<FormControl className={!isValid && 'invalid'} invalid={!isValid}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</FormControl>
```

O podemos asignar propiedades dentro del estilo del componente gracias a la propiedad de los string templates en JS
```
& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}
```
En cuyo caso no sera necesario crear una clase nueva de css para cambiar dicho estilo condicionalmente.   

### Media queries
Media queries son usados para definir estilos en funcion del tamano de la pantalla donde se este visualizando la pagina.   
Con styled components, agregar estos queries es muy sencillo.
```
 @media(min-width: 768px){
    width: auto;
  }
```


## CSS Modules
Una alternatica a los styled components son los modulos de css. Para hacer uso de ellos deberemos renombrar nuestro archivo de estilos a que tenga la terminacion **.module.css**.  
Tambien deberemos cambiar como se importan estos estilos en nuestro componente, lo cual sera de la siguiente manera:
```
import styles from './Button.module.css';
```

Esto generara un objeto styles con todas las clases definidas en nuestro archivo css. Para cada componente donde se importen estos estilos, los nombres de las clases seran unicos.
Estas clases ahora deberan ser utilizadas de la siguiente manera:
```
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
```
Tenemos los estilos en archivos .css pero tambien tienen scope.

Podemos agregar tambien estilos dinamicos a traves de clases dinamicas siguiendo la siguiente nomenclatura:
```
<form onSubmit={formSubmitHandler}>
  <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
  </div>
  <Button type="submit">Add Goal</Button>
</form>
```

Y los media queries de la siguiente manera en nuestro archivo de estilos
```
@media(min-width: 768px){
  .button{
    width: auto;
  }
}
```