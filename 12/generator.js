// * 제너레이터
// - 언제든 호출자에게 제어권을 넘길 수 있다. (yield)
// - 제너레이터는 호출한 즉시 실행되지 않고, 이터레이터를 반환한다. (iterator의 next()를 호출함에 따라 실행)

// * Simple Generator
function* rainbow() {
  yield 'red'
  yield 'orange'
  yield 'yellow'
  yield 'green'
}

const it = rainbow();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
