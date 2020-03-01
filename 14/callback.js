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
// function countdown() {
//   console.log("CountDown: ");
//   for (let i = 5; i >= 0; i--) {
//     setTimeout(function () {
//       console.log(i === 0 ? "GO!" : i);
//     }, (5 - i) * 1000)
//   }
// }
// countdown();






// * 오류 우선 콜백
// - 프라미스를 사용하지 않으면 오류 우선 콜백은 노드 개발의 표준이나 다름 없음.
// const fs = require('fs');
// const fname = 'may_or_may_not_exist.txt';
// fs.readFile(fname, function (err, data) {
//   if (err) return console.error(`error reading file ${fname}: ${err.message}`);
//   console.log(`${fname} contents: ${data}`);
// })





// * 콜백 헬
// ex1)
// const fs = require('fs');
// fs.readFile('a.txt', function (err, dataA) {
//   if (err) console.error(err);
//   fs.readFile('b.txt', function (err, dataB) {
//     if (err) console.error(err);
//     fs.readFile('c.txt', function (err, dataC) {
//       if (err) console.error(err);
//       setTimeout(function () {
//         fs.writeFile('d.txt', dataA + dataB + dataC, function (err) {
//           if (err) console.log(err);
//         })
//       }, 60 * 1000)
//     })
//   })
// })


// ex2)
// const fs = require('fs');
// function readSketchyFile() {
//   try {
//     fs.readFile('does_not_exist.txt', function (err, data) {
//       if (err) throw err;
//     })
//   } catch (err) {
//     console.log('warning: minor issue occurred, program continuing');
//   }
// }

// readSketchyFile();