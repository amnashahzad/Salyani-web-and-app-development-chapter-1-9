var name1 = prompt("What is your name?")
document.write("<br>" + "<br>" + "Assalam-o-alikum " + name1 + "!" + "<br>")

var tabnum = +prompt("Enter a number: ")
if (tabnum) {
    document.write("<br>" + "Table of " + tabnum + " is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + tabnum + "x" + i + "=" + (tabnum * i));
    }
}
else {
    document.write("<br>" + "Table of 22 is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + "22x" + i + "=" + (22 * i));
    }
}
document.write("<br><br>")