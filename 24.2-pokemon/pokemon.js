function pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const charmander = new pokemon("charmander", "fire", [
  "flamethrower",
  "fireSpin",
  "inferno",
]);
const squirtle = new pokemon("squirtle", "water", [
  "aquaJet",
  "aquaTail",
  "waterPulse",
]);
const bulbasaur = new pokemon("bulbasaur", "grass", [
  "vineWhip",
  "powerWhip",
  "sludgeBomb",
]);

pokemon.prototype.callPokemon = function() {
  console.log(`I choose you, ${this.name}`);
};

pokemon.prototype.attack = function(num) {
  console.log(`${this.name} used ${this.attackList[num-1]}`);
}

charmander.callPokemon();
squirtle.callPokemon();
bulbasaur.callPokemon();

charmander.attack(1);
squirtle.attack(2);
bulbasaur.attack(3);