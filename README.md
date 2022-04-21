Describe: creditCardValidator()

Test: "It should return true if a card number is 15 or 16 digits long."
Code: creditCardValidator("4444555566667777");
Expected Output: true

Describe Luhn's Algorithm

Test: "It should return the credit card number in reverse."
Code: for(let i = cardNumberArray.length-1; i >= 0; i--); console.log("1,2,3,4,5,6")
Expected: 6,5,4,3,2,1

Test: "It should double every other digit from right to left."
Code:luhn2("123456789123456")
Expected: [1, 4, 3, 8, 5, 12, 7, 16, 9, 2, 2, 6, 4, 10, 6]

Describe findDoubleDigits

Test: "It should find any doubled digits that are > 9 and then add the two digits together and return the 15 digit numbers as an array"
Code:findDoubleDigits("123456789123456")
Expected: [1, 4, 3, 8, 5, 3, 7, 7, 9, 2, 2, 6, 4, 1, 6]

Describe sumAndCheckLastDigit

Test: "It should sum all digits in the new array." 
Code: sumAndCheckLastDigit("123456789123456");
Expected: 68

Test: "It should return false if the card number ends in zero."
Code: sumAndCheckLastDigit("123456789123456");
Expected Output: false

// Incomplete
Test: "It should return true if the card number begins with a 4, 5, 6, 34, or 37."
Code:
const firstDigits = "4 || 5 || 6 || 34 || 37.";
Expected Output: true

Test: "It should sum any of the doubled digits that are greater than 9."
Code:
Expected Output: 



