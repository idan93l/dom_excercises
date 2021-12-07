const jokebtn = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke p`);
const jokeButtonText = jokebtn.querySelector('.btn-text');

const baseURL = 'https://icanhazdadjoke.com';

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

const getJoke = () => {
  jokeHolder.textContent = 'Loading 🥪🥪🥪🥪';
  fetch(baseURL, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((joke) => (jokeHolder.textContent = joke.joke))
    .catch((e) => (jokeHolder.textContent = 'try again'));
};

const randomItemFromArray = (arr ,current) =>{
  const item =  arr[Math.floor(Math.random() *arr.length)]
  if(item === current){
    return randomItemFromArray(arr, current);
  }
  return item
}

const clickHandler = () => {
  getJoke()
  jokeButtonText.textContent = randomItemFromArray(buttonText , jokeButtonText.textContent)
}

jokebtn.addEventListener('click', clickHandler);
