// Import CSS to HTML
import './style.css'

// Explorer Mode Steps (1-15) Done!

// Data About Me
const fullName = 'Dom Mitchell'
const numberOfCupsOfCoffee = 1

// Print Data About Me
console.log(
  `My name is ${fullName} and I drank ${numberOfCupsOfCoffee} cup(s) of coffee today`
)

// More Data About Me
const aboutMe = {
  fullName: fullName,
  luckyNum: 42,
  favMovie: ['John Wick Trilogy', 'Matrix Trilogy', 'Harry Potter Saga'],
}

// Print More Data About Me
console.log(aboutMe)

// Get Users Name
let usersName = window.prompt('What is your name? ')

// Print Data About User
console.log(`Hello ${usersName}, hope you are doing well today!`)

// Get Users Favorite Number & Age
let usersAge = String(window.prompt(`How old are you, ${usersName}?`))
let usersFavNum = String(
  window.prompt(`What is your favorite number, ${usersName}?`)
)

// Convert Users Favorite Number & Age Into a Float
let firstOperand = parseFloat(usersAge)
let secondOperand = parseFloat(usersFavNum)

// Print Users Favorites Number & Age
console.log(`${usersName} is ${firstOperand} years old.`)
console.log(`${usersName}'s favorite number is ${secondOperand}!`)

// Some Simple Math Operations using Users Favorite Number & Age
let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
let product = firstOperand * secondOperand
let quotient = firstOperand / secondOperand
let remainder = firstOperand % secondOperand

// Addition using Users Favorite Number & Age
console.log(
  `If you add ${usersName}'s age, ${firstOperand} and his/her favorite number, ${secondOperand} you get ${sum}.`
)

// Subtraction using Users Favorite Number & Age
console.log(
  `If you subtract ${usersName}'s age, ${firstOperand} and his/her favorite number, ${secondOperand} you get ${difference}.`
)

// Multiplication using Users Favorite Number & Age
console.log(
  `If you multiply ${usersName}'s age, ${firstOperand} and his/her favorite number, ${secondOperand} you get ${product}.`
)

// Division using Users Favorite Number & Age
console.log(
  `If you divide ${usersName}'s age, ${firstOperand} and his/her favorite number, ${secondOperand} you get ${quotient}.`
)

// Division using Users Favorite Number & Age, But Returns the Remainder
console.log(
  `If you divide ${usersName}'s age, ${firstOperand} and his/her favorite number, ${secondOperand} the remainder is ${remainder}.`
)

// Adventure Mode Steps (1-11) Done!

// Array of Random Numbers
let nums = [
  24838, 45462, 11650, 10503, 22290, 13692, 15925, 40872, 10636, 22859, 43503,
  44622, 17225, 43336, 43055, 27722, 43822, 43652, 18673, 25638, 30582, 36852,
  48342, 47938, 27279, 38387, 46153, 10494, 23532, 49446, 36468, 20125, 13292,
  29857, 29848, 37592, 40477, 19183, 21207, 34262, 20481, 10654, 29385, 27521,
  30658, 37944, 17258, 27807, 30886, 14214, 26573, 39788, 18362, 15964, 47156,
  31849, 37980, 30100, 23575, 29589, 20589, 20100, 13700, 12051, 35113, 35080,
  10800, 21970, 21213, 39705, 11027, 36303, 33466, 18236, 41020, 30516, 10768,
  42049, 48064, 47289, 49940, 10470, 21621, 24005, 23994, 23136, 13101, 19165,
  48102, 20022, 11126, 48178, 24362, 45987, 14484, 15690, 43198, 24793, 15103,
  39820,
]

// Print Array of Numbers
console.log(nums)

// Sort Numbers Array
nums.sort()

// Find Smallest & Largest Numbers in Array
let smallest = nums[0]
let largest = nums[nums.length - 1]

// Find the Sum of the Array
let arraySum = 0
for (const i in nums) {
  arraySum += nums[i]
}

// Find the Average using the Numbers in the Array
let average = arraySum / nums.length

// Find Sum of All Odd Numbers in Array & How Many Even Numbers are in the Array
let sumOfOdd = 0
let countOfEven = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 1) {
    sumOfOdd += nums[i]
  } else {
    countOfEven += 1
  }
}

// Print Sum of All Odd Numbers in Array
console.log(`${sumOfOdd} is the sum of all odd numbers.`)

// Print how many even numbers are in the Array
console.log(`There are ${countOfEven} even numbers are in this array.`)

// All the stats from the Array
const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
}

// Print the Stats
console.log(stats)
