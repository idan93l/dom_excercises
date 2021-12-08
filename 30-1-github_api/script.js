// https://api.github.com/users/{username}
const searchButton = document.querySelector(".searchButton");
const profilePicture = document.querySelector(".profilePicture");
const userUrl = document.querySelector(".userUrl");
const repos = document.querySelector(".repos");
const headers = document.querySelector(".headers");
userNameInput = document.querySelector(".userName");
userNameInput.focus();

const jokeGenerator = document.querySelector(".jokeGenerator");
const URL = "https://api.jokes.one/jod";

const getUserName = () => {
  userToSearch = userNameInput.value;
  userNameInput.value = "";
  userNameInput.focus();
  return userToSearch;
};

const fetchUser = async () => {
  let userToSearch = getUserName();
  try {
    const data = await (
      await fetch(`https://api.github.com/users/${userToSearch}`)
    ).json();
    const reposData = await (await fetch(data.repos_url)).json();
    profilePicture.innerHTML = `<img src="${data.avatar_url}">`;
    userUrl.innerHTML = `<a href="${data.html_url}" target="_blank">${userToSearch}</a>`;
    repos.innerHTML = `<a href="#">${reposData.length}</a>`;
    headers.style.display = "block";
  } catch (err) {
    profilePicture.innerHTML = "";
    userUrl.innerHTML = "";
    repos.innerHTML = "";
    headers.style.display = "none";
    console.log(err);
  }
};

searchButton.addEventListener("click", fetchUser);

userNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchUser();
  }
});
