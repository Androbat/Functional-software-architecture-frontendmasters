function sum(x: number){
    return ({
        x,
        contact: other => {
            sum(x + other.x)
        }
    })
}

const res = sum(3).contact(sum(5));

const Any = x => ({
    x,
    concat: other => {
        Any(x || other.x)
    }
});

const anyRes = Any(true).concat(Any(false));


