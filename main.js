// 비동기 Promise 객체

// function a(cb) {
//   setTimeout(() => {
//     console.log("A");
//     cb();
//   }, 1000);
// }

function a() {
  // promise: 약속의 객체! 가 하나 반환된다.
  // 약속이란? 다음 실행 순서를 보장한다.
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("A");
      resolve("Hello A");
    }, 1000);
  });
}
function b() {
  // promise: 약속의 객체! 가 하나 반환된다.
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("B");
      resolve("Hello B");
    }, 1000);
  });
}
function c() {
  // promise: 약속의 객체! 가 하나 반환된다.
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("C");
      resolve("Hello C");
    }, 1000);
  });
}
function d() {
  // promise: 약속의 객체! 가 하나 반환된다.
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("D");
      resolve("Hello D");
    }, 1000);
  });
}
async function test() {
  const h1 = await a();
  const h2 = await b();
  const h3 = await c();
  const h4 = await d();
  console.log("done");
  console.log(h1, h2, h3, h4);
}
test();
