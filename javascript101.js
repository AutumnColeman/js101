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

4) Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10%
