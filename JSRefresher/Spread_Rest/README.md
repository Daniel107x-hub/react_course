# Spread and rest operator

**...**

Operador spread: Separar arreglos o propiedades de objetos

const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp:4}

***Nuevos elementos toman precedencia sobre los antiguos en caso de ya existir***

Operador rest: Utilizado para mezclar una lista de argumentos en un array

function sortArgs(...args){
    return args.sort(); // Recibe los argumentos en un aray
}
