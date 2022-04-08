export class Human{
    gender = "Male";
    sayGender = () => console.log(`My gender is ${this.gender}`);
}

export class Person extends Human{
    myName = "Daniel";
    gender = "Female";

    sayMyName = () => console.log(`My name is ${this.myName}`);
}