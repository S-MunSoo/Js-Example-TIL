import getType from "./getType";
// js 데이터 타입
// typeof 사용해 특정한 데이터의 타입을 확인할 수 있다
console.log(typeof "Hello");
console.log(typeof 123);
console.log(typeof undefined);
console.log(typeof []);

// 산술 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(3 / 4);
console.log(10 % 2); // 나머지

// 할당 연산자
const a = 2;
let a = 2;
// a = a + 1; 재할당 = a += 1; a /= 1; a %= 1;

// 비교 연산자
const c = 1;
const d = 1;
console.log(c === d); // === 일치연산자
console.log(c !== d); // ! 다른것인지 확인해주는 not 연산자
console.log(c < d); // 비교

function isEqual(x, y) {
  return x === y;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(2, "2")); // false
