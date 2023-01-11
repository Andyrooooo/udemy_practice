/* 'use strict'

let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive') */

/* const interface = 'Audio' */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* function logger() {
    console.log('My name is jonas')
}

logger()
logger()
logger() */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob')) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice
}
console.log(fruitProcessor(2, 3)) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently. Each team competes 3 times, and then 
the average of the 3 scores is calculated (so one average score per team). A team ONLY 
wins if it has at least DOUBLE the average score of the other team. Otherwise, no team 
wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as 
parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win 
(30 vs. 13)".

4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply 
this to the team's average scores 😉

GOOD LUCK 😀*/

/* const calcAverage = (a, b, c) => (a + b + c) / 3

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)


const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`The Dolphins win the trophy ${avgDolphins} VS. ${avgKoalas}`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`The Koalas win the trophy ${avgKoalas} VS. ${avgDolphins}`)
    } else {
        console.log("No one wins")
    }
}
checkWinner(scoreDolphins, scoreKoalas) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0]) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the 
tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the 
corresponding tip, calculated based on the rules above (you can check out the code 
from first tip calculator challenge if you need to). Use the function type you 
like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below.

3. Create an array 'tips' containing the tip value for each bill, calculated from the 
function you created before.

4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the 
new array) 😉

GOOD LUCK 😀 */


/* const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, total) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas)
console.log(jonas.lastName) */

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
/* 
const jonas = {}

jonas.friends = 3

jonas.bestFriend = 'Michael'

jonas.otherFriends = 'Peter', 'Steven'

console.log(`Jonas has ${jonas.friends} friends, and his best friend is 
called ${jonas.bestFriend}`) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
  
    /* calcAge: function (birthYear) {
       return 2037 - birthYear;
    } */

   /*  calcAge: function () {
        return 2037 - this.birthYear;
    } 

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}

console.log(jonas.calcAge())

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

 console.log(jonas['calcAge'](1991))

//challenge

// jonas is a 46 year old teacher, and he has a drivers license
console.log(jonas.getSummary()) */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/* Let's go back to Mark and John comparing their BMIs! This time, let's 
use objects to implement the calculations! Remember: 
BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name,
 mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the 
same method on both objects). Store the BMI value to a property, and 
also return it from the method.

3. Log to the console who has the higher BMI, together with the full name
and the respective BMI. Example: "John Smith's BMI (28.3) is higher than
Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and
 is 1.95 m tall.

GOOD LUCK 😀   */
/* 
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

mark.calcBMI()
john.calcBMI()

if (john.BMI > mark.BMI) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is 
    higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})!`)
} else if (mark.BMI > john.BMI) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is 
    higher than ${john.firstName} ${john.lastName}'s (${john.BMI})!`)
} */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


/* for(let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`)
} */

/* const jonas = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types = []

for( let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i])

    // types[i] = typeof jonas[i] 
    types.push(jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i =0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages)

console.log('________________Only String_____________________')

for( let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue

    console.log(jonas[i], typeof jonas[i])
}

console.log('________________Only Number_____________________')
for( let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i])
} */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// ______________________________for loops _____________________________________
/* const jonas = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

// for loop to go from the array to jonas so reverse order
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

// loop within a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`____ Starting exercise ${exercise}____`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercie ${exercise}: lifting weights repetition ${rep}`)
    }
} */

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//______________________________ while loops _____________________________________
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`)
// }

let rep = 1
while (rep <= 10) /* <<<--- this is the condition of the while loop */{
    console.log(`WHILE: lifting weights repetition ${rep}`)
    rep++
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////