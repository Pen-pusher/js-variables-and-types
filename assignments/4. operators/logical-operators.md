# Logical Operator

1. 🥇What's the output of the following, write the output next to the code as comment.

* [ ] Logical AND operation

```js
true  && true; //true
true  && false;//false
false && true;//false
false && false;//false
"foo" && "bar";//bar
"bar" && "foo";//foo
"foo" && "";//""
""    && "foo";//""
" "   && "John" && "" && false//""
false && "Hey" && undefined//false
"undefined" && false && 42//false
```

* [ ] Logical OR operation
```js
true  || true;//true
true  || false;//true
false || true;//true
false || false;//false
"foo" || "bar";//bar
"bar" || "foo";//foo
"foo" || "";//foo
""    || "foo";//foo
" "   || "John" || "" || false//john
false || "Hey" || undefined//hey
"undefined" || false || 42//42
```

2. 🥈You have two variables i.e `isGuestOneVeg` and  `isGuestTwoVeg` according to the value using logical && and || opeartor do the following.

* [ ] If both are veg "Only offer up vegan dishes."
* [ ] At least one veg  "Make sure to offer up some vegan options."
* [ ] Else, "Offer up anything on the menu"
```js
let isGuestOneVeg = false;
let isGuestTwoVeg = false;
// Your code goes here
if(isGuestOneVeg && isGuestTwoVeg == true){
    alert("we have only veg option");
}else if (isGuestOneVeg == true || isGuestTwoVeg == true){
    alert("we have matar panner available also in the menu");
}else{
    alert("we only serve non-veg items");
}
```


3. 🎖Using the variable `temperature` and logical operators do the following
* [ ] If temperature is less then 32 alert "It is freezing outside"
* [ ] If the temperature is greater then 110 alert "It is hot outside"
* [ ] else 'Go for it. It is pretty nice out'
```js
 let temperature = 4;
// Your code goes here
if(temperature < 32){
    alert("It is freezing outside")
}else if (temperature > 110){
    alert("It is hot outside")
}else{
    alert("Go for it. It is pretty nice out");
}
```

4. 🎖 Output of this and the reason behind the output.
```js
alert( alert(1) || 2 || alert(3) );
the program is executng from left to right so alert(1) will be thr first to execute,as other alert are nested inside a alert so alert(2) will be second but at the execution of the last one it will be calling alert(alert(3)),so as we know we cant call a function insde a function so it will return undefined;
```