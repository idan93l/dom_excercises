// https://api.github.com/movies/{moviename}
const searchButton = document.querySelector(".searchButton");
const poster = document.querySelector(".poster");
const movie = document.querySelector(".movie");
const genre = document.querySelector(".genre");
const year = document.querySelector(".year");
const plot = document.querySelector(".plot");
const director = document.querySelector(".director");
const actors = document.querySelector(".actors");
const headers = document.querySelector(".headers");
const imdb = document.querySelector(".imdb");
const tomatoes= document.querySelector(".tomatoes");
const metacritic = document.querySelector(".metacritic");
movieNameInput = document.querySelector(".movieName");
movieNameInput.focus();

// const getmovieName = () => {
//   movieToSearch = movieNameInput.value;
//   movieNameInput.value = "";
//   movieNameInput.focus();
//   return movieToSearch;
// };

const fetchmovie = async () => {
  // let movieToSearch = getmovieName();
  try {
    const data = await (
      await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e96c0696`)
    ).json();
    // const reposData = await (await fetch(data.repos_url)).json();
    poster.innerHTML = `<img src="${data.Poster}">`;
    movie.textContent = `${data.Title}`;
    genre.textContent = `${data.Genre}`;
    year.textContent = `${data.Year}`;
    plot.textContent = `${data.Plot.length} words`;
    director.textContent = `${data.Director}`;
    actors.textContent = `${data.Actors}`;
    imdb.textContent = `${data.Ratings[0].Value}`;
    tomatoes.textContent = `${data.Ratings[1].Value}`;
    metacritic.textContent = `${data.Ratings[2].Value}`;
    headers.style.display = "block";
    console.log(data);
  } catch (err) {
    poster.innerHTML = "";
    movie.textContent = "";
    genre.textContent = "";
    headers.style.display = "none";
    console.log(err);
  }
};

searchButton.addEventListener("click", fetchmovie);

movieNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchmovie();
  }
});
