const start = document.querySelector(`ul`);

start.querySelector(`.start-here`).textContent = `main title`;

const sub4 = document.createElement(`li`)

start.querySelector(`ul`).appendChild(sub4);

sub4.textContent = `sub title 4`;

start.removeChild(start.lastElementChild);

const title = document.querySelector(`title`);

title.innerHTML = `Master Of The Dom`;

// document.querySelector(`p`).textContent = `I am Iron Man!!!!!!!`

const p = document.querySelector(`p`);

p.textContent = `I am Iron Man!!!`