function creditCardValidator(cardNumber) {
  if (cardNumber.length === 15 || cardNumber.length === 16) {
    return true;
  }
  return false;
}

// function luhnAlg(cardNumber){
//   for( let i = cardNumber.length -1; 0 <= i <= cardNumber.length; i -= 2) {
//   return cardnumber[i] * 2;
//   }
// }

function cardnumber(inputtxt)
{
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Visa credit card number!");
        return false;
        }
}

//Sana's OG function
function luhn(cardNumber) {
  const cardNumberArray = Array.from(cardNumber);
  const reversedCardNumber = cardNumberArray.reverse();
  let newArray = []
  for (let i = 0; i <= reversedCardNumber.length - 1; i++) {
    let index = parseInt(reversedCardNumber[i]);
    if (i % 2 != 0) {
      index = index * 2;
    }
    if(index > 9) {
      const doubleDigit = Array.from(index);
      console.log(doubleDigit);
      };
    console.log(index);
    newArray.push(index);
  }
  console.log(newArray.reverse());
}

//Mauro's refactored
function luhn2(cardNumber) {
  const cardNumberArray = Array.from(cardNumber);
  let newArray = []
  for(let i = cardNumberArray.length-1; i >= 0; i--) {
    let numAtIndex = parseInt(cardNumberArray[i]);
    if (i % 2 != 0) {
      numAtIndex *= 2;
    }
    // console.log(numAtIndex);
    newArray.push(numAtIndex);
  }
  // console.log(newArray.reverse());
  return (newArray.reverse());
};

//Patty's magic code
function findDoubledDigits(cardNumber){
  let newNumber = luhn2(cardNumber);
  for (let i=0; i<newNumber.length; i++){
    if (newNumber[i] > 9){
      newNumber[i] = newNumber[i]-9;
    };
  };
  return newNumber;
};

function sumAndCheckLastDigit(newNumber) {
  let newNumber2 = findDoubledDigits(newNumber);
  let sum = 0;
  for(let i = 0; i < newNumber2.length; i++) {
    sum += newNumber2[i];
  };
  if (sum.toString().slice(-1) === "0") {
    return true;
  } else {
    return false;
  };
}


  // if(sum % 10 === 0) {
  //   return true
  // }