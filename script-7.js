//        .....Q No.1..........
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt('Enter your first name');
var lastName = prompt('Enter your last name');
var fullName = firstName+" "+lastName;
var greeting = alert(`Greeting ${fullName} Sahb`);


// .....Q No.2..........
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var fMobile = prompt('Enter your favourite Mobile Phone Name and its model' );
var lOfMobile = alert("My favourite phone is "+fMobile);
var lOfMobile = alert("Length of String is "+fMobile.length);


// .....Q No.3..........
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browse

var nationality = "Pakistani"
alert("String: "+nationality+"\nIndex of 'n' is : "+nationality.indexOf("n"));


// .....Q No.4..........
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

var hello = "Hello World";
var indHello = alert("String: "+hello+"\nLast Index of 'l': "+hello.lastIndexOf("l"));



// .....Q No.5..........
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

var nationality = "Pakistani"
alert ("String: "+nationality+"\nCharacter at index 3: "+nationality[3]);






// .....Q No.6..........
// Repeat Q1 using string concat() method

var firstName = prompt('Enter your first name');
var lastName = prompt('Enter your last name');
var fullName = firstName+" "+lastName;
var greeting = alert(`Greeting ${firstName+" "+lastName} Sahb`);


// .....Q No.7..........
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser

var city = "Hyderabad";

var cityValue = "Hyder"
var replaceValue = "Islam"
for (i=0; i<city.length; i++){
    var extract = city.slice(0,i+5);
if (extract===cityValue){
    alert(city = city.slice(0,i)+replaceValue+city.slice(i+5))
    break;
}
}
alert(city.replace(cityValue, replaceValue));



// .....Q No.8..........
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”

var message = alert("Ali and Sami are best friends. They play cricket and football together.");
// alert(message.replaceAll("and", "&"));
// WRONGGGGGGGGGGGGGGG..........................
for (i=0; i<message.length; i++){
    var extract = message.slice(i, i+3)
    // var replaceValue = "&"
    if(extract === "and"){
        alert(message = message.slice(0,i)+"&"+message.slice(i+3))
        break;
        
        }
        
}





// .....Q No.9..........
// Write a program that converts a string “472” to a number 472.Display the values & types in your browser

var string1 = "472"
// alert(typeOf string1);
var string2 = alert("Value: '472'\nType: "+typeof "472");
var string2 = alert("Value: "+string1+"\nType: "+typeof 472);


// .....Q No.10..........
// Write a program that take a URL as user input in the following format: (www.facebook.com / www.yahoo.com ).Extract the domain name & show in your browser.

var getURL = prompt("Enter URL");
alert("URL "+getURL+"\nDomain: "+getURL.replace("www.",""));





// .....Q No.11..........
// Write a program that takes user input. Convert and show the input in capital letter

var small = prompt("Enter a letter in small case")
alert("User Input: "+small+"\nUpper Case: "+small.toUpperCase())


// .....Q No.12..........
// Write a program that takes user input. Convert and show the input in small letters.

var upper1 = prompt("Enter a letter in upper case")
alert("User Input: "+upper1+"\nSmall Case: "+upper1.toLowerCase())

// // .....Q No.13..........
// // Write a program that takes user input. Convert and show the input in title case
// (city.replace(cityValue, replaceValue));

var title1 = prompt("Enter a letter ")
alert(title1)
for (i=0; i<title1.length; i++){
    if (title1[0]){
        var upperLetter = alert(title1.replace(title1[0],title1[0].toUpperCase()))
        alert(upperLetter+title1.slice(1))

    }
    // alert("User Input: "+title1+"\nTitle Case: "+title1.toUpperCase())

}



// .....Q No.14..........
// Write a program that converts the variable num to string. 

var num = 35.36 ;
Remove the dot to display “3536” display in your browser

var num = 35.36;
alert ("Number: "+num+"\nResult: "+num*100);



// .....Q No.15..........
// Write a program to display the value of x in your browser if a=”3”
// and b=”3”?

var a = "3"
var b = "3"
var x = alert("a is 3\nb is 3\na + b is "+a + b);



// .....Q No.16..........
// Write a program to display the value of y in your browser if a=”3”
// and b=”3”?



var a = "3"
var b = "3"
var y = a - b;
var x = alert("a is 3\nb is 3\na - b is "+y);



// .....Q No.17..........
// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . , !], refer to ASCII table at the end of this document

var name = prompt("Enter your name without a special symbol for e.g [! , . @]");
alert (ASCII[33])



// .....Q No.18..........
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example


var item = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Wellcome to ABC Bakery. What do you want to order sir/ ma'am?");
for (i=0; i<item.length; i++){
    var userSelected = userInput.toLowerCase();
    if (userSelected===item[i]){
        alert (item[i]+" is available at index "+item.indexOf(userSelected, i)+" in our bakery");
    }
     }

//      Q18 per else nahi laga...............
// "+userInput+" is "+<b>+"not available"+</b>+" in our bakery"





// .....Q No.19..........
// Write a program to take two input strings. Using string comparison, tell which string is greater than other or if they both are equal.

var car = 100000;
var cab = 50000;
if (car >= cab){
    alert ("car is greater than cab")
}


// .....Q No.20..........
// Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document

// COULT NOT BE SOLVED ............




// .....Q No.21..........
// Write a program to convert the following string to an array
// using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browse

var university = "University of Karachi";
for (i=0; i<university.length; i++){
    document.write(university[i]+"<br>")
}


// .....Q No.22..........
// // Write a program to display the last character of a user input

var input = prompt("Enter a country name")
var userValue = alert([input]);
for (i=0; i<userValue.length; i++){
    alert(userValue.slice(userValue.length-1,userValue.length))
    // alert (userValue[0])
}
if (i=userValue.length-1)
alert ("Last character of input: "+userValue[i
]);



// .....Q No.23..........
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string

var text = ["The quick brown fox jumps over the lazy dog"]





// .....Q No.24..........
// Write a program to count number of vowels & consonants in given string var str = “Pakistan”

var str = "Pakistan";
for (i=0; i<str.length; i++){
    if (str[i]=='a' |str[i]=='i' | str[i]=='o' | str[i]=='u'){
        
        var vowel =document.write(str[i])
        for (i=0; i<vowel.length; i++){
            document.write(vowel.length)
        }
    }
}

