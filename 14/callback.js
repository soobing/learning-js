// * setTimeout vs setInterval(clearInterval)
// - setTimeout은 callback 한번만 실행 후 멈춤
// - setInterval은 callback이 정해진 주기마다 호출되고, clearInterval을 사용해야만 중단 됨.
// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function () {
//   let now = new Date();
//   if (now.getMinutes() != start.getMinutes() || ++i > 10) {
//     return clearInterval(intervalId);
//   }
//   console.log(`${i}: ${now}`)
// }, 1000)



// * 스코프 & 클로저가 비동기 실행에 영향을 미치는 부분

// ex1) i를 for루프 상위 스코프에 선언 => -1 이 6번 찍힘
// function countdown() {
//   let i;
//   console.log("CountDown: ");
//   for (i = 5; i >= 0; i--) {
//     setTimeout(function () {
//       console.log(i === 0 ? "GO!" : i);
//     }, (5 - i) * 1000)
//   }
// }

// ex2) i를 for루프와 같은 스코프에 선언 => 5, 4, 3, 2, 1이 찍힘
function countdown() {
  console.log("CountDown: ");
  for (let i = 5; i >= 0; i--) {
    setTimeout(function () {
      console.log(i === 0 ? "GO!" : i);
    }, (5 - i) * 1000)
  }
}
countdown();