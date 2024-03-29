// Use default parameter where ever you can

/* 1. minToSec

Write a function named minToSec that takes an integer minutes and converts it to seconds.


minToSec(50) ➞ 3000
minToSec(13) ➞ 780
minToSec(2) ➞ 120
*/

// - Write a Function Decleration for above problem
function minToSec (minutes){
    return minutes * 60
}
  
  // - Execute the function with required parameter
  minToSec(5); // 300
  minToSec(50); // 3000
  minToSec(13); // 780
  minToSec(2); // 120
  
/* 2. 
  Create a function named isInRange which validates whether a number n is exclusively within the bounds of lower and upper.
  Return true and false based on that.
  
  The function accepts three parameter lower, upper and the number.
  isInRange(1, 20, 9); // true
  isInRange(1, 10, 19); // false
*/
  
  // - Write a Function Decleration for above problem

  function isInRange (lower,upper,number){
    if (number >= lower && number <= upper){
        return true;
    } else {
        return false
    }
  }


/* 3. calculateBMI
  
  Take two arguments weight and height and return `Underweight`, `Normal` etc based on data.
  
  Body mass index(BMI) is calculated as follows: bmi = weight / (height x height). Write a function which calculates bmi.
  BMI is used to broadly define different weight groups.
  Check if a person is underweight, normal, overweight or obese based the information given below.
  
  These are the conditions:
  
  Underweight: BMI is less than 18.5
  Normal weight: BMI is 18.5 to 24.9
  Overweight: BMI is 25 to 29.9
  Obese: BMI is 30 or more
  
*/
  
function bmiCalculate (weight,height){
    let bmi = weight / (height * height)

    if (bmi <= 18.5){
        return `Underweight`
    } else if (bmi >= 18.5 && bmi <= 24.9 ){
        return `Normal Weight`
    } else if (bmi >= 25 && bmi <= 24.9 ){
        return `Overweight`
    } else if (bmi > 30 ){
        return "Obese"
    } else {
        alert("Entern a valid input")
    }
}
  
/* 4. appropiateDrinks
  
  Create a function that take the age are return the appropiate drink based on these conditions:
  
  - Under 14 years old — return "drink fruit juice"
  - Under 18 years old — return "drink soda"
  - Under 21 — return "drink fruit-flavored beer"
  - 21 years or older — return "drink throat-piercing vodka"
  
*/
  
function apropriateDrinks (age){
    switch (true){
        case age < 14 :
        return "Drink fruit juice"
        break;
        case age < 18 :
        return "Drink soda"
        break;
        case age < 21 :
        return "Drink fruit-flavored beer"
        break;
        case age > 21 :
        return "Drink throat-piercing vodka"
        break;
        default : 
        return 'Enter a valid input'
    } 
}
  
/* 5. Add two numers or string
  
  Write a function that accepts two numbers or string and returns the sum of the numbers and concatenation of the strings.
  Twist is when user passes anything other than number, or string value you should be able to handle that.
  
  - If both values are number add them
  - If both values are string concat theme
  - Anything other than that alert "Enter valid values"
  
 */
  function sum (value1,value2){
    if (typeof value1 === "number" && typeof value2 === "number"){
        return value1 + value2
    }  else if (typeof value1 === "string" && typeof value2 === "string"){
        return value1 + " " + value2 
    } else {
        alert("Enter valid values")
    }
  }

  // Function Test
  sum(2, 4); // 4
  sum("Arya", "Stark"); // "Arya Stark"
  sum("Arya", 2); // Enter valid Values
  sum(null, 2); // Enter valid Values
  sum(undefined, 2); // Enter valid Values

