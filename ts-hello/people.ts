export class People {
    private _firstName!: string; // ! mean can be null
    private _lastName!: string;

    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        this._firstName = value; 
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        this._lastName = value; 
    }

    get fullName(){
        return console.log(this._firstName + " " + this._lastName + "\n");
    }
}