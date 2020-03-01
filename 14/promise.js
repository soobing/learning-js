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
//         else resolve(console.log("Go!"))
//       }, (seconds - i) * 1000)
//     }
//   })
// }

// * promise에서 지원하는 핸들러: then, catch
// const p = countdown(13)
// p
//   .then(function () {
//     console.log('성공')
//   }, function (err) {
//     console.log('실패', err)
//   });
// p
//   .catch(function (err) {
//     console.log(`countdown experienced an error: ${err.message}`)
//   })



// * EventEmitter를 사용해보자
// - 함수와 사용해도 되지만, 원래는 클래스와 함께 사용하도록 설계되었음.

// const EventEmmiter = require('events').EventEmitter;

// class Countdown extends EventEmmiter {
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
//   if (i > 0) console.log(i + '...')
// })

// c.go()
//   .then(function () {
//     console.log('Go!')
//   })
//   .catch(function (err) {
//     console.error('ERROR 발생: ', err.message);
//   })






// * 더 진행할 수 없다는 사실을 아는 즉시 대기 중인 타임아웃 취소
const EventEmmiter = require('events').EventEmitter;

class Countdown extends EventEmmiter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }

  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function (resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        timeoutIds.push(setTimeout(function () {
          if (countdown.superstitious && i === 13) {
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("Oh my god"))
          }
          countdown.emit('tick', i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000))

      }
    })
  }
}


const c = new Countdown(15, true);
c.on('tick', function (i) {
  if (i > 0) console.log(i + '...')
})

c.go()
  .then(function () {
    console.log('Go!')
  })
  .catch(function (err) {
    console.error('ERROR 발생: ', err.message);
  })
