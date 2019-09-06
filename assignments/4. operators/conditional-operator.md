## If Statement
1.  🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
    
    let num_1 = +prompt("enter number one")
    let num_2 = +prompt("enter number two")

    let add = confirm("Do you wanna add these number");
    if(add == true){
      console.log(num_1 + num_2)
    }else{
      console.log(" user canelled addition ")
    }
    let multiply = confirm("Do you wanna multiply these number");
    if(multiply == true){
      console.log(num_1 * num_2)
    }else{
      console.log(" user canelled substraction ")
    }
    let divide =  confirm("Do you wanna divide these number");
    if(divide == true){
      if (num_1 > num_2){
        console.log(num_1 % num_2)
      }else{
        console.log("number 1 must be bigger to perform the action/or user cancelled")
      }
    }
    let substract = confirm ("DO you wanna subtract these two number")
     if(substract == true){
      if (num_1 > num_2){
        console.log(num_1 - num_2)
      }else{
        console.log("number 1 must be bigger to perform the action/or user cancelled")
      }
    }

2. 🎖Write a if else statement which checks if the status is single `console.log` the message `John is single` or else `John is married`
```js
var firstName = 'John';
var status = 'single';
// Your code goes here
if (status == 'single'){
  console.log( firstName + ' is ' + status)
}else {
  console.log(firstName + ' is married ')
}
```

3. 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
```js
// your code goes here
let first_num = prompt("enter first number");
let first_int = Number(first_num);

let second_num = prompt("enter second number");
let second_int = Number(second_num);

if(first_int > second_int) {
  alert(first_int + " first number is greater than second number " + second_int);
}else if(second_int > first_int) {
  alert(second_int + " second number is greater than first number " + first_int);
}else {
  alert("No a numeber");
}




```


4. 🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.

```js
// Your code goes here
let first_number = prompt("enter your first number") 
  ,second_number = prompt("enter your second number") 
  ,third_number = prompt("enter your third number");
  
  // alert(third_number);

  let first_integer = Number(first_number)
    ,second_integer = Number(second_number)
    ,third_integer = Number(third_number);

  let product_all = first_integer * second_integer * third_integer ;
  if(product_all > 0 ){
    alert("its a positive number" + " + " + product_all)
  }else if (product_all < 0){
    alert("its a positive number" + " - " + product_all)
  }else {
    alert("its not a number")
  }
  



```
```

## Switch Statement

1. 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
```js
// Your code goes here
```

2. 🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
```js
// Your code goes here
```
