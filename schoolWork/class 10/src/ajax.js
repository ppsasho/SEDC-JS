let button = document.getElementById("button");
let content = document.getElementById("content");

function makeRequest() {
  $.ajax({
    url: "https://swapi.dev/api/planets/1/",
    success: function (result) {
      console.log(result);
      content.innerHTML += `<p>Current planet: ${result.name}, with a population of ${result.population}</p>`;
      // let objectKeys = Object.keys(result);
      // let values = Object.values(objectKeys);
      // content.innerText = `${values}`;
    },

    error: function (error) {
      console.log("The api didn't return anything");
      console.log(error);
    },
  });
}

button.addEventListener("click", makeRequest);
