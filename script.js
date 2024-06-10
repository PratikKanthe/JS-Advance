console.log(a1); // this is hoisting example in hoisting declaration comes on top no matter where it declared

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

(async function main() {
  //   let a = await sleep();
  //   console.log(a);
  //   let b = await sleep();
  //   console.log(b);
  let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
  console.log(x, y, rest); // rest will show remaining this is called destructuring
})(); // this is an IIFE Function

let obj = {
  a: 1,
  b: 2,
  c: "Three",
  d: 4,
};

function sum(a, b, c) {
  return a + b + c;
}
let { a, b } = obj; // pulling out objects
console.log(a, b);

let arr = [1, 2, 4];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); // this is an example of spread operator

var a1 = 6; // hoisting works only with var not with let and const
