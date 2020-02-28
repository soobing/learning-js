// * Set = 중복을 허용하지 않는 데이터 집합
// add, delete, size 메서드

const roles = new Set();
// 1) add
roles.add("User");
roles.add("Admin");
console.log('roles 1:', roles);

// * Set의 장점: 추가하려는 것이 셋에 이미 있는지 확인할 필요가 없음. (이미 있으면 아무일도 일어나지 않음)
roles.add("User");
console.log('roles 2:', roles);


// 2) delete
roles.delete("Admin")
console.log('Admin 삭제 후: ', roles);
roles.delete("Admin")
console.log('Admin 한번더 삭제 후: ', roles.delete("Admin")); //  삭제 할 수 없다면 delete 메서드는 false 반환