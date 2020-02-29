// * 순수함수 (조건)
// 1) 입력이 같으면 결과도 반드시 같다
// 2) 부수효과(side effect)가 없어야 한다.
//    - 함수를 호출한다고 해서 프로그램의 상태가 바뀌어서는 안된다.


// * 순수하지 않은 함수 예 
// 1) 윤년
// function isCurrentYearLeapYear() {
//   const year = new Date().getFullYear();  // 1번 조건 불만족
//   if (year % 4 !== 0) return false;
//   else if (year % 100 != 0) return true;
//   else if (year % 400 != 0) return false;
//   else return true;
// }

// 2) 무지개 색 반환
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let colorIndex = -1;
// function getnextRainbowColor() {
//   if (++colorIndex >= colors.length) colorIndex = 0; // 1번 조건, 2번 조건 불만족
//   return colors[colorIndex];
// }



// * 순수 함수 예 
// 1) 윤년
function isLeapYear(year) { // input을 받음
  if (year % 4 !== 0) return false;
  else if (year % 100 != 0) return true;
  else if (year % 400 != 0) return false;
  else return true;
}

// 2) 무지개 색 반환

// - 클로저를 사용하여 2번 조건(부수효과를 일으키지 않는다)은 만족했지만, 여전히 순수함수는 아님. 1번조건 불만족
// const getnextRainbowColor = (function () {
//   const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//   let colorIndex = -1;
//   return function () {
//     if (++colorIndex >= colors.length) colorIndex = 0;
//     return colors[colorIndex];
//   }
// })();


// - iterator를 반환하여 순수함수 구현
// function getRainbowIterator() {
//   const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//   let colorIndex = -1;
//   return {
//     next() {
//       if (++colorIndex >= colors.length) colorIndex = 0;
//       return { value: colors[colorIndex], done: false };
//     }
//   }
// }

// 사용 예
// const rainbowIterator = getRainbowIterator();
// setInterval(function () {
//   document.querySelector('.rainbow')
//     .style['background-color'] = rainbowIterator.next().value;
// }, 500)


// 결론: 순수한 함수를 왜 써야할까?
// => 순수한 함수를 쓰면 코드를 테스트하기 쉽고, 이해하기 쉽고, 재사용하기 쉽다.
