// * 제너레이터
// - 언제든 호출자에게 제어권을 넘길 수 있다. (yield)
// - 제너레이터는 호출한 즉시 실행되지 않고, 이터레이터를 반환한다. (iterator의 next()를 호출함에 따라 실행)

// * Simple Generator
// function* rainbow() {
//   yield 'red'
//   yield 'orange'
//   yield 'yellow'
//   yield 'green'
// }

// const it = rainbow();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// * 양방향 통신
// function* interrogate() {
//   const name = yield "What is your name?";
//   const color = yield "What is your favorite color?";
//   return `${name}'s favorite color is ${color}`
// }

// const it = interrogate();
// console.log(it.next());
// console.log(it.next('Ethan'));
// console.log(it.next('Orange'));




// * generator와 return
// -보통 done이 true이면 value 프로퍼티에 주의를 기울이지 않음
// - return은 제너레이터를 중간에 종료하는 목적으로만 사용하기
function* abc() {
  yield 'a';
  yield 'b';
  return 'c';
}

const it = abc();
console.log(it.next());
console.log(it.next());
console.log(it.next());


for (let i of abc()) {
  console.log(i) // c는 출력 안됨
}