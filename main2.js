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

const str = "  hello world  ";
// console.log(str.slice(0, 7));
// slice는 어디에서 어디까지 잘라낸것인가(종료점 인덱스 그직전까지 추출된다)
// console.log(str.replace("world", "HEROPY"));
// replace 는 앞에 있는 문자을 뒤에있는 문자로 교체해준다
// console.log(str.match(/.+(?=@)/)[0]); // 정규 표현 방식
console.log(srt.trim());
