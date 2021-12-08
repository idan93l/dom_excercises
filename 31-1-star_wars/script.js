const URL = "https://swapi.dev/api/people";

const getInfo = async () => {
  let allData = [];
  try {
    const data = await (await fetch(URL)).json();
    // console.log(data);
    const characters = data.results
    for(let i = 0; i < characters.length; i++) {
      let character = characters[i];
      let planet = await (await fetch(character.homeworld)).json();
      let obj = {
        name: character.name,
        hair: character.hair_color,
        height: character.height,
        planetName: planet.name,
        planetPopulation: planet.population
      };
      allData.push(obj);
    }
    console.log(allData);
  }
  catch (err) {
    console.log(err);
  }
}

getInfo();