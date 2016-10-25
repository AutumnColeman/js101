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
  var good = 0.20;
  var fair = 0.15;
  var bad = 0.10;
  if (service == 'good') {
    console.log(bill * good);
  } else if (service == 'fair') {
    console.log(bill * fair);
  } else if (service == 'bad') {
    console.log(bill * bad);
  }
}
tipAmount(100, 'good');
tipAmount(40, 'fair');

// 5) Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
function totalAmount(bill, service) {
  var good = 0.20;
  var fair = 0.15;
  var bad = 0.10;
  if (service == 'good') {
    console.log(bill += bill * good);
  } else if (service == 'fair') {
    console.log(bill += bill * fair);
  } else if (service == 'bad') {
    console.log(bill += bill * bad);
  }
}
totalAmount(100, 'good');
totalAmount(40, 'fair');

// 6) Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
function splitAmount(bill, service, guests) {
  var good = 0.20;
  var fair = 0.15;
  var bad = 0.10;
  if (service == 'good') {
    console.log((bill += (bill * good))/guests);
  } else if (service == 'fair') {
    console.log((bill += (bill * fair))/guests);
  } else if (service == 'bad') {
    console.log((bill += (bill * bad))/guests);
  }
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
