export default class Human{
    constructor(gender){
        this.gender = gender;
    }

    sayMyGender(){
        console.log(`My gender is ${this.gender}`);
    }
}