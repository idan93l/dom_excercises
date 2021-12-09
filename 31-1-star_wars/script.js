const URL = `https://swapi.dev/api/people`;

const getInfo = async () => {
  let allData = [];
  try {
    const data = await (await fetch(URL)).json();
    const characters = data.results;
    // document.body.innerHTML = `<div class="row">`;
    // document.body.innerHTML += `<div class="row"><div>name</div>`;
    // document.body.innerHTML += `<div>hair</div>`;
    // document.body.innerHTML += `<div>height</div>`;
    // document.body.innerHTML += `<div>planet name</div>`;
    // document.body.innerHTML += `<div>plante population</div></div>`;
    for (let i = 0; i < characters.length; i++) {
      let character = characters[i];
      let planet = await (await fetch(character.homeworld)).json();
      let obj = {
        name: character.name,
        hair: character.hair_color,
        height: character.height,
        planetName: planet.name,
        planetPopulation: planet.population,
      };
      allData.push(obj);
      document.body.innerHTML += `<div class="row"><div>${character.name}</div>`
      document.body.innerHTML += `<div>${character.hair_color}</div>`
      document.body.innerHTML += `<div>${character.height}</div>`
      document.body.innerHTML += `<div>${planet.name}</div>`
      document.body.innerHTML += `<div>${planet.population}</div></div>`
    }
    console.log(allData);

    // document.body.innerHTML += `</div>`;
  } catch (err) {
    console.log(err);
  }
};

getInfo();