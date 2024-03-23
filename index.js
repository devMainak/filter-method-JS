// .filter() method
//Question 1
console.log("Question 1:")

//filter numbers which are more than 10
const nums = [12, 5, 20, 8, 15, 30]
const numsMoreThanTen = nums.filter(num => num > 10)
console.log(numsMoreThanTen)

//Question 2
console.log("\nQuestion 2:")

//filter words containing 'o' char
const words = ["hello", "world", "apple", "orange", "banana"]
const wordsContainingO = words.filter(word => word.includes('o'))
console.log(wordsContainingO)

//Question 3
console.log("\nQuestion 3:")

// filter the prime numbers into a new array
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const primeNumbers = numbers.filter(num => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i+= 2)
    {
      if (num % i === 0) return false
    }
  return true
})
console.log(primeNumbers)

//Question 4
console.log("\nQuestion 4:")

// filter the numbers that are not multiples of 3 into a new array
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notThreeMultiples = threeMultiples.filter(num => num % 3 !== 0)
console.log(notThreeMultiples)

//Question 5
console.log("\nQuestion 5:")

 // filter the numbers not divisible by both 2 and 3 into a new array
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersNotDivisibleBy2And3 = numbs.filter(num => num % 2 !== 0 && num % 3 !== 0)
console.log(numbersNotDivisibleBy2And3)

//Question 6
console.log("\nQuestion 6:")

// filter the strings that are in uppercase into a new array
const fruits = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"]
const upperCaseWords = fruits.filter(fruit => 
fruit === fruit.toUpperCase())
console.log(upperCaseWords)

//Question 7
console.log("\nQuestion 7:")

// filter the strings that do not end with the letter 'y'
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"]
const wordsEndsWithY = wordsY.filter(word => word.endsWith('y'))
console.log(wordsEndsWithY)

//Question 8
console.log("\nQuestion 8:")

// filter the numbers that are multiples of both 2 and 3 into a new array
const moreNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiplesOf2And3 = moreNums.filter(num => num % 2 === 0 && num % 3 === 0)
console.log(multiplesOf2And3)

//Question 9
console.log("\nQuestion 9:")

// filter the strings that includes the letter 'y' and 'u' into a new array
const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"]
const wordsContainingYAndU = feelingWords.filter(word => word.includes('y') && word.includes('u'))
console.log(wordsContainingYAndU)

//Question 10
console.log("\nQuestion 10:")

// filter the numbers that are multiples of 5 or 3 into a new array
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiplesOf5And3 = newNums.filter(num => num % 5 === 0 || num % 3 === 0)
console.log(multiplesOf5And3)