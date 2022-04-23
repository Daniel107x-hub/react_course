const numbers = [1,2,3,4];

//Map 
//Ejecuta una funcion sobre cada elemento del arreglo, devuelve el resultado de aplicar dicha operacion sobre cada elemento

const double = numbers.map(item => {
    return item*2;
});
console.log(double);

//ForEach
//Ejecuta una funcion sobre cada elemento del arreglo sin devolver el resultado de aplicar dicha funcion
const newArray = numbers.forEach(item=>{
    const newItem = item*2;
    console.log(newItem);
    return newItem;
});
console.log(newArray);

//Filter
//Utilizado para filtrar elementos en un arreglo, aplica una funcion de filtrado, si dicha funcion devuelve verdadero para un elemento, el elemento se conserva, en casi contrario, es excluido del resultado
const filtered = numbers.filter(item=>{
    return item>2;
});
console.log(filtered);