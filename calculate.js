// first way
const add = (n1,n2) => console.log((n1+n2));
const sub = (n1,n2) => console.log((n1-n2));

// second way
// module.exports = {add, sub, mul: (n1,n2) => console.log((n1*n2))};

const calculate = {
    add: add,
    sub: sub,
    mul: (n1,n2) => console.log((n1*n2)),
};

module.exports = {calculate};