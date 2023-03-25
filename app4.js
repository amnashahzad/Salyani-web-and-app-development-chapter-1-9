var number
document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
number = 5
document.write("<br>" + "Initial value: " + number)
document.write("<br>" + "Value after increment is: " + ++number)
var number1 = number + 7
document.write("<br>" + "Value after addition is: " + number1)
document.write("<br>" + "Value after decrement is: " + --number1)
document.write("<br>" + "The remainder is: " + number1 % 3)

var cost = 600
var ticket = 5
document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

var i
document.write("<br>" + "<br>" + "Table of 4" + "<br>")
for (i = 1; i <= 10; i++) {
    document.write("21 x" + i + "=" + 21 * i + "<br>")
}