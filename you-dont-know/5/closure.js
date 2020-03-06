// 클로저
// - 정의: 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기능

// 1) 렉시컬 스코프에 가려져 잘 보이지 않는 클로저 예
// - bar는 foo 스코프에서 닫힌다. (bar는 foo안에서 선언되었기 떄문)
// - 그러나 foo 함수를 호출하면 bar함수가 속한 렉시컬 스코프 밖에서 실행되고, 이떄 이 스코프에 접근할 수 있다. 왜냐? 클로저 덕분에
// - 함수 bar는 foo 스코프에 대한 클로저를 가진다.
// - bar의 클로저: foo 스코프
// function foo() {
//   var a = 2;
//   function bar() {
//     console.log(a);
//   }
//   bar();
// }
// foo();


// 2) 클로저의 정체를 들어내는 예
// - foo는 bar를 참조하는 함수 객체 자체를 반환
// - foo를 실행하여 반환값 (bar 함수)을 baz 변수에 대입
// - 그리고 baz 함수 호출
// - 그러나 bar는 함수가 선언된 렉시컬 스코프 밖에서 실행(1번과 동일)
// - foo의 내부 스코프는 여전히 '사용 중'이므로 해제되지 않음 (=> 클로저)
// - bar는 foo 스코프에 대한 렉시컬 스코프를 클로저로 가지고 있음 (foo는 bar가 나중에 참조할 수 있도록 스코프를 살려둠)
// - 즉 bar는 여전히 해당 스코프에 대한 참조를 가지는데 그 참조를 클로저라고 한다.
// - bar의 클로저: foo 스코프

// function foo() {
//   var a = 2;
//   function bar() {
//     console.log(a);
//   }
//   return bar;
// }

// var baz = foo();
// baz();

// 3) 클로저 예제 3
// - baz는 foo 스코프(원래 코드의 렉시컬 스코프)에서 완전히 벗어나 호출 됨.
// - 함수를 값으로 넘겨 다른 위치에서 호출하는 행위는 모두 클로저가 작용한 예
// - baz는 bar의 매개변수로 전될되었고 bar 함수는 fn이라 명명된 함수를 호출.
// - 이때 foo 내부 스코프에 대해 fn의 클로저가 형성 되어 있음을 확인 할 수 있음.
// - fn 클로저: foo 스코프
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   bar(baz);
// }

// function bar(fn) {
//   fn(); // closure
// }

// 4) 클로저 예제 4
// - fn의 클로저: foo 스코프
// var fn;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz;
// }

// function bar() {
//   fn();
// }

// foo();
// bar();


// 5) 클로저 예제 5
// - wait 함수 실행 후 1초 후, wait 내부 스코프는 사라져야 하지만 익명의 함수가 여전히 해당 스코프에 대한 클로저를 가지고 있다.
// - timer 함수(익명함수) 클로저: wait 스코프
// function wait(message) {
//   setTimeout(function timer() {
//     console.log(message)
//   }, 1000)
// }

// wait("Hello, closure!");

// 6) 클로저가 사용되지 않은 예
// - IIFE가 자신의 렉시컬 스코프 밖에서 실행된 것은 아니므로 클로저가 사용된 것은 아님.
// - IIFE는 선언된 그 스코프 안에서 호출됨
// - IIFE 자체는 클로저의 사례가 아니지만,
// - IIFE는 틀림없이 스코프를 생성하고 클로저를 사용할 수 있는 스코프를 만드는 가장 흔한 도구중에 하나.
// var a = 2;
// (function IIFE() {
//   console.log(a);
// })()


// 7) 클로저 예제 6
// - timeout 함수는 for문이 끝나고 나서야 작동
// - timer 함수(익명함수) 클로저: 글로벌 스코프(i가 가지는 스코프)
// - 모든 setTimeout은 글로벌 스코프 클로저를 공유
// - 해당 스코프 안에는 오직 하나의 i만 존재 = 모든 setTimeout은 같은 i에 대한 참조를 공유
// - 그 결과, 6만 5번 호출
// - 1, 2, .., 5가 호출 되게 하려면? 더 많이 닫힌(Closured) 스코프가 필요. 반복마다 하나의 새로운 닫힌 스코프가 필요. 
// - 해결책 = 각 스코프는 자체 변수가 필요
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000)
// }

// 7-1) 해결책 1
// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000)
//   })()
// }
// 7-2) 해결책 2
// for (var i = 1; i <= 5; i++) {
//   (function (i) {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000)
//   })(i)
// }

// 7-3) 해결책 3
// for (var i = 1; i <= 5; i++) {
//   let j = i;
//   setTimeout(function timer() {
//     console.log(j);
//   }, j * 1000)
// }

// 7-4) 해결책 4
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000)
// }