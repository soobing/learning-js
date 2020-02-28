// * 에러를 생성하는 것만으로는 아무일도 일어나지 않음
const error = new Error('invalid email');

// * 잘 사용 X : instanceof 연산자를 써서 Error 인스턴스가 반환됐는지 확인
// function validateEmail(email) {
//   return email.match(/@/) ? email : new Error(`invalid email: ${emails}`)
// }
// const email = "janedoe.com";
// const validatedEmail = validateEmail(email);
// if (validateEmail instanceof Error) {
//   console.error(`Error: ${validateEmail.message}`);
// } else {
//   console.log(`Valid email: ${validatedEmail}`);
// }
// console.log('여기까지 찍히나?') // 여기까지 찍히지 않음





// * Error 인스턴스는 예외 처리(try...catch문)에서 더 자주 사용됨
// - 위에와 차이점: 에러가 발생했어도 에러를 기록하고 계속 진행 할 수 있음.
// const email = null;
// function validateEmail(email) {
//   return email.match(/@/) ? email : new Error(`invalid email: ${emails}`)
// }
// try {
//   const validatedEmail = validateEmail(email);
//   if (validatedEmail instanceof Error) {
//     console.error(`Error: ${validatedEmail.message}`);
//   } else {
//     console.log(`Valid email: ${validatedEmail}`);
//   }
// } catch (err) {
//   console.error(`Error: ${err.message}`)
// }

// console.log('여기까지 찍히나?') // 여기까지 찍히는것 확인 가능








// * 에러 일으키기 (throw new Error)
// function billPay(amount, payee, account) {
//   if (amount > account.balance) {
//     throw new Error('insufficient funds')
//   }
//   account.transfer(payee, amount)
// }



// * 호출 스택
function a() {
  console.log('a: calling b');
  b();
  console.log('a: done')
}

function b() {
  console.log('b: calling c');
  c();
  console.log('b: done');
}
function c() {
  console.log('c: throwing error');
  throw new Error('c error')
  console.log('c: done')
}

function d() {
  console.log('d: calling c');
  c();
  console.log('d: done')
}

try {
  a();
} catch (err) {
  console.log(err.stack)
}

try {
  d();
} catch (err) {
  console.log(err.stack)
}