// Question 01
document.write("<h3>Question 01</h3>");
var city = prompt("Enter city name: ");

if (city === "karachi") {
    document.write("Welcome to city of lights");
}
else if (city === "islamabad") {
    document.write("Welcome Capital of pakistan ");
}
else if (city === "lahore") {
    document.write("Welcome to city of Iqbal");
}
else if (city === "baltistan") {
    document.write("Welcome to the city of ati baltiyul");
}
else {
    document.write("Please enter any city");
}
// Question 02
document.write("<h3>Question 02</h3>");
var gender = prompt("Enter your gender")
if (gender === "male") {
    document.write("Good Morning,Sir")
}
else if (gender === "female") {
    document.write("Good Morning,Ma'am")
}
else {
    document.write("Good Morning")
}
// Question 03
document.write("<h3>Question 03</h3>");
var trafficColor = prompt("Enter Traffic Color :")
if (trafficColor == "red") {
    document.write("Must Stop!")
}
else if (trafficColor == "yellow") {
    document.write("Ready to move")
}
else if (trafficColor == "green") {
    document.write("Move now")
}
else {
    document.write("Enter right traffic color")
}
// Question 04
document.write("<h3>Question 04</h3>");
var remainFuel = prompt("Enter your remaining fuel");
if (remainFuel < 0.25) {
    document.write("Please refill the fuel in your car")
}
else {
    document.write("No need to refill the fuel in your car")
}
// Question 05
document.write("<h3>Question 05</h3>");
// Q5 ->a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// Q5 ->b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// Q5 ->c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// Q5 ->dvar materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// Q5 ->e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// Q5 ->f
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Question 06
document.write("<h3>Question 06</h3>");
document.write("<h3><center><u>Student Marksheet  </u></center></h3>");
var obtainedMark = +prompt("Enter total Obtained marks: ");
var totalMark = +prompt("Enter  total marks: ");
var percentage = obtainedMark / totalMark * 100;
if (percentage >= 80) {
    document.write("Total marks : " + totalMark + "<br>Obtained marks : " + obtainedMark + "<br>Percentage : " + percentage + "<br>Grade : A-one<br>Remarks : Excellent")
} else if (percentage >= 70) {
    document.write("Total marks : " + totalMark + "<br>Obtained marks : " + obtainedMark + "<br>Percentage : " + percentage + "<br>Grade : A <br>Remarks : Good")
} else if (percentage >= 60) {
    document.write("Total marks : " + totalMark + "<br>Obtained marks : " + obtainedMark + "<br>Percentage : " + percentage + "<br>Grade : B<br>Remarks : You need to improve")
}
else {
    document.write("Total marks : " + totalMark + "<br>Obtained marks : " + obtainedMark + "<br>Percentage : " + percentage + "<br>Grade : Fail<br>Remarks :Sorry!Try next time ")
}
// Question 07
document.write("<h3>Question 07</h3>");
document.write("<h3><center><u>Guess game</u></center></h3>");
var guessNum = +prompt("Enter your guess number : ")
if (guessNum === 4) {
    document.write("Bingo! Correct answer")
}
else if (guessNum > 4)
    document.write("Close enough to the correct answer")
else {
    document.write("Wring guess!")
}

// Question 08
document.write("<h3>Question 08</h3>");
var numDivisible = +prompt("Enter to check divisible pr not : ");
if (numDivisible % 3===0) {
    document.write("Number is divisible by 3")

}
else{
    document.write("Number is not divisible by 3")

}
// Question 09
document.write("<h3>Question 09</h3>");
var numcheck=+prompt("Enter to check Whether  number is even or odd : ");
if(numcheck%2===0){
    document.write("It is Even Number")
}
else{
    document.write("It is Odd Number")
}
// Question 10
document.write("<h3>Question 10</h3>");
document.write("<h3><center><u>Temperature Checker</u></center></h3>");
var temperature = +prompt("Enter your temperature : ")
if (temperature > 40) {
    document.write("It is too hot outside.")
} else if (temperature > 30) {
    document.write("The Weather today is Normal.")
} else if (temperature > 20) {
    document.write("Today’s Weather is cool.”")
}
else {
    document.write("OMG! Today’s weather is so Cool.")
}
// Question 11
document.write("<h3>Question 11</h3>");
document.write("<h3><center><u>Calculator</u></center></h3>");

var firstNum=+prompt("Enter first number : ");
var secondNum=+prompt("Enter Second number : ");
document.write("Available Operation (+, -, *, /, %) <br>")
var operator=prompt("Enter any available Operator")
if(operator==="+"){
    document.write("Addition of ",firstNum," &  Second is : ",firstNum+secondNum )
}
else if(operator==="-"){
    document.write("Subtraction of ",firstNum," &  Second is : ",firstNum-secondNum )
}
else if(operator==="*"){
    document.write("Multiplication of ",firstNum," &  Second is : ",firstNum*secondNum )
}else if(operator==="/"){
    document.write("Division of ",firstNum," &  Second is : ",firstNum/secondNum )
}
else if(operator==="%"){
    document.write("Modulus of ",firstNum," &  Second is : ",firstNum%secondNum )
}
else{
    document.write("Invalid operator")
}