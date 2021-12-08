const dadJoke = document.querySelector('.dadJoke')
const jokeGenerator = document.querySelector(".jokeGenerator");

jokeGenerator.addEventListener("click", getJoke);

const baseURL = 'https://api.jokes.one/jod';

function getJoke() {
  fetch(baseURL, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((joke) => (dadJoke.textContent = joke.joke))
    .catch((e) => (dadJoke.textContent = 'try again'));
}
