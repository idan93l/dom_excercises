const dadJoke = document.querySelector(".dadJoke");
const jokeGenerator = document.querySelector(".jokeGenerator");
const URL = "https://api.jokes.one/jod";

const getJoke = async () => {
  try {
    const data = await (await fetch(URL)).json();
    dadJoke.textContent = data.contents.jokes[0].joke.text;
  }
  catch (err) {
    console.log(err);
  }
}

jokeGenerator.addEventListener("click", getJoke);