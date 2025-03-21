function sum(x: number){
    return ({
        x,
        contact: (other: { x: number; }) => {
            sum(x + other.x)
        }
    })
}

const res = sum(3).contact(sum(5));

const Any = (x: boolean) => ({
    x,
    concat: (other: { x: any; }) => {
        Any(x || other.x)
    }
});

const anyRes = Any(true).concat(Any(false));

const Product = (x: number) => ({
    x,
    contact: (other: { x: number; }) => {
        Product(x * other.x)
    }
});

const result = Product(1).contact(Product(10));
console.log(result)


