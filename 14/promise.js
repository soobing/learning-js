// * Promise: 성공(fulfilled)하거나 실패(rejected)하거나 단 두 가지 뿐.
// - 콜백을 예측 가능한 패턴으로 사용할 수 있게 한다.
// - 성공이든 실패든 단 한번만 일어난다.
// - 프라미스는 객체 이므로 어디든 전달 가능.

// * Promise 만들기
// function countdown(seconds) {
//   return new Promise(function (resolve, reject) {
//     for (let i = seconds; i >= 0; i--) {
//       setTimeout(function () {
//         if (i === 13) return reject(new Error("Oh my god"));
//         if (i > 0) console.log(i + '...');
//         else resolve(console.log("Go!")) // i === 0에서 찍히겠지
//       }, (seconds - i) * 1000)
//     }
//   })
// }

// * promise에서 지원하는 핸들러: then, catch, finally
// const p = countdown(13);
// p.then(
//   function () {
//     console.log('성공')
//   },
//   function (err) {
//     console.log('실패', err)
//   }
// )
// p.catch(function (err) { // error 발생시
//   console.log('catch 에러', err.message)
// })
// p.finally(function () { // reject or resolve가 호출될 경우(settled된 상태때 반환)
//   console.log('finally!)
// })

// - resolve만 넣고, resolve를 안넣으면 알아서 catch로 연결됨
// const p = countdown(13);
// p.then(
//   function () {
//     console.log('성공')
//   }
// ).catch(function (err) { // error 발생시
//   console.log('catch 에러', err.message)
// })



// * EventEmitter를 사용해보자
// - 함수와 사용해도 되지만, 원래는 클래스와 함께 사용하도록 설계되었음.

// const EventEmitter = require('events').EventEmitter;
// class Countdown extends EventEmitter {
//   constructor(seconds, superstitious) {
//     super();
//     this.seconds = seconds;
//     this.superstitious = !!superstitious;
//   }

//   go() {
//     const countdown = this;
//     return new Promise(function (resolve, reject) {
//       for (let i = countdown.seconds; i >= 0; i--) {
//         setTimeout(function () {
//           if (countdown.superstitious && i === 13) {
//             return reject(new Error("Oh my god"))
//           }
//           countdown.emit('tick', i);
//           if (i === 0) resolve();
//         }, (countdown.seconds - i) * 1000)
//       }
//     })
//   }
// }

// const c = new Countdown(15, true);
// c.on('tick', function (i) {
//   if (i > 0) console.log(i + '...');
// })
// c.go()
//   .then(function () {
//     console.log('RESOLVE: GO!')
//   })
//   .catch(function (err) {
//     console.error('CATCH', err.message)
//   })


// * reject나 resolve는 함수를 멈추지는 않는다. (그저 promise의 상태를 관리할 뿐)
//   - 더 진행할 수 없다는 사실을 아는 즉시 대기 중인 타임아웃 취소해서 함수를 멈추는 예제
// const EventEmitter = require('events').EventEmitter;
// class Countdown extends EventEmitter {
//   constructor(seconds, superstitious) {
//     super();
//     this.seconds = seconds;
//     this.superstitious = !!superstitious;
//   }
//   go() {
//     const countdown = this;
//     const timeoutIds = [];
//     return new Promise(function (resolve, reject) {
//       for (let i = countdown.seconds; i >= 0; i--) {
//         timeoutIds.push(setTimeout(function () {
//           if (countdown.superstitious && i === 13) {
//             timeoutIds.forEach(clearTimeout);
//             return reject(new Error('Oh my god'));
//           }
//           countdown.emit('tick', i);
//           if (i === 0) resolve();
//         }, (countdown.seconds - i) * 1000))
//       }
//     })
//   }
// }

// const c = new Countdown(15, true);
// c.on('tick', function (i) {
//   if (i > 0) console.log(i + '...')
// })

// c.go()
//   .then(function () {
//     console.log('Go!')
//   })
//   .catch(function (err) {
//     console.error('ERROR 발생: ', err.message);
//   })







//  * promise 체인
// function launch() {
//   return new Promise(function (resolve, reject) {
//     console.log("Lift off!");
//     setTimeout(function () {
//       resolve("In orbit!");
//     }, 2 * 1000)
//   })
// }

// const c = new Countdown(15)
//   .on('tick', i => console.log(i + '...'));

// c.go()
//   .then(launch)
//   .then(function (msg) { console.log(msg) })
//   .catch(function (err) { console.error("Huston, we have a problem...") })




// *  결정되지 않은 promise의 예
// function launch() {
//   return new Promise(function (resolve, reject) {
//     if (Math.random() < 0.5) return; // reject를 호출하지 않으며, 게다가 console에 에러를 찍지도 않음
//     console.log("Lift off!");
//     setTimeout(function () {
//       resolve("In orbit!");
//     }, 2 * 1000)
//   })
// }

// - 결정되지 않은 promise의 경우, 타임아웃을 걸어 문제를 해결 할 수도 있긴 하다. (좋은 방법은 아닌것 같지만)
// function addTimeout(fn, timeout) {
//   if (timeout === undefined) timeout = 1000;
//   return function (...args) {
//     return new Promise(function (resolve, reject) {
//       const tid = setTimeout(reject, timeout, newError("promise timed out"));
//       fn(...args)
//         .then(function (...args) {
//           clearTimeout(tid);
//           resolve(...args)
//         })
//         .catch(function (...args) {
//           clearTimeout(tid);
//           reject(...args)
//         })
//     })
//   }
// }


// const c = new Countdown(15)
//   .on('tick', i => console.log(i + '...'));

// c.go()
//   .then(addTimeout(launch, 11 * 1000))
//   .then(function (msg) { console.log(msg) })
//   .catch(function (err) { console.error("Huston, we have a problem...") })


