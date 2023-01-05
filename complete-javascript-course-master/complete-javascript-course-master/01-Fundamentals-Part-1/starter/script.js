/* let js = 'amazing'
    if (js === 'amazing') alert('Javascript is FUN')

console.log(js)

let hello1 = 'HELLOOOO'
let hello2 = 'Sup'

console.log(hello1) */


/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

/* const marksWeight = 78
const marksHeight = 1.69
const johnsWeight = 92
const johnsHeight = 1.95

const marksBmi = marksWeight / marksHeight ** 2 
const johnsBmi = johnsWeight / johnsHeight ** 2

const markHigherBMI = marksBmi > johnsBmi

console.log(marksBmi, johnsBmi, markHigherBMI) */


/* const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew) */




/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can
 be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" */

const marksWeight = 78
const marksHeight = 1.69
const johnsWeight = 92
const johnsHeight = 1.95

const marksBmi = marksWeight / marksHeight ** 2 
const johnsBmi = johnsWeight / johnsHeight ** 2


if (marksBmi > johnsBmi) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("Johns BMI is higher")
}

const markAndJohn = `Mark's BMI ${marksBmi} is higher than John's ${johnsBmi}!`
console.log(markAndJohn)

