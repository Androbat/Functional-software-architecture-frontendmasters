// What is a monad?
// A monad is a design pattern to:
// * Manage state
// * Manage side effects
// * Manage async code
// * Manage null values
// * Manage exceptions

// Thinking Inside the Box — Maybe Monad
// We can think of a Monad as a box, meaning we can take a value and insert it inside a box known as Just.
// In a case where there is no value, it is represented by an empty Box known as Nothing.
// We can then create a Maybe that can take the form of either Just or Nothing.

// One of the outstanding features of Monads is their composability, 
// and we can achieve it by using a special function known as bind 
// (which might also be referred to as flatMap or chain).

// bind enables us to take a function, 
// apply it to the Monad, and receive a new Monad in return.
type AnyObject = { [key: string]: any };

abstract class Maybe<T> {
    abstract bind<U>(func: (value: T) => Maybe<U>): Maybe<U>;
}

class Just<T> extends Maybe<T> {
    constructor(private value: T) {
        super();
    }

    bind<U>(func: (value: T) => Maybe<U>): Maybe<U> {
        return func(this.value);
    }
}

class Nothing<T> extends Maybe<T> {
    bind<U>(func: (value: T) => Maybe<U>): Maybe<U> {
        return new Nothing<U>();
    }
}

// Usage
function prop<T extends AnyObject, K extends keyof T>(p: K) {
    return function (obj: T | undefined): Maybe<T[K]> {
        if (p !== undefined && obj !== undefined) {
            return new Just(obj[p]);
        }
        return new Nothing<T[K]>();
    }
}

// Match function definition:
// wich is just pattern matching
abstract class MaybeWithMatch<T> {
    abstract bind<U>(func: (value: T) => MaybeWithMatch<U>): MaybeWithMatch<U>;
    abstract match<R1, R2>(
        ifJust: (value: T) => R1,
        ifNothing: () => R2
    ): R1 | R2;
}