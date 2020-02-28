const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };


// * Map에 키와 값을 연결해보자 => set, 생성자에 배열
// 1) 각각 연결
// const userRoles = new Map();
// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

// 2) 체인으로 연결
// const userRoles = new Map();
// userRoles
//   .set(u1, 'User')
//   .set(u2, 'User')
//   .set(u3, 'Admin')

// 3) 생성자에 배열로 연결
// const userRoles = new Map([
//   [u1, 'User'],
//   [u2, 'User'],
//   [u3, 'Admin']
// ])

// * 값 교체: 이미 존재하는 key에 set을 호출
// const userRoles = new Map([
//   [u1, 'User'],
//   [u2, 'User'],
//   [u3, 'Admin']
// ])
// console.log(userRoles.get(u1))
// console.log(userRoles.set(u1, 'Admin'))
// console.log(userRoles.get(u1))

// * Map에서 키에 해당하는 값을 얻어오자 => get, has
// const userRoles = new Map([
//   [u1, 'User'],
//   [u2, 'User'],
//   [u3, 'Admin']
// ])
// console.log(userRoles.has(u1))
// console.log(userRoles.get(u1))
// console.log(userRoles.has(u4))
// console.log(userRoles.get(u4))


// * key, value, entry([key, value] => 배열)를 얻어보자
// const userRoles = new Map([
//   [u1, 'User'],
//   [u2, 'User'],
//   [u3, 'Admin']
// ])
// for (let u of userRoles.keys()) {
//   console.log('key', u.name)
// }
// for (let r of userRoles.values()) {
//   console.log('value', r)
// }
// for (let ur of userRoles.entries()) {
//   console.log(`${ur[0].name}: ${ur[1]}`);
// }
// for (let [u, r] of userRoles.entries()) {
//   console.log(`${u.name}: ${r}`)
// }
// for (let [u, r] of userRoles) {
//   console.log(`${u.name}: ${r}`)
// }



