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
