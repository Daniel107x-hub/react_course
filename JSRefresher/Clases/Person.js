import Human from "./Human.js";

export default class Person extends Human{
    constructor(name, gender){
        super(gender);
        this.name = name;
    }

    sayMyName(){
        console.log(`Hi, my name is ${this.name}`);
    }
}