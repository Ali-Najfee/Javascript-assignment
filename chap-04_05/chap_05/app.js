// Question 01
document.write("<h3>Question 01</h3>");
var first = 9;
var second = 3;
var sum = first + second;
document.write("<center><h3><u>Maths calculator</u></h3></center>Sum of " + first + " and " + second + " is " + sum);
// Question 02
document.write("<h3>Question 02</h3>");

var subtract = first - second;
var multiply = first * second;
var division = first / second;
var modulus = first % second;
document.write("<br>Subtraction of " + first + " and " + second + " is " + subtract + "</br>Multiply of " + first + " and " + second + " is " + multiply + "</br>Division of " + first + " and " + second + " is " + division + "</br>Modulus of " + first + " and " + second + " is " + modulus);
// Question 03
document.write("<h3>Question 03</h3>");

// Q 03--> a Variable declare
var inputNum;
// Q 03-->b Show Variable
document.write("<center><h3><u>Maths Expression</u></h3></center>Value after variable declaration is " + inputNum);
// Q 03-->c Variable initialize
inputNum = 5;
// Q 03-->d Show Variable
document.write("<br>Initial value: " + inputNum);
// Q 03-->e increment value
inputNum++;
// Q 03-->f Show Variable after increment
document.write("<br>Value after increment is: " + inputNum);
// Q 03-->g add  by 7  
inputNum = inputNum + 7;
// Q 03-->h Show Variable after addition
document.write("<br>Value after addition is: " + inputNum);
// Q 03--> decrement by 1
inputNum = inputNum - 1;
// Q 03-->j Show Variable after decrement
document.write("<br>Value after decrement is: " + inputNum);
// Q 03-->k remainder after division by 3
inputNum = inputNum % 3;
document.write("<br>The remainder is: " + inputNum)
// Question 04
document.write("<h3>Question 04</h3>");

var ticketCost = 600;
var ticketBuy = 5;
var totalCost = ticketBuy * ticketCost;
document.write("<br>Total cost to buy " + ticketBuy + " tickets to a movie is " + totalCost + " PKR");
// Question 05
document.write("<h3>Question 05</h3>");

document.write("<center><h3><u>Table of 04</u></h3></center>4 x 1  = 4<br>4 x 2 = 8<br>4 x 3 = 12<br>4 x 4 = 16<br>4 x 5 = 20<br>4 x 6 = 24<br>4 x 7 = 28<br>4 x 8 = 32<br>4 x 9 = 36<br>4 x 10 = 40<br>");

// Question 06
document.write("<h3>Question 06</h3>");

document.write("<center><h3><u>Temperature Converter</u></h3></center>");
var valueCelsius = 25;
var fahrenhiet = (valueCelsius * 9 / 5) + 32;
document.write("<br>" + valueCelsius + "°C is " + fahrenhiet + "°F");
var valueFahrenhiet = 70;
var celsius = (valueFahrenhiet - 32) * 5 / 9;
document.write("<br>" + valueFahrenhiet + "°F is " + celsius + "°C");
// Question 07
document.write("<h3>Question 07</h3>");

// Q 07--> a Price of Item 1
var priceItem1 = 3000;
// Q 07--> b Price of Item 2
var priceItem2 = 2000;
// Q 07--> c Ordered Quantity of Item 1
var quantityItem1 = 20;
// Q 07--> d Ordered Quantity of Item 2
var quantityItem2 = 10;
// Q 07--> e Shipping Charges
var shippingCost = 100
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCost
document.write("<center><h3><u>Shopping Cart</u></h3></center>");
document.write("Price of Item 1 is " + priceItem1 + " PKR" + "<br>Quantity of Item 1 is " + quantityItem1 + "<br>Price of Item 2 is " + priceItem2 + " PKR" + "<br>Quantity of Item 2 is " + quantityItem2 + "<br>Shopping Charges is " + shippingCost + "<br><br>Total cost of your order is of " + totalCost + " PKR");

// Question 08
document.write("<h3>Question 08</h3>");

document.write("<center><h3><u>Marks Sheet</u></h3></center>");
var totalMark = 300;
var obtainedMark = 175;
var percentage = (obtainedMark * 100) / totalMark;
document.write("<br>Total marks: " + totalMark + "<br>Mark obtained: " + obtainedMark + "<br>Percentage: " + percentage + "%");
// Question 09
document.write("<h3>Question 09</h3>");

// Pkr Exchange Rate
var dollarRate = 104.80;
var riyalRate = 28;
var dollarSaving = 10, riyalSaving = 25;
var totalSaving = (dollarSaving * dollarRate) + riyalSaving * riyalRate;
document.write("<center><h3><u>Currency Exchange in pkr</u></h3></center>Dollar Exchange Rate is 104.80 <br>Riyal Exchange Rate is 28<br>Having Dollar Saving: " + dollarSaving + "<br>Having Riyal Saving : " + riyalSaving + "<br>Total saving in PKR: " + totalSaving);
// Question 10
document.write("<h3>Question 10</h3>");

document.write("<center><h3><u>Arithmetic Calculation</u></h3></center>");
var num = 9;
document.write("<br>Initial Value is:" + num)

// a->Add
var num = num + 5;
document.write("<br>Add by 5: " + num);
// b-> multiply
var num = num * 10;
document.write("<br>Multiply by 10 is: " + num);

// c -> division
var num = num / 2;
document.write("<br>Divide by 2: " + num);

// Question 11
document.write("<h3>Question 11</h3>");

document.write("<center><h3>Age Calculator<u></u></h3></center>");
// a --> current year
var currentYear = 2024
// b --> birth year
var birthYear = 2007
// c --> age calculator
var age = currentYear - birthYear;
document.write("<br>Current Year is " + currentYear + "<br>Your Birth Year is " + birthYear + "<br>Your Current age is " + age + " years old");
// Question 12
document.write("<h3>Question 12</h3>");

document.write("<center><h3><u>The Geometrizer</u></h3></center>");
// a -> radius
var radius = 12;
var pi = 3.14159;
// b->calculate circumference & area
var circumference = 2 * pi * radius
var area = pi * radius * radius
document.write("<br>Radius of a circle is " + radius + "<br>The circumference is " + circumference + "<br>The area is " + area);
// Question 13
document.write("<h3>Question 13</h3>");

document.write("<center><h3><u>The Life supply Calculator</u></h3></center>");
// a-> favuorite Snack
var favSnack = "Ice Cream";
// b-> current age
var currentAge=15;
// c->max age
var estimatedAge=65;
// d->amount per day
var eatenSnack=3;
// e->total cost
var TotalEatenCost=(estimatedAge-currentAge)*eatenSnack; 
document.write("Favourite Snack is " +favSnack+"</br>Current age is "+currentAge+"<br> Estimated Maxium Age is "+estimatedAge+"<br> Amount of snacks per day is "+eatenSnack+"<br>You will need "+TotalEatenCost+" ice cream to last you until the ripe old age of "+estimatedAge);