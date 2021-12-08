const dadJoke = document.querySelector(".dadJoke");
const jokeGenerator = document.querySelector(".jokeGenerator");

jokeGenerator.addEventListener("click", getJoke);


function getJoke() {
  const URL = "https://api.jokes.one/jod";
  fetch(URL)
    .then((response) => response.json())
    .then((joke) => (dadJoke.textContent = joke.contents.jokes[0].joke.text))
    .catch((error) => (dadJoke.textContent = "try again"));
}
