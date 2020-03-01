// const d = new Date(Date.UTC(2016, 4, 27));
// console.log(d)

// * 날짜 데이터 전송(서버 <=> 브라우저): JSON을 사용하자
// const before = { d: new Date() };
// console.log(before.d instanceof Date);
// const json = JSON.stringify(before);
// const after = JSON.parse(json);
// console.log(json);
// console.log(after)
// console.log(after.d instanceof Date);
// console.log(typeof after.d)


// const before = { d: new Date().valueOf() };
// console.log(typeof before.d);
// console.log(before.d instanceof Date);
// const json = JSON.stringify(before);
// const after = JSON.parse(json);
// console.log(json);
// console.log(after)
// console.log(after.d instanceof Date);
// console.log(typeof after.d)