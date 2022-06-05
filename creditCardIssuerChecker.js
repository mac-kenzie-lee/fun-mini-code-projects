//This program runs based on the data provided by HackReactor and is a solution to a challenge prompt;
//using the given cardData object, I coded up a function that returns the type of card issuer for a credit card;
//the cardData object was provided by the hackReactor site here: https://www.galvanize.com/web-development/technical-admissions-assessment

var cardData = [
  {
    'issuer/network': 'Visa', // card issuer (network)
    prefixes: ['4'], // beginning digits
    lengths: [13, 16, 19], // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16],
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15],
  },
  {
    'issuer/network': "Diner's Club",
    prefixes: ['38', '39'],
    lengths: [14],
  },
];

function detectNetwork(cardNumber, cardData) {
  // your solution here
  var cardN = cardNumber;
  var cardIssuer = undefined;
  if (typeof cardN === 'number') {
    cardN = String.toString(cardN);
  }
  if (typeof cardN !== 'string') {
    return 'invalid card';
  }
  var cardLen = cardN.length;
  //begin checking through the card data to match networks
  for (var i = 0; i <= cardData.length - 1; i++) {
    //starts iterating through object holding array;

    //we need to iterate through each object. First by checking for a prefix match;
    for (var key in cardData[i]) {
      if (key === 'prefixes') {
        for (var indice = 0; indice <= cardData[i][key].length - 1; indice++) {
          var firstNumberCheck = cardData[i][key][indice];
          var firstNumberCheckLen = cardData[i][key][indice].length;

          var numberCheck = 0;
          for (var t = 0; t <= firstNumberCheckLen - 1; t++) {
            if (cardN[t] !== firstNumberCheck[t]) {
              numberCheck += 1;
            }
          }
          if (numberCheck === 0) {
            cardIssuer = cardData[i]['issuer/network'];
          }
        }
      }
    }
  }

  return cardIssuer;
}

// example usage from HR site
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express
