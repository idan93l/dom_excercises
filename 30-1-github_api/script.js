// https://api.github.com/users/{username}
const searchButton = document.querySelector(".searchButton");
const profilePicture = document.querySelector(".profilePicture");
const userUrl = document.querySelector(".userUrl");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector("following");
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
    profilePicture.innerHTML = `<img src="${data.avatar_url}" alt="_blank">`;
    userUrl.innerHTML = `<a href="${data.html_url} alt="_blank"">${userToSearch}</a>`;
    repos.innerHTML = `<a href="${reposData}" alt="_blank">${reposData.length}</a>`;
    console.log(data);
  } catch (err) {
    profilePicture.innerHTML = '';
    userUrl.innerHTML ='';
    repos.innerHTML ='';
    console.log(err);
  }
};

searchButton.addEventListener("click", fetchUser);
// searchButton.addEventListener("click", getUserName);
