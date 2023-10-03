// Array Iterator Methods

// forEach method

// const friends = ["Melissa", "Marc", "Andrew", "Nick"];

// friends.forEach((friend) => {
//     console.log(`I have a friend named ${friend}`)
// });

// logs out "I have a friend named <friend's name>" for each friend 
// map!

// const num = [1, 2, 3]
// const squared = nums.map((num) => num * num)
//     console.log(squared)

//FILTER

// const num = [100, 2, 5, 42, 99]
// const odds = nums.filter((num) => num % 2)

// console.log(odds)

//FIND

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
//   ];
  
//   const firstWhiteCar = cars.find((car) => car.color === 'white');
//   // firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}
  
//   const missingCar = cars.find((car) => car.color === 'blue');
//   // missingCar -> undefined 

// FIND INDEX

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
//   ];
  
//   const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015);
//   // idxFirstCarNewerThan2015 -> 3
  
//   // findIndex returns -1 if callback never returns a truthy value
//   const missingCarIdx = cars.findIndex((car) => car.year > 2020);
//   // missingCarIdx -> -1

//SOME

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
//   ];
  
//   const hasFord = cars.some((car) => car.make === 'Ford');
//   // hasFord -> true
  


//EVERY

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
//   ];
  
//   const everyCarIsNewerThan2000 = cars.every((car) => car.year > 2000);
//   // everyCarIsNewerThan2000 -> true

//REDUCE

// const nums = [25, 6, 100, 3];

// // The callback returns the value of
// // acc (accumulator) for the next iteration.
// // The second argument, `0`, is the value
// // of acc on the first iteration.
// const sum = nums.reduce((acc, num) => acc + num, 0);

// // The reduce method returns whatever the callback
// // returns for the last iteration.
// // sum equals 134 (the final value returned)

// The reduce method can return any single thing, such as an object!

// const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
// const tally = votes.reduce((acc, vote) => {
//   // Assign 1 if first time seeing a certain "type" of vote
//   // otherwise increase count by 1
//   acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
//   return acc;
// }, {});  // Note the initial value is an empty object

// // tally -> {"No": 2, "Yes": 3}

// LAB HOMEWORK

// Stub up the skeleton of the code...
const mastermind = games.find(toy => );

const mastermind = games.find(toy => toy.name === 'Mastermind');


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
    const fifteen = inventors.filter(function(invent or) {
        if(inventors.year >= 1500 %%
            inventors.year < 1600) {
                return true;
            }
    });
    
    
  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  // Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
    const fullNames =
    inventors.map(inventor => (
        `${inventor.first}
        ${inventor.last}`
    )); 
  
  
  // Array.prototype.sort()
  // 3. Sort the inventors by birth date (year property), in ascending order
   const ordered =
   inventors.sort(function(a, b) {
    if(a.year > b.year) {
    return 1;
   } else {
    return -1;
   }
    });
  
  
  // Array.prototype.find()
  // 4. Find the inventor object with the first name of 'Ada'
  
  
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
  
  
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator
  
  
  
  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
  // Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".
  
  
  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  // Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
    const isAdult = people.some(function (person) {
        const currentYear = new Date().getFullYear();
        if (currentYear - person.year >= 19) {
            return true;
        }
    });
    console.log({ isAdult });
  
  // Array.prototype.every()
  // 9. Check if everyone is 19 or older?
    const allAdult = people.every((person) => new Date().getFullYear - person.year >= 19
    );
    console.log({ allAdult });
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
    const comment = comments.find(function (comment) {
        if (comment.id === 823423) {
            return true;
        }
    });
    console.log(comment);
  
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  
  
  
  
