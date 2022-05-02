```js
// 5.2 비동기 실강 첫번째 예시 로직
// 비동기
// promise: 약속의 객체!가 하나 반환 된다.
// 약속이란? 다음 실행 순서를 보장 한다.
// callback = resolve
function getMovie() {
  return new Promise((resolve) => {
    fetch("https://omdbapi.com/?apikey=7035c60c&s=frozen")
      .then((res) => res.json()) // 비동기 기본 로직
      .then((res) => {
        cb(res);
      });
  });
}

getMovie().then((res) => console.log(res));

// await async
(async function () {
  const res = await getMovie();
  console.log;
})(); // ()() IIFE
```

```js
// 5.2 비동기 실강 두번째 예시 로직
function imageLoad(src) {
  return new Promise((resolve) => {
    const imgEl = document.createElement("img"); //  실제로 이미지라는 요소를 생성해서 메모리에 들고 있는 코드
    imgEl.src = src;
    imgEl.addEventListener("click", function () {
      resolve(); // 비동기 처리 로직
    });
  });
}

const imgContainer = document.querySelector(".image");
imageLoad("https://gstatic.com/webp/gallery/1.jpg").then(() => {
  console.log("done");
  imgContainer.classList.add("done");
});

(async function () {
  await imageLoad("https://gstatic.com/webp/gallery/1.jpg");
  console.log("done");
  imgContainer.classList.add("done");
})();
```

```js
// 5.2 비동기 실강 세번째 예시 로직
// 영화 정보를 가져오는 비동기 코드
// try / catch / finally
// async await 코드
async function getMovie() {
  try {
    let res = await fetch("https://omdbapi.com123/?apikey=7035c60c&s=frozen");
    res = await res.json();
    console.log(res); // 이 res 가 실제 영화정보다
    return res;
  } catch (err) {
    alert("에러가 발생~");
  } finally {
    // 에러가 나면 catch가 실행되면서 finally 도 같이 실행된다 (되든 안되든 처리할 코드)
    console.log("실행~");
  }
}

const res = getMovie();
console.log(res);

// .then 코드
function getMovie() {
  fetch("https://omdbapi.com123/?apikey=7035c60c&s=frozen")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => alert('에러~~'))
    .finally(() => {console.log('done')})
}

const res = getMovie()
console.log(res);

// then 구문 예외처리
.then()
.catch()
.finally()

// async / await 예외처리
try {

} catch(err) {

} finally {

}

```

```js
function getMovie() {
  Promise.all([
    fetch("https://omdbapi.com/?apikey=7035c60c&s=frozen").then((res) =>
      res.json()
    ),
    fetch("https://omdbapi.com/?apikey=7035c60c&s=ironman").then((res) =>
      res.json()
    ),
  ]).then((res) => {
    console.log("fetch1:", res[0]);
    console.log("fetch2:", res[1]);
    console.log("Done!");
  });
}

async function getMovie() {
  const [res1, res2] = await Promise.all([
    fetch("https://omdbapi.com/?apikey=7035c60c&s=frozen").then((res) =>
      res.json()
    ),
    fetch("https://omdbapi.com/?apikey=7035c60c&s=ironman").then((res) =>
      res.json()
    ),
  ]);

  console.log("async1:", res1);
  console.log("async2:", res2);
  console.log("Done!");
}

getMovie();
```

```js
function getMovie() {
  // promise instance
  return new Promise((resolve, reject) => {
    fetch("https://omdbapi.com/?apikey=7035c60c&s=frozen")
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        reject("사고!");
      });
  });
}

getMovie()
  .then()
  .catch((err) => {
    console.log(err);
  });
```
