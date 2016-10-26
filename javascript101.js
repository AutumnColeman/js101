// 1) Write a function hello which given a name, says hello to the name
function hello(name) {
  console.log('Hello, ' + name + '!');
}
hello('Mustache');

// 2) Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.
function hello(name) {
  if (!name) {
    name = 'world';
  }
  console.log('Hello, ' + name + '!');
}
hello();

// 3) Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
function madlib(name, subject) {
  return (name + "'s favorite subject in school is " + subject);
}
madlib('Autumn', 'Python');

// 4) Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
//
// good -> 20%
// fair -> 15%
// bad -> 10%

function tipAmount(bill, service) {
  if (service == 'good') {
    return bill * 0.20;
  } else if (service == 'fair') {
    return bill * 0.15;
  } else if (service == 'bad') {
    return bill * 0.10;
  }
}
tipAmount(100, 'good');
tipAmount(40, 'fair');

// 5) Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
function totalAmount(bill, service) {
  var tip = tipAmount(bill, service);
    return tip + bill;
  }
totalAmount(100, 'good');
totalAmount(40, 'fair');

// 6) Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
function splitAmount(bill, service, guests) {
  var total = totalAmount(bill, service);
   return total / guests;
 }
splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2);

// 7) Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line. Write two versions of the above function. One using a while loop and the other using a for loop.
//for loop
function printNumbers(strt, end) {
  for (var i = strt; i <= end; i++){
    console.log(i);
  }
}
printNumbers(1, 10);

//while loop
function printNumbers(strt, end) {
  var i = strt;
  while (i <= end) {
    console.log(i);
    i += 1;
  }
}
printNumbers(1, 10);

// 8) Write a function printSquare which is given a size and prints a square of that size using asterisks.
function printSquare(size) {
  var row = "";
  for (var i = 0; i <= size; i++) {
    row += "*";
  }
  for (var j = 0; j <= size; j++) {
    console.log(row);
  }
}
printSquare(5);

// 9) Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
function printBox(x, y) {
  var row = "";
  for (var i = 0; i <= x; i++) {
    row += "*";
  }
  console.log(row);
  for (var j = 0; j <= (y - 2); j++) {
    var empty = " ";
    console.log(empty);
  }
  console.log(row);
}
printBox(6, 4);

// 10) Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
function strMultiply(str, size) {
  var line = '';
  for (var j = 0; j < size; j++) {
    line += str;
  }
  return line;
}

function printBanner(text) {
  var width = text.length + 4;
  var height = 3;
  var stars = strMultiply('*', width);
  var middleLine = '* ' + text + ' *';
  console.log(stars);
  for (var i = 0; i < height - 2; i++) {
    console.log(middleLine);
  }
  console.log(stars);
}

printBanner('Welcome to DigitalCrafts');


// 11) Write a function factors which is given a number and returns an array containing all its factors.
function factors(number) {
  var sqrt = Math.sqrt(number);
  var factors = [];
  for (var i = 0; i < sqrt; i++) {
    if (number % sqrt === 0) {
        factors.push(i);
        factors.push(number/i);
    }
  }
}
console.log(factors(50));

// 12) Write a function cipher which is given a string and returns the Caesar cipher of the string.
function cipher(message) {
  var alpha_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
  var cipher_list = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split('');
  var new_string = "";

  for(var i = 0; i < message.length; i++){
    var char = message[i];
    var idx = alpha_list.indexOf(char);
    var newChar = cipher_list[idx];
    if (!newChar) {
      new_string += char;
    }
    else {
      new_string += newChar;
    }
  }
  return new_string;
}
cipher('Genius without education is like silver in the mine');
