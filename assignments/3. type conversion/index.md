1. 🎖 What's the outpit of the code below
```js
typeof "Joe";
alert("string");
typeof 4;
alert("number");
typeof NaN;
alert("number")
typeof false;
alert("boolean")
typeof function () {};
alert("function");
var phone = 8983700;
typeof phone;
alert("number")
typeof null;
alert("object")
```

2. 🎖 Output of the code below
```js
// Convert num into string
var num = 45;
String(num);
String(321);
String(300 + 23);
String(false);
String(true);
Number("3.18");
String(3.18)
Number(" ");
String("0")
Number("");
String("0")
// it will give back 0  so String conversion will work as beacuse string("0")
Number("22 44");
// it will give back NAN (nOT A NUMBER)  so String conversion will not work in it
Number(false);
// 
String("0")
Number(true);
//
String("1")
``` for the rest of other number values it will not work beause they are not numbers.

3. 🎖 Output of the following

```js
var x = 10 + "1";
console.log(x);
typeof x;

alert("String")
```