// https://api.github.com/movies/{moviename}
const searchButton = document.querySelector(".searchButton");
const profilePicture = document.querySelector(".profilePicture");
const movieUrl = document.querySelector(".movieUrl");
const repos = document.querySelector(".repos");
const headers = document.querySelector(".headers");
movieNameInput = document.querySelector(".movieName");
movieNameInput.focus();

const jokeGenerator = document.querySelector(".jokeGenerator");
const URL = "https://api.jokes.one/jod";

const getmovieName = () => {
  movieToSearch = movieNameInput.value;
  movieNameInput.value = "";
  movieNameInput.focus();
  return movieToSearch;
};

const fetchmovie = async () => {
  let movieToSearch = getmovieName();
  try {
    const data = await (
      await fetch(`https://api.github.com/movies/${movieToSearch}`)
    ).json();
    const reposData = await (await fetch(data.repos_url)).json();
    profilePicture.innerHTML = `<img src="${data.avatar_url}">`;
    movieUrl.innerHTML = `<a href="${data.html_url}" target="_blank">${movieToSearch}</a>`;
    repos.innerHTML = `<a href="#">${reposData.length}</a>`;
    headers.style.display = "block";
  } catch (err) {
    profilePicture.innerHTML = "";
    movieUrl.innerHTML = "";
    repos.innerHTML = "";
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
