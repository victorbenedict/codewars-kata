export default function goodVsEvil(good, evil) {
  const raceValue = {
    Hobbits: 1,
    Orcs: 1,
    Men: 2,
    Wargs: 2,
    Goblins: 2,
    Elves: 3,
    Dwarves: 3,
    UrukHai: 3,
    Eagles: 4,
    Trolls: 5,
    Wizards: 10,
  };

  const goodArmy = ['Hobbits', 'Men', 'Elves', 'Dwarves', 'Eagles', 'Wizards'];
  const evilArmy = [
    'Orcs',
    'Men',
    'Wargs',
    'Goblins',
    'UrukHai',
    'Trolls',
    'Wizards',
  ];

  const calculateArmyPower = (faction, army) => {
    return faction.split(' ').reduce((power, count, index) => {
      const racePower = raceValue[army[index]] * count;
      return power + racePower;
    }, 0);
  };

  const goodArmyPower = calculateArmyPower(good, goodArmy);
  const evilArmyPower = calculateArmyPower(evil, evilArmy);
  const battleResult = goodArmyPower - evilArmyPower;

  switch (true) {
    case battleResult > 0:
      return 'Battle Result: Good triumphs over Evil';
    case battleResult < 0:
      return 'Battle Result: Evil eradicates all trace of Good';
    case battleResult === 0:
      return 'Battle Result: No victor on this battle field';
  }
}
