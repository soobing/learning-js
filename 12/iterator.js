const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly",
  "Like a tea tray in the sky",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you'r at!"
]

// * Iterator 만들기 => values()
// - next()로 다음 이터레이터 접근
// - next() 메서드는 value, done 프로퍼티를 가지고있는 객체 반환
// const it = book.values();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())



// * for...of 루프 흉내내기
// const it = book.values();
// let current = it.next();
// while (!current.done) {
//   console.log(current.value);
//   current = it.next();
// }



// * 다른 iterator와 함께 사용도 가능
// const it1 = book.values();
// const it2 = book.values();

// console.log(it1.next());
// console.log(it1.next());

// console.log(it2.next());
// console.log(it1.next());


// * Iteration Protocol = Iterable Protocol + Iterator Protocol
// 1) 기본. 구현 전
// class Log {
//   constructor() {
//     this.messages = [];
//   }
//   add(message) {
//     this.messages.push({ message, timestamp: Date.now() });
//   }
// }

// 2) Iterable Protocol 구현
// class Log {
//   constructor() {
//     this.messages = [];
//   }
//   add(message) {
//     this.messages.push({ message, timestamp: Date.now() });
//   }
//   [Symbol.iterator]() {
//     return this.messages.values(); // Iterator 객체 반환, so Iterator Protocol을 구현할 필요가 없음.
//   }
// }


// 3) Iterable + Iterator Protocol 구현
// - 2번에서 추가적으로 Iterator Protocol만 더 구현해주면 된다.

// class Log {
//   constructor() {
//     this.messages = [];
//   }
//   add(message) {
//     this.messages.push({ message, timestamp: Date.now() });
//   }
//   [Symbol.iterator]() {
//     let i = 0;
//     const message = this.message;
//     return {
//       next() {
//         if (i >= message.length) {
//           return { value: undefined, done: true }
//         }
//         return { value: messages[i++], done: false }
//       }
//     }; // Iterator Protocol을 구현
//   }
// }

// test
// const log = new Log();
// log.add("first day at sea");
// log.add("spotted whale");
// log.add("spotted another vessel");

// for (let entry of log) {
//   console.log(`${entry.message} @ ${entry.timestamp}`)
// }






// * 피보나치 수열
class FibonacciSequence {
  [Symbol.iterator]() {
    let a = 0, b = 1, _b = 0;
    return {
      next() {
        _b = a + b;
        a = b;
        b = _b;
        return { value: _b, done: false }

      }
    }
  }
}

const fib = new FibonacciSequence();
let i = 0;
for (let n of fib) {
  console.log(n);
  if (++i > 9) break;
}