// * 함수에 함수 전달
function sum(arr, f) {
  if (typeof f != 'function') f = x => x;
  return arr.reduce((a, x) => a += f(x), 0);
}

// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3], x => x * x));
// console.log(sum([1, 2, 3], x => Math.pow(x, 3)));

// * 함수를 반환하는 함수
// function sumOfSquares(arr) {
//   return sum(arr, x => x * x);
// }

// * 커링(Currying):  매개변수 여러 개를 받는 함수를 매개변수 하나만 받는 함수로 바꾸는 것

function newSummer(f) {
  return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => x * x)
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfCubes([1, 2, 3]));