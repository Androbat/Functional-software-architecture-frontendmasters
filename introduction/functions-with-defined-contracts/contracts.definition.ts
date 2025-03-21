// CLASS STYLE
class User {
    firstName: any;
    lastName: any;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

const objectOriented = new User("John", "Doe");
objectOriented.fullName();


// FUNCTIONAL STYLE
// GENERALIZE => we have a "COMPOSABLE CONTRACT"
const functionalStyle: Record<string, unknown> = {};

// Asociative
// Almost the same thing as encapsulation
// In functional programming, encapsulation typically refers to the idea of hiding implementation details while providing a clear 
// and specific interface for interacting with a function or data.
const joinWithSpace: (...args: string[]) => string = (...args) => args.join(" ");

// Identity, which means the function will produce the same return value
// for a given input.
const identity = (a: unknown) => a;