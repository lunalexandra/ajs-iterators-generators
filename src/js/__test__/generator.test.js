
import TeamGenerator from "../generator";

const char = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char1 = {
  name: "Test",
  type: "Bowman",
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

const team = new TeamGenerator([char, char1]);
const allTeamIterator = team[Symbol.iterator]();

test.each([
  [allTeamIterator, {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }
  ], 
  [allTeamIterator, {
      name: "Test",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    }
  ],
  [allTeamIterator, undefined],
])('generator check', (result, expected) => {
  
  result = allTeamIterator.next().value;
  expect(result).toEqual(expected);
});