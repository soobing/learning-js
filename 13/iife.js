// * IIFE(Immediately Invoked Function Expression)와 비동기 코드

// IIFE이 중요하던 시절. -1 다섯번이 호출 됨
// var i;
// for (i = 5; i >= 0; i--) {
//   setTimeout(function () {
//     console.log(i === 0 ? "go" : i)
//   }, (5 - i) * 1000)
// }


// 해결 방법 1) 블록스코프 도입 (let 으로 해결 가능)
// for (let i = 5; i >= 0; i--) {
//   setTimeout(function () {
//     console.log(i === 0 ? "go" : i)
//   }, (5 - i) * 1000)
// }

// 해결 방법 2) 함수를 하나 더쓴다. (변수를 캡쳐)
// - 스코프가 7개 만들어지고 변수도 7개 만들어 짐. (1: 외부스코프, 6: loopBody를 호출할 때 마다)
// function loopBody(i) {
//   setTimeout(function () {
//     console.log(i === 0 ? "go!" : i);
//   }, (5 - i) * 1000)
// }

// var i;
// for (i = 5; i >= 0; i--) {
//   loopBody(i)
// }

// 해결 방법 3) IIFE를 이용 (2번 방법이 귀찮아서)
// var i;
// for (i = 5; i >= 0; i--) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i === 0 ? "go!" : i);
//     }, (5 - i) * 1000)
//   })(i);
// }