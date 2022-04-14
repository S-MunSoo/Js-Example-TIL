import getType from "./getType";
// js TIL(22.4.14)
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
console.log(c < d); // 비교 작다
console.log(c <= d); // 작거나 같다

function isEqual(x, y) {
  return x === y;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(2, "2")); // false

// 논리 연산자
const a = 1 === 1;
const b = "AB" === "AB";
const c = true;

console.log("&&: ", a && c); // and
console.log("||: ", a || b); // or
console.log("!: ", !a); // not(부정) 연산자

// 삼항 연산자
const a = 1 < 2;
if (a) {
  console.log("참");
} else {
  console.log("거짓");
}

console.log(a ? "참" : "거짓");
// ?을 기준으로 앞에 값이 true , false 인지 확인

import abc from "./getRandom";
import { format } from "path";
// 조건문(if)
const a = random();
if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else {
  console.log("rest...");
}

// 조건문 switch
switch (a) {
  case 0:
    console.log("a is 0");
    break; // 하나의 case문이 끝나면 break 통해서 끝내줘야한다.
  case 2:
    console.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;
  default: // default 전부 해당이 되지 않으면 구문을 끝낸다
    console.log("rest...");
}
// 반복문  for문 (시작조건; 종료조건; 변화조건 {})
// for (i = 1; i < length.i[0]; i++) {
//   console.log(i);
// }

const ulEl = document.querySelector("ul");
for (i = 0; i < 3; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}
