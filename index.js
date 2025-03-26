// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log(moo, neigh, baa, oink, cluck); // LOG: cow horse sheep pig chicken

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, dolly, babe, little] = farmAnimals.split(' ').filter((animal) => animal !== 'horse');
console.log(bessie, dolly, babe, little); // LOG: cow sheep pig chicken

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter((animal) => animal !== 'chicken' && animal !== 'horse');
console.log(blackAndWhite, black, pink); // LOG: cow sheep pig

// Arrays

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red, orange, yellow, green, blue, indigo, violet); // LOG: red orange yellow green blue indigo violet

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;
console.log(r, o, y, g, b, v); // LOG: r o y g b v

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const [, , , , , indg] = colors;
console.log(indg); // LOG: indigo

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner); // LOG: Miss Piggy pink Never Before, Never Again Cast member of The Muppet Show Kermit

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

// Log the destructured values
console.log(song2, song4, job, partner);