1. In code below "Mark" is a string.  What is name?
```js
var name = "Mark";
```
alert("name is the reference or as you said a box in which the value has been stored and has given a name")
2. Find the error if any
```js
  var product cost = 3.45;
```
alert("error is the declaration of the variable name its a wrong fomat to declare the var name")
3. Write `Right or Wrong` next to the code below.

```js
  "Hello World"
  alert("right");
  'Hello World"
  alert("wrong");
  "Hello World'
  alert("wrong");
  'Hello World'
  alert("right");
```

## Write `VALID` and `INVALID` infront of the variable name defined below
```js
var man = alert("valid declaration");
var 1girl = alert("invalid declaration ");
var woman3 = alert("valid declaration");
var -girl = alert("invalid declaration");
var blackDog = alert("valid declaration");
var 42 = alert("invalid declaration");;
var $42 = alert("valid declaration");;
var userName = alert("valid declaration");
var x, y, z = alert("valid declaration");
var x = 5, y = 6, z = 7 = alert("valid declaration");
var x = 5 + 10 + 2 = alert("valid declaration");
```

## Basic Operations

Mathematical Operations:

Solve this using mathematical operations. (+, -, *, / , etc)

```js
var amount = 2080;
// Define a new variable and store the value that is 80 less then the value of amount.
var less_then = amount - 80;
// Define a new variable and store the value that is 200 more then the value of amount.
var more_then = amount + 200 ;
// Define a new variable and store the value that is 4 times the value of amount.
var multi = amount * 4 ;
// Define a new variable and store the reminder when the value of amount is  divided by 21.
var reminder = amount / 21 ; 
```


Logical Operation:

Solve this using logical operations. (<, >, &&, ||)

```js
var johnAge = 45;
var markAge = 35;

// Check who is older eithe John or Mark
if (johnAge > markAge) {
  alert("john is older then mark")
}else if (markAge > johnAge){
 alert("mark is older then john")
}else{
  alert("....")
}
// Check who is younger
if (johnAge < markAge) {
  alert("john is elder then mark")
}else if (markAge < johnAge){
 alert("mark is elder then john")
}else{
  alert("....")
}
// Check if their age is equal
if (johnAge == markAge) {
  alert("john age  is equal to mark")
}else if (markAge == johnAge){
 alert("mark age  is equal to john")
}else{
  alert("no one age is equal to each other")
}
// Create a new variable and assign the age of john to new variable.
let john = johnAge;

// Check if john is equal to or greater then mark.
if (john >= markAge) {
  alert("john age  is greater to mark")
}
else{
  alert("john age is neither equal or greater then marks")
}
// Check if john is less then or equal to mark.
if (john <= markAge) {
  alert("john age  is greater to mark")
}
else{
  alert("john age is neither equal or less then marks")
}
// Calculate the average age of john and mark and assign to a new variable.

  let average =  (john + markAge) / 2;
  alert(average);