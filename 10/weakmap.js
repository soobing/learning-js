// * WeakMap의 특징
// - 아래 차이점을 제외하곤 Map과 완전히 동일
// 1. 키는 반드시 객체
// 2. WeakMap의 키는 가비지 콜렉션에 포함 될 수 있음.
// 3. WeakMap은 이터러블이 아니며 clear() 메서드도 없음.

const SecretHolder = (function () {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret)
    }
    getSecret() {
      return secrets.get(this)
    }
  }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());