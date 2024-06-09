import getHealthStatus from '../app.js';
import sortedCharacters from '../app.js';
import healthLevels from '../app.js';


test.each([
    [50, 'healthy'],
    [15, 'wounded'],
    [7, 'critical']
])
('testing HealthStatus function with %i health', (health, expected) => {
    const result = getHealthStatus(health);
    expect(result).toBe(expected);
})


  test('Проверка сортировки героев по уровню здоровья', () => {
    sortedCharacters = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(characters.slice().sort((a, b) => b.health - a.health)).toEqual(sortedCharacters);
  });
  
  test('Проверка отображения уровня здоровья героев', () => {
    healthLevels = [100, 80, 10];
    expect(sortedCharacters.map(character => character.health)).toEqual(healthLevels);
  });
