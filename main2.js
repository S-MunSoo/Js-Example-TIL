// 생성자 함수
// const munsu = {
//   firstName: "munsu",
//   lastName: "shin",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(munsu);

// // 생성자 함수
// const amy = {
//   firstName: "amy",
//   lastName: "cleak",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(amy);

// function user(frist, last) {
//   this.fristName = frist;
//   this.lastName = last;
// }

// user.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const munsu = new user("munsu", "shin");
// const amy = new user("amy", "clek");

// console.log(munsu.getFullName());

// function user(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// user.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const heropy = new user("heropy", "shin");
// const amy = new user("Amy", "Clarke");
// const neo = new user("Neo", "Smith");

// console.log(heropy.getFullName());
// console.log(amy);
// console.log(neo);

// this
// 일반 함수는 호출 위치에서 따라  this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서  this 정의
// const heopy = {
//   name : "heropy"
//   normal: function() {
//   console.log(this.name)
//  },
//  arrow: () => {
//    console.log(this.name)
//  }
// }
// heopy.normal()
// heopy.arrow()

// const amy = {
//   normal: "Amy",
//   arrow: heopy.arrow
// }

// const timer = {
//   name : "Heropy!!"
//   timeout: function() {
//     setTime(() => {
//       console.log(this.name)
//     } , 2000)
//   }
// }
// timer.timeout()

//ES6 classes

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }Q
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// js 데이터 문자
// string : "" , '' ,``
// Number
// Boolean : true , false
// Number

// const str = "  hello world  ";
// console.log(str.slice(0, 7));
// slice는 어디에서 어디까지 잘라낸것인가(종료점 인덱스 그직전까지 추출된다)
// console.log(str.replace("world", "HEROPY"));
// replace 는 앞에 있는 문자을 뒤에있는 문자로 교체해준다
// console.log(str.match(/.+(?=@)/)[0]); // 정규 표현 방식
// console.log(srt.trim());

// const pi = 3.141592394343242;
// console.log(pi);

// const str = pi.toFixed(2); // 인수가 호출될때 소수로 몇번째 자리까지 호출할지
// console.log(str);
// console.log(typeof str);

// const integer = parseInt(str); //  슛자 전역함수(전체의 영역에서 사용가능) 숫자가 들어있는 문자데이터를 정수로 반환한다
// const float = parseFloat(str);
// //  슛자 전역함수(전체의 영역에서 사용가능) 소수점 까지 확인해서 숫자로 반환해준다.
// console.log(integer);
// console.log(float);
// console.log(typeof integer, typeof float);

// console.log("abs", Math.abs(-12)); // 절대값 반환
// console.log("min", Math.min(2, 8)); // 인수중 가장 작은값 확인
// console.log("max", Math.max(2, 8)); // 인수중 가장 큰값 확인
// console.log("ceil", Math.ceil(3.14)); // 정수 단위로 올림 처리
// console.log("floor", Math.floor(3, 14)); // 정수 단위를 내림 처리
// console.log("round", Math.round(3.14)); // 반올림
// console.log("random", Math.random()); // 랜덤숫자를 반환

// 배열
// 1.length(길이가 얼마냐?)
// 2. .concat() 원본의 수정없이 두개의 배열데이터를 병합해준다.
// 3. .forEach() 인수의 요소 개수 만큼 반복 실행 된다.
// 4. .map()
// 5. filter()
// 5. find() .findIndex() 특정한 인수를 찾을때 /특정한 인수를 찾고 해당하는 인덱스 번호를 찾는다
// 6. .includes() 배열 안에 특정한 인수가 포함 되어 있는지
// 7. .push() .unshifr() : 애네들은 원본이 수정됨 주의!
// 8. .reverse() 반대(거꾸로)
// 9. splice()

const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", '"Cherry"', "Mango"];

// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });
// const a = fruits.forEach(function (fruits, index) {
//   console.log(`${fruits}-${index}`);
// });
// console.log(a);

// const b = fruits.map(function (fruits, index) {
//   return {
//     id: index,
//     name: "fruit",
//   };
// });
// console.log(b);

// const a = fruits.forEach((fruits, index) => {
//   console.log(`${fruits}-${index}`);
// });
// console.log(a);

// const a = numbers.map((numbers) => numbers < 3);
// console.log(a);

// const b = numbers.filter((numbers) => numbers < 3);
// console.log(b);

// const a = fruits.find((fruit) => /^B/.test(fruit));
// console.log(a);
// const b = fruits.findIndex((fruit) => /^C/.test(fruit));
// console.log(a);

const a = numbers.includes(3);
console.log(a);
const b = fruits.includes("HEOPY");
console.log(b);
