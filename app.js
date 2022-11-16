// Chapter01:ALERT:-
alert ("Welcome to JS Land");
alert ("Happy Coding");

// Chapter02:VARIABLES FOR STRING:-
var username = "";
var myname = "Sufyan Sohail";

var message = "";
message = "Hello World";
console.log(message);

var std = "Jhone Doe";
var age = "15";
var skills = "Certified Mobile Application Development";

alert(std);
alert(age);
alert(skills);

var food = "";
food = "pizza";
alert(food);
food = "pizz";
alert(food);
food = "piz";
alert(food);
food = "pi";
alert(food);
food = "p";
alert(food);

var email = "example@example.com";
alert("My Email Address is"  + email );

var book = "Asmarter way to learn JavaScript";
alert("I am trying to learn from the book" + book);

document.write(" Yah! I can write HTML content through JavaScript");

var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
 alert(design);
 document.write("<br>");
 document.write("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

// Chapter03:VARIABLES FOR NUMBERS:-
var age = 18;
alert("I am"+ age + "years old");

var visit = 12;
alert("You have visited this site" + visit + "times");
document.write("<br>");
var birthyear = "2003";
document.write("My birth year is" + birthyear);

var visitorsname = "Jhon Doe";
var product = "T-Shirt(s)";
var quantity = 5;
document.write("<br>");
document.write(visitorsname + "ordered" + quantity + product + "on XYZ clothing store")


// // Chapter04:VARIABLE NAMES: LEGAL & ILLEGAL:-
var variable1 = "hello world!"
var variable2 ="hello javascript..."
var variable3 = 32; 

//LEGAL VARIABLES
 var underscore_ =  ("Legal");
 var dollar$ =("Legal");
 var number0 = ("Legal");
 var myvar = ("Legal");
 var useralert = ("legal")

//ILLEGAL VARIABLES
// var a b c = ("illegal");
// var 0abc = ("illegal");
// var abc+ = ("illegal");
// var +abc = ("illegal");
// var "abc" = ("illegal");

document.write("<br>");

document.write("Rules for naming JS variables:-");

document.write("<br>");
document.write("<br>")


document.write("Variable names can only contain Number, String, DollarSign  and Underscore");

document.write("<br>");
document.write("<br>")

document.write("Variables must begin with a Dollar Sign , underscore or Letter");

document.write("<br>");
document.write("<br>");

document.write("Variable names are case sensitive");

document.write("<br>");
document.write("<br>");

document.write("Variable names should not be JS keywords");

// Chapter05:MATH EXPRESSIONS:-
var a = 3;
var b = 5;
document.write("Sum of 3 and 5 is"+(a+b));
document.write("<br>");
document.write("<br>");

document.write("Subtraction of 3 and 5 is"+(a-b));
document.write("<br>");
document.write("<br>");

document.write("Multiplication of 3 and 5 is"+(a*b));
document.write("<br>");
document.write("<br>");

document.write("Division of 3 and 5 is"+(a/b));
document.write("<br>");
document.write("<br>");
document.write("<br>");

var value1 = "";
document.write("Value after variable declaration is undefined");

value1 = 5;
document.write("<br>");
document.write("<br>");

document.write("Initial value:"+value1);
document.write("<br>");
document.write("<br>");

document.write("Value after incriment is:"+ ++value1);
document.write("<br>");
document.write("<br>");

document.write("Value after addition is:"+ (value1+7));
document.write("<br>");
document.write("<br>");

document.write("Value after decrement is:"+ value1);


document.write("<br>");
document.write("<br>");

var ticketprice = 600;
var totaltickets = 5;

document.write("Total cost to buy"+ totaltickets+"tickets to a movie is"+(totaltickets*ticketprice)+"PKR");

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("TABLE OF 4:");
document.write("<br>");

var tableof4 = 4;

document.write("4*1 =" + tableof4*1);
document.write("<br>");

document.write("4*2 =" + tableof4*2);
document.write("<br>");

document.write("4*3 =" + tableof4*3);
document.write("<br>");

document.write("4*4 =" + tableof4*4);
document.write("<br>");

document.write("4*5 =" + tableof4*5);
document.write("<br>");

document.write("4*6 =" + tableof4*6);
document.write("<br>");

document.write("4*7 =" + tableof4*7);
document.write("<br>");

document.write("4*8 =" + tableof4*8);
document.write("<br>");

document.write("4*9 =" + tableof4*9);
document.write("<br>");

document.write("4*10 =" + tableof4*10);
document.write("<br>");
document.write("<br>");

document.write("Shopping Cart:");
document.write("<br>");
document.write("<br>");

var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping_charges = 100;

document.write("Price of item 1 is"+ item1);
document.write("<br>");

document.write("Quantity of item 1 is"+ quantity1);
document.write("<br>");

document.write("Price of item 2 is"+item2);
document.write("<br>");

document.write("Quantity of item 2 is"+quantity2);
document.write("<br>");

document.write("Shipping Charges"+shipping_charges);
document.write("<br>");
document.write("<br>");

document.write("Total cost of your order is");
document.write((item1*quantity1)+(item2*quantity2)+(shipping_charges));
document.write("<br>");
document.write("<br>");

document.write("MARKS SHEET:");
document.write("<br>");

var total_marks = 980;
var marks_obtained = 804;

document.write("<br>");
document.write("Total marks:"+total_marks);
document.write("<br>");

document.write("Marks obtained:"+marks_obtained);
document.write("<br>");

document.write("Percentage:"+marks_obtained/total_marks*100+"%");
document.write("<br>");
document.write("<br>");

document.write("CURRENCY IN PKR:")
document.write("<br>");
var us_dollar = 104.80;
var saudi_riyal = 28;

document.write("<br>");
document.write("We have 10 US Dollar & 25 Saudi Riyals.:(1 US Dollar = 104.80) & (1 Saudi Riyal = 28) PKR");
document.write("<br>");
document.write("Total Currency in PKR:");
document.write((10*us_dollar)+(25*saudi_riyal));
document.write("<br>");
document.write("<br>");

var random_number = 15;

document.write("Airthmetic Operators Result:")
document.write((random_number+5) +(random_number*10)+(random_number/2));
document.write("<br>");
document.write("<br>");

document.write("AGE CALCULATOR:");
document.write("<br>");

var current_year = 2016;
var birth_year = 1992;

document.write("Current Year:"+current_year);
document.write("<br>");

document.write("Birth Year:"+birth_year);
document.write("<br>");

document.write("Your Age is:"+(2016-birth_year));
document.write("<br>");
document.write("<br>");

document.write("THE LIFE TIME SUPPLY CALCULATOR:")
 var fav_snack = "Choclate Chip";
 var age$ = 15;
 var maximum_age = 65;
 var amount_perday = 3;
 var for_age = "";

 document.write("<br>");
 document.write("You will need");
 document.write(for_age=(maximum_age-age$)+(for_age*amount_perday));
 document.write(fav_snack+"to last you until the ripe old age of"+maximum_age);
 document.write("<br>");
 document.write("<br>");

 // Chapter06:MATH EXPRESSIONS:-

 var a =10;
document.write("RESULT:")
document.write("<br>");

 document.write("The value of a is"+a);
 document.write("<br>");
 document.write("<br>");
 document.write("<br>");

 document.write("The value of ++a is:"+ ++a);
 document.write("<br>");
 document.write("Now the value of a is:"+ a);
 document.write("<br>");
 document.write("<br>");
 
 document.write("The value of a++ is:"+ a++);
 document.write("<br>");
 document.write("Now the value of a is:"+ a);
 document.write("<br>");
 document.write("<br>");

 document.write("The value of --a is:"+ --a);
 document.write("<br>");
 document.write("Now the value of a is:"+ a);
 document.write("<br>");
 document.write("<br>");
 
 document.write("The value of a-- is:"+ a--);
 document.write("<br>");
 document.write("Now the value of a is:"+ a);
 document.write("<br>");
 document.write("<br>");
 
 var a = 2;
 var b = 1; 
 var result = --a - --b + ++b + b--;

 document.write(--a);
 document.write("<br>");

 document.write(--a - --b);
 document.write("<br>");

 document.write(--a - --b + ++b);
 document.write("<br>");

 document.write(--a - --b + ++b + b--);
 document.write("<br>");

document.write("a is"+a);
document.write("<br>");

document.write("b is"+ b);
document.write("<br>");

document.write("result is"+ result);
document.write("<br>");

// Chapter07:USER INPUT & CONDITIONAL STATEMENT:-
  
var user = prompt("Enter Karachi")

if(user == "Karachi"){
    alert("Welcome to City of Lights")
}
else{
    alert("Enter Karachi for Message")
}


var gender = prompt("Input Your Gender");

if (gender == "male"){
    alert("Good Morning Sir")
}
else{
    if(gender == "female"){
        alert("Good Morning Ma'am")
    }
    else{
    alert("Input correct gender")
    }
}

var traffic_signal_color = prompt("Enter Signal Color");

if(traffic_signal_color == "Red"){
    alert("Must Stop")
}
if(traffic_signal_color == "Yellow"){
    alert("Ready to move")
}
if(traffic_signal_color == "Green"){
    alert("Move now")
}

var car_fuel = prompt("Input Remaining Fuel")

if(car_fuel == "0.25litres"){
    alert("Please refill the fuel in your car")
}else{
    alert("Don't Refill the fuel")
}


var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
else{
    alert(" Message would not be displayed")
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert(" Message would not be displayed")
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else{
    alert(" Message would not be displayed")
}
if (c === 13){
    alert("condition 2 is true");
}
else{
    alert(" Message would not be displayed")
}
if (++c < 14){
    alert("condition 3 is true");
}
else{
    alert(" Message would not be displayed")
}
if(c === 14){
    alert("condition 4 is true");
}
else{
    alert(" Message would not be displayed")
}

var material_cost = 20000;
var labor_cost = 2000;
var total_cost = labor_cost+material_cost;

if(total_cost == labor_cost+material_cost){
    alert("The Cost Equals");
}
document.write("<br>");
document.write("<br>");
document.write("MARKS SHEET:");
document.write("<br>");

var eng_marks = +prompt("Enter English Marks");
var maths_marks = +prompt("Enter Maths Marks");
var urdu_marks = +prompt("Enter Urdu Marks");
var total_no = eng_marks + maths_marks + urdu_marks;
var total_marks$ = 300;
var per = 100;

document.write("<br>");
document.write(eng_marks);
document.write("<br>");

document.write(maths_marks);
document.write("<br>");

document.write(urdu_marks);
document.write("<br>");

document.write(total_no);
document.write("<br>");

document.write("Total Marks:"+total_marks$);
document.write("<br>");
document.write("Marks Obtained:"+total_no);
document.write("<br>");

document.write("Percentage:"+total_no/total_marks$*100+"%");
document.write("<br>");

if(per => 80){
    document.write("Grade A-one");
    document.write("<br>");
    document.write("Remark:Excellent");
}
else if(per => 70){
    document.write("Grade A");
    document.write("<br>");
    document.write("Remark:Good");
}
else if(per => 60){
    document.write("Grade B");
    document.write("<br>");
    document.write("Remark:You need to improve");
}
else if(per < 60){
    document.write("Grade Fail")
    document.write("<br>");
    document.write("Remark:Sorry");
}
document.write("<br>");
document.write("<br>");

document.write("GUESS GAME:");
document.write("<br>");

var secret_number = 7;
var guess_number = prompt("Guess the Secret Number");

if(guess_number == secret_number){
     alert("Bingo! Correct Answer");
}
else if(guess_number == secret_number+1){
    alert("CLose enough to the correct answer");
}
else{
    alert("Bad Luck");
}

var divisible_no = prompt("Input Any Number here!")

if(divisible_no % 3 == 0){
    alert("This No. Is Divisible by 3");
}
else{
    alert("This No. is not Divisible by 3");
}


var T = prompt("Input Temperature");

if(T > 40){
    alert("It is too hot outside.");
}
if(T > 30){
    alert("The Weather today is Normal.");
}
if(T > 20){
    alert("Today’s Weather is cool.");
}
if(T > 10){
    alert("OMG! Today’s Weather is cool.");
}
else{
    alert("Plzz! Input Correct Temperature");
}

var number1 = +prompt("Enter 1st value");
var number2 = +prompt("Enter 2nd value");
var operator = prompt("Enter Operator","+, -, * or /");

if(operator == "+"){
    alert(number1+number2);
}else if(operator == "-"){
    alert(number1 - number2);
}else if(operator == "*"){
    alert(number1 * number2)
}else if(operator == "/"){
    alert(number1/number2)
}
else{
    alert("Input Correct Operators");
}

// Chapter12:IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS :-

var vowels = prompt("Input Vowels");

if(vowels == "a"){
    alert("True")
}else if(vowels == "e"){
    alert("True")
}else if(vowels == "i"){
    alert("True")
}else if(vowels == "o"){
    alert("True")
}else if(vowels == "u"){
    alert("True")
}else{
    alert("False")
}

var password = +prompt("Enter Your Password");
var pass1 = ("pass1234");
var pass2 = ("1234pass");

if(password === pass1 && pass2 ){
    alert("Correct! The password you entered matches the original password")
}else{
    alert("Incorrect Password");
}

var hour = 13;

if (hour <= 12) {
alert = ("Good day");
}else{
alert = ("Good evening");
}

// Chapter14:ARRAYS :-

var strings_array = ["abc"];
var numbers_array = [1];
var boolean_array = [true];
var mixed_array = ["aa", 2, false];

var qualification = [" SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<br>");
document.write("QUALIFCATIONS:");
document.write("<br>");

document.write("1:"+ qualification[0]);
document.write("<br>");

document.write("2:"+ qualification[1]);
document.write("<br>");

document.write("3:"+ qualification[2]);
document.write("<br>");

document.write("4:"+ qualification[3]);
document.write("<br>");

document.write("5:"+ qualification[4]);
document.write("<br>");

document.write("5:"+ qualification[5]);
document.write("<br>");

document.write("7:"+ qualification[6]);
document.write("<br>");

document.write("8:"+ qualification[7]);
document.write("<br>");
document.write("<br>");

var name1 = ["Michael"];
var name2 = ["Jhonny"];
var name3 = ["Tony"];

var score1 = [320];
var score2 = [230];
var score3 = [480];
var total_score = [500];    

document.write("Score of" +" "+[name1]+" " +"is"+ " "+ score2+ "  "+"Percentage"+ " "+ [score1]/[total_score]*100+"%");
document.write("<br>");

document.write("Score of" +" "+[name2]+" " +"is"+ " "+ score2+ "  "+"Percentage"+ " "+ [score2]/[total_score]*100+"%");
document.write("<br>");

document.write("Score of" +" "+[name3]+" " +"is"+ " "+ score2+ "  "+"Percentage"+ " "+ [score3]/[total_score]*100+"%");
document.write("<br>");
document.write("<br>");

var color = ["yellow","pink","orange","purple","black"];
document.write(color[0]);
document.write("<br>");

document.write(color[1]);
document.write("<br>");

document.write(color[2]);
document.write("<br>");

document.write(color[3]);
document.write("<br>");

document.write(color[4]);
document.write("<br>");

color.unshift(prompt("What Color you want to add?"));
document.write(color);

document.write("<br>");

color.unshift(prompt("2nd Color you want to add"));
document.write(color);
document.write("<br>");

color.unshift(prompt("3rd Color you want to add"));
document.write(color);

document.write("<br>");
color.shift();
document.write(color);

document.write("<br>");
color.pop();
document.write(color);

// Chapter17:ARRAYS AND LOOP :-

for(var i = 1; i<=10; i++){
    document.write(i);
}
document.write("<br>");
document.write("<br>");

var num = +prompt("Enter an Integer");
var range = +prompt("Enter a Range");

for(i = 1; i<= range; i++){
    console.log(i*num);
}

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery What do you want to order?");

for(var i = 0; i <= bakery; i++){
     if(search[i] == bakery[i]){
        alert(search[i]+" "+ "is availabe at our bakery")
     }
     else{
        alert("We are soory"+" "+search+"is not available in our bakery")
     }
}