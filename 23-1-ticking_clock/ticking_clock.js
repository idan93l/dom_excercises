const clock = () => {
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let date = new Date();
hours.textContent = date.getHours();
minutes.textContent = date.getMinutes();
seconds.textContent = date.getSeconds();
}

setInterval(clock, 1000);