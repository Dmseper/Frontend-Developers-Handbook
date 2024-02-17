function makeCounter(count: number) {
    return function () {
        return count++
    }
}

let counter = makeCounter(0)
let counter2 = makeCounter(2)

console.log(counter())
console.log(counter())

console.log(counter2())
console.log(counter2 ())


function makeAdder(x: number) {
    return function (y: number) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
