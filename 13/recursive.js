// * 재귀(Recursive)
// 정의:  자기 자신을 호출하는 함수

// - 모든 가능성을 전부 고려해야 함.
// - 그리고, 종료 조건이 있어야 함.

function findNeedle(haystack) {
  if (haystack.length === 0) return 'no haystack here!';
  if (haystack.shift() === 'needle') return 'found it!';
  return findNeedle(haystack);
}

console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']));


function factorial(n) {
  if (n < 1) return '0 보다 큰 수를 입력하세요';
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

