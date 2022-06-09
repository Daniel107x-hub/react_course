const numbers = [1,2,3,4,5];
const newNumbers = [...numbers, 10];
console.log(newNumbers);

const person = {
    name: 'Daniel',
    age: 5
}

const newPerson = {
    ...person,
    title: 'Sr',
}

console.log(newPerson);

const myFunction = (...args) =>{
    console.log(args[0]); //Daniel
    console.log(args[1]); //Hector
    console.log(args[2]); //2
}

myFunction("Daniel","Hector",2);