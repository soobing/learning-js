// * call(명시적 바인딩), apply(명시적 바인딩), bind(하드 바인딩)
// - this가 무엇인지 지정하는 함수들

// * call(this 바인딩 객체, 매개변수1, 매개변수2, …)
// - 예제1)
// const bruce = { name: "Bruce" };
// const madeline = { name: "Madeline" };

// function greet() {
//   return `Hello, I'm ${this.name}!`;
// }

// console.log(greet());
// console.log(greet.call(bruce));
// console.log(greet.call(madeline));

// 예제 2)
// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }
// update.call(bruce, 1949, 'singer');
// console.log(bruce);
// update.call(madeline, 1942, 'actress');
// console.log(madeline);


// * apply(this 바인딩 객체, [매개변수1, 매개변수2, …])
// - 예제1) apply는 매개변수를 처리하는 방식만 제외하면 call과 완전히 동일
// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// update.apply(bruce, [1949, 'singer']);
// console.log(bruce);
// update.apply(madeline, [1942, 'actress']);
// console.log(madeline);

// - 예제2) 배열 요소를 함수 매개변수로 사용해야 할 때 유용
// const arr = [2, 3, -5, 15, 7];
// console.log(Math.min.apply(null, arr));
// console.log(Math.max.apply(null, arr));


// const newBruce = [1940, 'martial artist'];
// update.call(bruce, ...newBruce);
// console.log(bruce);


// * bind
// - 함수를 호출할때 어떻게 호출하든 이 함수는 항상 특정 object를 바인딩 하여 실행하도록 구현한 것을 하드 바인딩이라고 하는데, 자주 쓰는 패턴이라 ES5에 구현되었고 그것이 bind 함수다.(하드 바인딩)
// const bruce = { name: "Bruce" };
// const madeline = { name: "Madeline" };
// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }
// const updateBruce = update.bind(bruce);
// updateBruce(1904, "actor");
// console.log(bruce);

// updateBruce.call(madeline, 1274, "king"); // 무조건 bruce가 바뀜
// console.log(bruce);
// console.log(madeline);

// - bind에 매개변수를 넘기면 fix할 수 있다.
// const updateBruce1949 = update.bind(bruce, 1949);
// updateBruce1949("singer, songwriter");
// console.log(bruce);
// updateBruce1949.call(madeline, "king");
// console.log(bruce);
// console.log(madeline);


// * 화살표 함수
// - 화살표 함수의 어휘적 바인딩은 절대로 오버라이드 할 수 없다.
function foo() {
  return a => {
    console.log(this.a); // this는 어휘적으로 foo()에서 상속 된다.
  }
}
var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2);