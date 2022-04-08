//Numbers, strings y booleans son tipos primitivos
//Los tipos primitivos, cuando se asignan en otra variable, son copiados

const number1 = 1;
const number2 = number1;

//Los objetos se almacenan como referencias, igual que los arreglos

const person = {
    name: "Daniel"
};

console.log(person);
const secondPerson = person; //Referencia a person
person.name = "Miranda";
console.log(secondPerson);

const deepCopyPerson = {...person};
person.name = "Carlos";
console.log(deepCopyPerson);