// Challenge 1.
// Log message in console saying "I'm Learning Javascript"
console.log("I'm learning Javascript ")
// Challenge 2.
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
let name = 'john';
let admin_name = name;
alert(admin_name);

// Challenge 3.
// Use alert function to to show a message saying “Hello World”.
alert("Hello world");
// Challenge 4.
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"
let greet = prompt("enter your name ?");
alert(`welcome ${greet}`);
// Challenge 5.
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.
let user_name = prompt("Enter Your Name");
let user_name_length = user_name.length;
alert(user_name_length);
// Challenge 6.
var city = "Dharamshala";
var country = "India";
// Alert the above variable like "Dharamshala, India";
alert(city + ', ' + country);