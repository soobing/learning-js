// * 함수에 함수 전달
function sum(arr, f) {
  if (typeof f != 'function') f = x => x;
  return arr.reduce((a, x) => a += f(x), 0);
}

console.log(sum[1, 2, 3]);
console.log(sum[1, 2, 3], x => x * x);
console.log(sum[1, 2, 3], x => Math.pow(x, 3));