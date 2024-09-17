// Question 01
document.write("<h3>Question 01</h3>");
var a = 10
document.write("Result:<br>The value of a is: ", a, "<br>...................................");
document.write("<br><br><b>Increment first then show</b><br>The value of  ++a is: ", ++a);

document.write("<br>Now the value of a is: ", a);


document.write("<br><br><b> first  show then Increment</b><br>The value of  ++a is: ", a++);

document.write("<br>Now the value of a is: ", a);

document.write("<br><br><b>Subtract  first then show</b><br>The value of -- a is: ", --a);

document.write("<br>Now the value of a is: ", ++a);


document.write("<br><br><b>Subtract first  show then Increment</b><br>The value of  ++a is: ", a--);

document.write("<br>Now the value of a is: ", a);

// Question 02
document.write("<h3>Question 02</h3>");
document.write("<h3><center><u>Equation  answer is  --num1+ ++num2 + num2-- </u></center></h3>");
var num1 = 2, num2 = 1;
var result = --num1 + ++num2 + num2--;
document.write("<br>num1 is ", num1, "<br>num2 is ", num2, "<br>Result is: ", result);

// Question 03
document.write("<h3>Question 03</h3>");

var userNumb = +prompt("Enter your number");
document.write("<br><br>User Number is " + userNumb);

// Question 05
document.write("<h3>Question 05</h3>");

document.write("<h3><center><u>Table </u></center></h3>");

var defaultNum = 5;
var tableNum = +prompt("Enter your table number :", defaultNum);
for (let i = 1; i < 10; i++) {
    if (tableNum !=defaultNum ) {
        document.write("<br>",tableNum, " X ", i, " = ", tableNum * i);
    }
    else{
        document.write("<br>",defaultNum, " X ", i, " = ", defaultNum * i);
    }

}
// Question 06
document.write("<h3>Question 06</h3>");

// Q 06-> a
var sub1=prompt("Enter Subject 1: ");
var sub2=prompt("Enter Subject 2: ");
var sub3=prompt("Enter Subject 3: ");
// Q 06-> b
var subMark=100;
// Q 06-> c
var markSub1=+prompt("Enter Marks of "+sub1);
var markSub2=+prompt("Enter Marks of "+sub2 );
var markSub3=+prompt("Enter Marks of "+sub3 );
document.write("<h3><center><u>Student Marksheet  </u></center></h3>");
var percentSub1= markSub1/subMark*100;
var percentSub2= markSub2/subMark*100;
var percentSub3=markSub3/subMark*100;
var obtainedMark=markSub1+markSub2+markSub3;
var totalMark=subMark*3;
var percentTotal= obtainedMark/totalMark *100;
 document.write("<table  border='1'><thead><tr><td><b>Subject</b></td><td><b>Total Marks</b></td><td><b>Obtained Marks</b></td><td><b>Percentage</b></td></tr></thead><tbody><tr><td>"+sub1+"</td><td>"+subMark+"</td><td>"+markSub1+"</td><td>"+percentSub1+"</td></tr><tr><td>"+sub2+"</td><td>"+subMark+"</td><td>"+markSub2+"</td><td>"+percentSub2+"</td></tr><tr><td>"+sub3+"</td><td>"+subMark+"</td><td>"+markSub3+"</td><td>"+percentSub3+"</td></tr><tr><td> </td><td><b>"+totalMark+"</b></td><td><b>"+obtainedMark+"</b></td><td><b>"+percentTotal+"</b></td></tr></tfoot></table>");

