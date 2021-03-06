// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  //const studentsNames = ['Dan', 'Kane', 'Ellen'];
  //const first = studentsNames[0];
  return arr[0];
}


function returnLast(arr) {
  // return the last item of the array
  //const studentsNames = ['Dan', 'Kane', 'Ellen'];
  //const last = studentsNames[studentsNames.length-1];
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  //const studentsNames = ['Dan', 'Kane', 'Ellen'];
  //return studentsNames.length;
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] +1;
}
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' '); // .join() method combines the items in the array
                          // space between quotation marks creates the space)
}


function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if (arr.includes(item)) { // .includes() method determines whether a string contains characters of a specific string
    return true;    // .includes () method returns boolean (true or false)
  } else {
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    // alternative answer/code below:
      //const reducer = (accumulator, currentValue) => accumulator + currentValue;
      //return numbers.reduce(reducer);
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var sum = 0;
  for (let i = 0; i < testScores.length; i++) { //
      sum = sum + testScores[i]; // can use sum =+ testScores[i]
  }
  return sum / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  //return Math.max.apply(null, numbers) // also work
  return Math.max(...numbers); // ... is called spread operator // Math.max() is method to find largest number in array
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it

  let mult = 0;
        for (let i = 0; i < arguments.length; i++) {
            mult = mult * arguments[i];
        }
        return mult;
    }


// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
