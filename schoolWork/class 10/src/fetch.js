let button = document.getElementById("button");
let body = document.getElementById("body");
body.style.backgroundColor = "#21a387";
body.style.color = "#392eab";
body.style.fontFamily = "sans-serif";

function makeFetchRequest() {
  fetch("https://swapi.dev/api/pa")
    .then((response) => {
      //   console.log(response.json());
      if (response.ok) {
        // console.log("Successfully returned data.");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

button.addEventListener("click", makeFetchRequest);
