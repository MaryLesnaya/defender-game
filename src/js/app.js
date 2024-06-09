const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'маг', health: 0},
    {name: 'лучник', health: 0},
];
  
const alive = characters.filter(item => item.health > 0);

console.log('app worked');

const game = new Game();
game.start();

const {Game, GameSavingData, readGameSaving: loadGame, writeGameSaving: saveGame} = require('./game.js');


export default function getHealthStatus(character) {
    const health = character.health;
  
    if (health > 50) {
      return 'healthy';
    } else if (health > 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }

  export default const sortedCharacters = characters.slice().sort((a, b) => b.health - a.health);
  export default const healthLevels = sortedCharacters.map(character => character.health);
