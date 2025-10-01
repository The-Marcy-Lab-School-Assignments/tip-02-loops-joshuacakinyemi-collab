// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  let number = 0
  let sum = 0
  for (let i = 1; i <= n; i++) {
    // Loop from 1 up to the given number
    console.log(number + i ** 2); // Add the current number to the total 
    sum += i ** 2
  }

  console.log("Final output is: " + sum)
};


printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
