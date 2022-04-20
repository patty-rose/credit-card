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


let cardNumbers = parseInt(cardNumber[i]);



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



/*function luhnAlgo(ccNumber) {
	const ccNumberArr = Array.from(ccNumber);
  const reversedCCNumber = ccNumberArr.reverse();
  let newccArr = [];
  let sum = 0;
  
  for (let i = 0; i <= reversedCCNumber.length -1; i++) {
  	let index = parseInt(reversedCCNumber[i]);
    if (i % 2 != 0) {
    	index = index * 2;
    	} if (ccNumber[i] * 2 > 9) {
      	sum[i] -9;
      }
    console.log(index);
    newccArr.push(index);
  }
  console.log(newccArr.reverse());
}*/