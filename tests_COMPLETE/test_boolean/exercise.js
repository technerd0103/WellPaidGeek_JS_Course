/*
Task 1
------

Write a function isEven that takes a number as an argument and returns true 
if the number is even, otherwise it returns false.

How do you find out if a number is even or not? You can use the JavaScript
remainder (%) operator. It returns the remainder that occurs when dividing the
left parameter with the right one.

E.g.

3 % 2  result is 1
0 % 2 result is 0
4 % 2 result is 0

I haven’t taught you this yet, but like I said, experienced developers seem
like they know everything when they don’t just by looking the answers up ;)
See here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
*/

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

/*
Task 2
------
Write a function getExamResult which takes a students mark for an exam and 
returns a string with the result based on the score.
The result strings are as follows, with the total possible marks being 100.

score > 100: 'Cheat'
score = 0: 'Epic fail'
score < 50: 'Fail'
score >= 50: 'Pass'

So

getExamResult(0) => 'Epic fail'
getExamResult(110) => 'Cheat'

As always, the string results must match *exactly* what I’ve put here 
(including case!), or the tests won’t pass!
*/

function getExamResult(mark) {
  if (mark > 100) {
    return 'Cheat';
  } else if (mark === 0) {
    return 'Epic fail';
  } else if (mark < 50) {
    return 'Fail';
  } else {
    return 'Pass';
  }
}