export default class User {
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    //Methode 
    get fullname(){
        return this.makeFullName()
    }
    makeFullName(){
        return this.firstname+this.lastname
    }

}


