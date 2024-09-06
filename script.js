// alert('Hello');
// alert('world');
// alert(3 +
//     1
// + 2);

// alert("Hello")
// [1, 2].forEach(alert);

// alert("some code");
// //"use strict" below is ignored it must be at the top

// "use strict";

// 
// 'use strict';
// let message;
// message ='Hello'; //store the string hello in the variable named message

// alert(message)

//we can also declare mutiple variables at once.
// let user ='John', age = 25, message = 'Hello';

// let message ;

// message = 'Hello';

// message ='world';

// alert(message);

// let hello = 'hello world!';
// let message;

// message = hello;
// console.log(hello);
// console.log(message);

//variable must only contain letters digit $ _ 
//varibles must not start with a digit 


// //valid valriable name 
// let userName;
// let test123;
// let $ = 1;
// let _ = 2;
// alert($ + _);

//invalid variable name
// let 1a;        //begins with a digit 
// let my-name;   //' - ' cannot be used 


//javascript is case sensitive aaple and APPLE are treated as different variables;

//reserved words cannot be used as varible name 


//let num;
//num =5;
//alert(num);

// const myBirthday = '18.04.2000';
// myBirthday = '01.01.2001';     //error: cannot re-assign a const variable 

// const   COLOR_RED = '#F00';
// const   COLOR_GREEN = '#0F0';
// const   COLOR_BLUE = '#00F';
// const   COLOR_ORANGE = '#FF7F00';

// let color = COLOR_ORANGE;
// alert(color);

// let admin ="john";
// let name;

// name = admin;
// alert(name)

//let ourPlanetName ='Earth';
//currentUserName ='John';

//---------------------------------------------------------------dats types-------------------------
//a variable can at time be int and be string for example

// let message = 'hello';
// console.log(message);
// message = 123456;
// console.log(message);

// let n = 123;
// n = 12.345;

// let n =123;
// n = 12.345;


//alert("not a number" / 2);

//alert(NaN +1);
// alert(3 * NaN);

// alert("not a number" / 2 -1);

//-----------------------big int------------------

// console.log(900719925470991 + 1);
// console.log(900719925470991 + 2); 

// const bigInt = 123456789012345678901234567890n;

// let str ="hello";
// let str2='sigle qoute';
// let phrase =`can embed another ${str}`; 

// let namme = "John";

// //alert(`hello, ${namme}!`);

// alert(`the result is ${1 + 2}`);

// alert("the result is ${1 + 2}")

// let nameFieldChecked = true; //yes, the name feild is checked

// let ageFieldChecked = false //no the age field is not checked

// let isGreater = 4 > 1;
// alert(isGreater);

//let age = null;

// let age;

// alert(age);

// let age =100;

// age =undefined;

// alert(age);

// console.log(`type of 0 is ${typeof 0}`);
// console.log(`type of 10n is ${typeof 10n}`);
// console.log(`type of true ${typeof true}`);
// console.log(`type of "foo" is ${typeof "foo"}`);

// hello 1
// hello name
// hello ilya

//interaction alert prompt 

//let  test = prompt("Test");

// let test = prompt("Test", '');

// let isBoss = confirm("Are you the boss?");

// alert( isBoss );

// let inputName = prompt("please enter your name:");
// alert(`your name is ${inputName}`);

//type conversions
// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// console.log("6" / 2);

// let str = "123";

// alert(typeof str);

// let num = Number(str);

// alert(typeof num );

// let age = Number("an arbitrary string instead of a number");
// alert(age);

// alert(Number(" 123 "));
// alert(Number("123z"));
// alert(Number(true));
// alert(Number(false));

// alert(Boolean(1));
// alert(Boolean(0));
//alert(Boolean("hello"));
//alert(Boolean ("") );

//alert( Boolean("") ); // false

//alert(Boolean("0"));  // anon-empty string is always true regardless of the value inside the string
//alert(Boolean(" ")); //space is also true

// let x = 1;
// x = -x;
// alert(x); //-1 unary negation was applied;


//let x = 1, y = 3;
//alert(y - x); 

// alert(5 % 2);
// alert(8 % 3);
// alert(8 % 4);

// alert(2 ** 2);
// alert(2 ** 3);
// alert(2 ** 4);

// alert(4 ** (1/2));   //squre root
// alert(8 ** (1/3));   //cubic root 

// let s = "my" + "string";
// alert(s);

// alert('1' + 2);
// alert(2 + '1');

// alert(2 + 2 + '1')

//alert('1' + 2 + 2);

//alert(1 + '2' + 1);

//alert(6 - '2');

//alert('6' / '2');

// let x = 1;
// console.log( +x );

// let y = -2;
// console.log( +y );

// console.log( +true );
// console.log( +"" );

// let apples ="2";
// let oranges ="3";

// alert(apples + oranges);

// let x = 2 * 2 + 1;
// alert( x ) ;

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert(a);
// alert(c);
//--------------------------------------------------------
// let a, b, c;

// a = b = c = 2 + 2;

// alert(a)
// alert(b)
// alert(c)

// c = 2 + 2;
// b = c;
// a = c;
// console.log(a);
// console.log(b);
// console.log(c);

// let n = 2;
// n = n + 5;
// n = n * 2;
// console.log(n)

// let n = 2;
// n *= 3 + 5;
// console.log(n)

// let counter = 2;
// counter ++ ;
// console.log(counter);

// let counter = 2;
// counter--;
// console.log(counter);

// let counter =1;
// let a = counter++;
// console.log(a);

// let counter =0;
// console.log(++counter);

// let counter = 0;
// console.log(counter++);
// console.log(counter);
// console.log(++counter);

// let counter = 1;
// console.log(2 * ++counter);

// let counter = 1;
// alert(2 * counter);
// counter++

//let a = (1 + 2, 3 + 4);
//a = 1 + 2, 3 + 4;
//console.log( a );


// for(a = 1, b = 3, c = a*b;a< 10;a++){
// }

// let a = 1, b = 1;
// let c = ++a; //2
// let d = b++; //1

// let a = 2;
// let x = 1 + (a *= 2);


// 1
// -1
//1
//2
//6
//9px
//$45
//2
//nan
//-9 5
//-14
//1
//nan
//-2

// let a = +prompt("first number?", 1);
// let b = +prompt("second number?", 2);
// alert(a + b)

//comparison
//alert( 2 > 1);
// alert( 2 == 1);
// alert( 2 != 1);

//let result = 5 > 4;
//console.log(result);

//console.log('A' < 'Z');
//alert('Glow' > 'Glee');
//alert('Bee' > 'Be');

//console.log('2' > 1);
//console.log('01' == 1);

//alert(0 == false);
//alert(''== false);

//console.log(0 === false);
//console.log(null === undefined );
//console.log(typeof null)
//console.log(typeof undefined);

//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);

//true
//false
//true
//true
//false
//false
//false

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) alert( 'You are right!' );

// let year = prompt('which year?','');
// if (year == 2015){
//     alert("that's correct");
//     alert("you're so smart");
// }

// if (0) {
// }

// let cond =(year == 2015);
// if(cond){
// }

// let year = prompt('In which yaer was the ECMAScxript specification published','');

// if(year == 2015){
//     alert('you guessed it right');
// }else{
//     alert('how can you be so wrong');
// }

// let year = prompt('In which yaer was the ECMAScxript specification published','');

// if(year < 2015){
//     alert('too early');
// }else if(year > 2015){
//     alert('Too late');
// }else{
//     alert('Exactly!');
// }

// let accessAllowed;
// let age = prompt('How old are y','');

// if(age > 18) {
//     accessAllowed = true;
// }else{
//     accessAllowed = false;
// }

// alert(accessAllowed);

//let  result = condition ? value1 : value2;

//let accessAllowed = (age > 18) ? true : false;

//let accessAllowed = age > 18;

// let age = prompt('age?' , 18);
// let message = (age < 3) ? 'Hi baby!':
//                (age <18) ? 'hello!' :
//                (age < 100)? 'Greetings':
//                'what an unusual age but good for you';

// alert(message);

// let name = prompt('what is the official name of javascript?','');
// let entry = (name == 'ECMAScript') ? "right" : "you dont know?";
// alert(entry)

// let num = prompt('enter any number','');
// let result = (num > 0) ?    1 :
//               (num == 0) ?  0 :
//                -1;
// alert(result)

//let result = (a + b < 4) ? 'below':'over';

// let message = (login == 'Employee') ? 'Hello':
//               (login == 'Director') ? 'Greetings':
//               (login == '') ? 'No login':
//               '';

// alert(true || true);  //true
// alert(false|| true ); //true
// alert(true || false );//true
// alert(false|| false); //false 

// if(1 || 0){    //true || false;
//     alert('truthy')
// }

// let hour = 12;
// let isWeekend = true;

// if(hour < 10 || hour > 18 || isWeekend){
//     console.log('the office is closed')
// }

// let firstName = "";
// let lastName = "";
// let nickName =""
// alert(firstName || lastName || nickName || "Anonymous")

// console.log(true && true )  //true
// console.log(false && true) //false
// console.log(true && false) //false
// console.log(false && false)//false

// let hour =11;
// let minute = 30;
// if(hour == 12 && minute == 30){
//     console.log('The time is 12:30');
// }else{
//      console.log("both condition should be true");
// }

//result = !value;  opposite of the value for eg:- if value is 1 reult will be 0

//alert(!true); //false
//alert(!0); // is 1 which means true
// !! id sometime used for converting a value to boolean type 

//alert(!!"non-empty string");
//alert(!! null);
          
//alert(null || 2 || undefined);

// alert( alert(1) || 2 || alert(3) ); 

//alert(1 && null && 2); //answer is null beacuse it is the first falsy value from  the list;

//alert(null || 2 && 3|| 4 );

// if(age >= 14 && age <= 90){

//     //somecode....
    
// }

// if(-1 || 0) alert ('first');        //-1
// if(-1 && 0) alert ('second');       //0
// if(null || -1 && 1) alert( 'third' );  //1

// let who =prompt('who is there','');

// if(who == '' || who == null){
//     console.log("canceled")
// }else if(who == "admin"){
//     let password = prompt('enter password','') 
//     if(password == '' || password == null){
//         console.log("canceled")
//     }else if(password == "TheMaster"){
//         console.log("welcome");
//     }else{
//         console.log("wrong password")
//     }
// }else{
//     console.log("i dont know")
// }
//---------------------------------------------------------------------------------------------------------------------
// let user ;

// alert(user ?? "Anonymous");


// let user = "John";
// alert(user ?? Anonymous);

// let firstName = null;
// let lastName = null;
// let nickName = "supercoder";
// alert(firstName ?? lastName ?? nickName?? "Anonymous")

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// alert(firstName ||lastName||nickName|| "Anonymous")

// let height = 0;

// console.log(height || 100);
// console.log(height ?? 100);

// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 50);
// console.log(area);
// let height=null;
// let width = null;

// let area = height ?? 100 * width ?? 50;
// console.log(area);

// let areaa = height ?? (100 * width) ?? 50;
// console.log(areaa);

//let x = 1 && 2 ?? 3; //error

// let height = 50;

// height = height ?? 100;
// console.log(height)

//-----------------------------------------------------------------------
//------------------loops:while and for----------------------------

// while (condition){

// }

// let i =0;
// while(i < 3){
//     console.log(i);
//     i++;
// }

// let i = 3;
// while(i){
//     console.log(i);
//     i--;
// }

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < 3);

// console.log("next");
// let n = 0;
// while(n < 3){
//     console.log(n);
//     n++;
// }

//for loops---------------------------------
// for(begin; condition; step){      //here i is inline variable
// }

// let i = 0;
// for(; i < 3;i++){
//     console.log(i);
// }

// let i =0;
// for(;i < 3;){
//     console.log(i++);
// }

// let sum = 0;

// while(true) {
//     let value =+ prompt("Enter a number",'');

//     if(!value) break;

//     sum += value;
// }
// alert('Sum:' +sum);

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue;
//     console.log(i)
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2){
//         alert(i);
//     }
// }

//(i < 5) ? alert(i) : continue ;   //sytax error;

// outer: for (let i =0; i < 3; i++) {
//     for(let j =0; j < 3; j++){
//         let input =prompt(`value at cords(${i}, ${j})`,'');
//          console.log(input)
//         if(!input) break outer;  //!input = 0
//     }
// }

// let i = 3;

// while(i) {
//     console.log( i-- );
// }

// let i = 0;
// while(++i < 5) console.log (i);


// console.log("next please")

// let j = 0;
// while(j++ < 5) console.log (j);

// for(let i = 0; i < 5; ++i) console.log(i); //0 1 2 3 4 
// console.log('next');

// for(let j = 0; j < 5; j++ ) console.log(j) // 0 1 2 3 4

// let i = 0;
// while(i < 3){
//     console.log(`number ${i}!`);
//     i++;
// }

// let num;

// do{
//     num = prompt("Enter a number greater than 100?", 0);
// }while(num <= 100 && num);

// let n = 10;

// nextPrime:
// for(let i = 2; i <= n; i++){
//     for(let j = 2; j < i ; j++){
//         if(i % j == 0) continue nextPrime;
//     }
//     console.log(i);
// }


// switch(x){
//     case 'value1':
        

//     case 'value2':


//     default:

// }

// let a = 2 + 2;

// switch(a) {
//     case 3:
//         alert('Too small');
//         break;
//     case 4:
//         alert('Exactly');
//         break;
//     case 5:
//         alert('Too big');
//         break;
//     default:
//         alert("I don't know such values");
// }


// let a = 2 + 2;
//  switch (a) {
//     case 3:
//       console.log('Too small');
//     case 4:
//       console.log('Exactly');
//     case 2:
//       console.log('Too big');
//     default:
//       console.log("i don't know such values")
//}

// let a = "1";
// let b = 0 ;

// switch(+a) {
//     case b + 1:
//         alert("this runs, beacuse +a is 1, exactly equals b+1");
//         break;
    
//     default:
//         alert("this doesn't run");
// }
// 
// ---------------------------------------------------------swtch statement-----------
// let a = "3";

// switch(a){
//     case 4:
//         console.log('Right!');
//         break;
//     case 3:
//     case 5:
//         console.log('Wrong!');
//         console.log("why don't you take a math class?");
//         break;
//     default:
//         console.log('the result is really strange.Really.');
// }

// let arg = prompt("Enter a value?");
// switch(arg){
//     case '0':
//     case '1':
//         alert('One or   Zero');
//         break;

//     case '2':
//         alert('Two');
//         break;

//     case 3:
//         alert('Never executes!');
//         break;

//     default:
//         alert('An unknown value');
// }

// let browser;
// if (browser == 'Edge'){
//     console.log("you've got the Edge");
// }else if(browser == 'Chrome'||browser == 'FireFox'||browser == 'Safari' ||browser == 'Opera'){
//     console.log("Okay we support thses browsers too");
// }else{
//     console.log("We hope this page looks ok")
// }

// let a = +prompt('a?','');

// switch(a){
//     case 0:
//         console.log(0);
//         break;

//     case 1:
//         console.log(1);
//         break;

//     case 2:
//     case 3:
//         console.log('2,3');
//         break;
// }

// function showMessage() {
//     console.log('Hello everyone!');
// }
// showMessage();
// showMessage();

// function showMessage(){
//     let message = "Hello, I'm JavaScript!";
//     console.log(message);
// }
// showMessage();
//alert(message);

// let userName = 'John';

// function showMessage(){
//     userName = "Bob";
//     let message = "Hello, " + userName;
//     console.log(message);
// }

// console.log(userName );

// showMessage();

// console.log( userName );


// let userName = 'John';

// function showMessage() {
//     let userName = 'Bob';
//     let message = 'Hello, ' + userName;
//     console.log(message);
// }

// showMessage();
// console.log(userName)


// function showMessage(from, text){
//     console.log(from + ':' +text)
// }

// showMessage('Ann','Hello!');
// showMessage('Ann',"what's up?")

// function showMessage(from, text){
//     from = '*' +from+ '*';
//     console.log(from + ':' + text);
// }

// let from = "Ann";
// showMessage(from, "Hello");

// console.log( from );
// function showMessage(from, text = "no text given"){
//     alert(from + ":" +text);
// }

// showMessage("Ann");

//showMessage("Ann",undefined); //ann:no text given;

// function showMessage(from, text=anotherFunction()){
//     //anotherfunction() only executes if no text given
//     //its result becomes the value of text. 
// }

// function showMessage(from, Text){
//     if(text === undefined){
//         text = 'no text given';
//     }
//     alert(from = ':'+ text); 
// }

// function showMessage(from, text) {

//     text = text || 'no text given'

// }

// function showMessage(text) {
//     if(text === undefined){
//         text = 'empty message';
//     }
//     console.log(text);
// }
// showMessage();

// function showMessage(text) {
//     //if text is undefined or otherwise falsy, set it to 'empty'
//     text = text || 'empty';
// }

//returning a value

// function sum(a, b){
//     return a + b;
// }

// let result = sum(1, 2);
// console.log( result );

// function checkAge(age) {
//     if(age >= 18){
//         return true;
//     }else {
//         return confirm('Do you have permission from your parents?')
//     }
// }

//  let age = prompt('How old are you?',18);

// if(checkAge(age)){
//     alert('Access granted');
// }else{
//     alert('access denied');
// }
// function showMovie(age) {
//     if(!checkAge(age)){
//         return;
//     }

//     alert("Showing you the movie");
// }

//  function doNothing(){/* empty */}

//  alert(doNothing()=== undefined);

//  function doNothing() {
//     return;
//  }

//  alert(doNothing() === undefined );

// function showPrimes(n){
//     nextPrimes: for (let i = 2; i < n; i++){

//         for(let j = 2; j < i; j++){
//             if(i % j == 0) continue nextPrimes;
//         }

//         console.log( i );
//     }
// }

// showPrimes()

// function showPrimes(n) {

//     for(let i = 2; i < n; i++){
//         if(!isPrime(i)) continue;

//         alert(i);
//     }
// }

// function isPrime(n) {
//     for(let i =2; i < n; i++){
//         if(!isPrime(i)) continue;

//         console.log(i);
//     }
// }

// function isPrime(n){

//     for(let i = 2;i < n; i++){

//         if(n % i == 0) return false;
//     }
//     return true;
// }

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }else {
//         return confirm('did your parents allow?')
//     }
// }

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }else {
//         return confirm('Did parents allow you?')
//     }
// }


// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
//   } else {
//     alert( pow(x, n) );
  

//   }

// let age = prompt("what is your age?", 18);
// let welcome

// if(age < 18){
//     welcome = function() {
//         console.log("Hello!");
//     };
// }else {
//     welcome = function(){
//         alert("Greetings")
//     };
// }

// welcome();   

//Arrowfunctions

// let func = (args1, args2,.............,argsN)

// function sum(a, b) {
//     return a + b; 
// }

// let sum = (a, b) => a + b;

//let sum = (a, b) => a + b;
//alert( sum(1, 2) );

// let double = n => n * 2;

// alert(double(3));

// let sayHi = () => alert("Hello!");
// sayHi(); 

// let age = prompt("what is your age?", 18);

// let welcome = (age < 18) ?
// () => alert('hello'):
// () => alert('Greetings');

//welcome();

// let ask = (question, yes, no) => {
//     (confirm(question)) ? yes() : no()
// }

// ask(
//     "do you agree",
//     () => {alert("you agreed.");},
//     () => {alert("you canceled the execution.");}
// );

// alert('Hello'); alert('world');

// alert('Hello');
// alert('World');

// alert("There will be an error after this message ");
// [1, 2].array.forEach(alert);

//function f() {
    //no semicolon needed after function declaration;
//}

// let x = 5;
// x = "john";

// typeof null == "object"
// typeof function() {} == "function";


//let x = 5;
//x = "John";
//typeof null ==  "object";
//typeof function(){} == "function";

// let userName = prompt("your name?","Alice");
// let isTeaWanted = confirm("Do you want some tea?")

// alert("visitor:" +userName);
// alert("Tea wanted:" +isTeaWanted);

// alert('1' + 2);
// alert(1 + '2');

//let a = 6;
//a *= 12
//console.log(a)
//a += 12
//console.log(a)
//console.log(1 + 2);
// function hello(name){
//     let phrase = 'Hello, ${name}!';
//     say(phrase);
// }

// function say(phrase){
//     alert (`**${phrase}**`);
// }

// function hello(name){ name = "John"
//      let phrase = `Hello, ${name}!`;
//      say(phrase);
//  }

//  function say(phrase){
//     alert(`** ${phrase} **`);
//  }

//  say()

// for(let i = 0; i < 5; i++) {
//     console.log("value,",i);
// }

// function pow(x, n) {
//     let result = 1

//     for (let i = 0; i < n; i++){
//         result *= x;
//     }

//    return result;
// }
 
// let x = prompt("x?" , "");
// let n = prompt("n?", "");

// if (n < 0) {
//     alert(`power ${n} is not supported, 
//         please enter a non-negative integer number`);
// }else{
//     alert( pow(x, n) );
// }

// let str = `cocmdj jkfjiuicj jejijijc miwjirjij 
// jcidmdjjcijjc mkejcim dmcjidko mmoiedocijed kmejijr
// dmcj`


//a horizontal indents
// function pow(x, n){
//     if(n < 0){
//         alert("Negative 'n' not supported");
//     }else{
//         let result = 1;

//         for(let i = 0; i < n; i++){
//             result *= x;
//         }

//         return result;
//     }
// }

// function pow(x, n){
//     if (n < 0) {
//         alert("Negative 'n' not supported");
//         return;
//     }

//     let result = 1;

//     for (let i = 0; i < n; i++){
//         result *= x;
//     }

//     return result;
// }

// function createElement() {

// }

// function setHandler(elem){

// }

// function walkAround() {

// }

// let elem = createElement();
// setHandler(elem);
// walkAround();

//style guides

// function pow(x, n) {
//     let result = 1;

//     for (let i=0 ;i<n ; i++){

//         result*=x;
//     };
//   return result;
// };

// let x=pormpt("x?",''),n=prompt("n?",'')

// if (n<=0){
//     alert(`power ${n} is not supported,
//          please enter an integer number greater`);
// }else {
//     alert (pow(x, n))
// }

// function pow(x, n) {
   
// }

// if(i == i){
//     if(i<0){
//         return Math.max(0, len + i);
//     }else{
//         return i;
//     }
// }else {
//     return 0;
// }


// let user = authenticateUser();

// function render() {
//     let user = anotherValue();

//         //many lines.....

// }

// decribe("pow", function(){

//     it("raises to n-th power", function(){
//         assert.equal(pow(2, 3), 8);
//         assert.equal(pow(3, 4), 81);
//     });
// });


// describe("pow", function() {
//     it("2 raised to power 3 is 8", function(){
//         assert.equal(pow(2, 3), 8);
//     });

//     it("3 raised to power 4 is 81", function(){
//         assert.equal(pow(3, 4), 81);
//     });
// });

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *+ x;
//     }

//     return result;
// }

// describe("pow", function() {

//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} in the power 3 is ${expected}`, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }
  
//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
  
//   });

//how to create an object
//let user = new Object();
//let user = {}

//  let user = {
//      name:"John",
//      age: 30
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age)
// user.isAdmin = true;

// console.log(user)

// delete user.age;
// console.log(user)

// let user = {
//     name:"John",
//     age:30,
//     "likes birds":true
// };

// console.log(user)

// let user = {
//     name:"John",
//     age: 30,
// }

// user["likes birds"] = true;
// console.log(user)

// let key = "likes birds";
// user[key] = true;

// let user = {
//     name:"John",
//     age: 30
// }

// let key = prompt("what do you want know about the user?", "name");
// alert(user[key])

// let fruit = prompt("Which fruit to buy?","apple");

// let bag = {
//     [fruit]: 5,
// };

// alert( bag[fruit]);

// let fruit =  prompt("Which fruit to buy?", "apple");
// let bag = {}

// bag[fruit] = 5;

// let fruit = 'apple';
// let bag = {

//     [fruit + 'Computers'] : 5

// };

// console.log(bag.appleComputers)

// function makeUser(name, age) {
//     return{
//         name: name,
//         age: age,
//     };
// }

// let user = makeUser("John", 30);
// console.log(user.name);

// function makeUser(name, age) {
//     return{
//         name,
//         age,
//     };
// }

// let user = {
//     name,
//     age: 30
// };

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }

// alert( obj.for + obj.let + obj.return );

// let obj = {
//     0:"test"
// };

// console.log(obj["0"]); //test
// console.log(obj[0]);  //test

// let obj = {};
// obj.___proto__ = 5;
// console.log(obj.___proto__);

// let user = {};
// alert( user.noSuchProperty === undefined );

//"key" in Object

// let user = { name: "John", age: 30 };
// console.log("age" in user); // true, user.age exists
// console.log("blabla" in  user);  // false, user.blabla doesn't exist

// let user = {age: 30};

// let key = "age";

// console.log(key in user);

// let user = {name:"John" , age: 30};
// console.log("age" in user);
// console.log("blabla" in  user);
// let user = {age : 30};
// let key = "age";
// console.log( key in user );


// let obj = {
//     test: undefined
// };
// console.log( obj.test );  //it's undefined, so - no such property?
// console.log( "test" in  obj ); //true, the property does exist !

// for (key in object) {
//     // executes the body for each key among object properties
// }

// let user = {
//     name:"John",
//     age: 30,
//     isAdmin: true
// }

// for(let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// let codes = {
//     "49" : "Germany",
//     "41" : "Switzerland",
//     "44" : "Great Britain",
//     //......,
//     "1"  : "USA"
// };

// for (let code in codes) {
//     console.log(code);  //1, 41, 44, 49
// }

//console.log( String(Math.trunc(Number( "49" )))  );
//console.log( String(Math.trunc(Number( "+49")))  );
//console.log( String(Math.trunc(Number( "1.2")))  );

// let user = {
//     name:"John",
//     surname:"smith",
// };
// user.age = 25;

// for (let prop in user) {
//     console.log( prop );
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1" : "USA"
// };

// for(let code in codes) {
//     console.log( +code );
// }

// let user = {};
// user.name = "john";
// user.surname= "smith";
// console.log(user);
// user.name="pete";
// console.log(user);
// delete user.name;

// let schedule = {};
// function isEmpty(){
//     for(let key in obj) {
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum =  salaries.John + salaries.Ann + salaries.Pete;
// console.log(sum)

// let menu = {
//     width: 200,
//     height:300,
//     title: "My menu"
// }

// multiplyNumeric(menu);

// console.log(menu)

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if(typeof(obj[key])=='number') {
//             obj[key]*=2
//         }
//     }
// }

//object references and copying
// let message = "Hello!";
// let phrase  = message;

// let user = {
//    name:"John"
// };

// let user = {name: "John" };
// let admin = user;
// admin.name = 'Pete';
// console.log(user.name);

// let a = {};
// let b = a;
// console.log(a == b);
// console.log(a === b);

// let a = {};
// let b = {};
// console.log(a == b);

// const user = {
//     name:"John"
// };

// user.name = "pete";

// alert(user.name);

// let user = {
//     name:"John",
//     age: 30
// };

// let clone = {};

// for(let key in user) {
//     clone[key] = user[key];
// }

// clone.name = "Pete";
// console.log( user.name );

//Object.assign(dest, ...sources)

// let user = {name:"John"};

// Object.assign(user, {name:"Pete"});

// console.log(user.name);

// let user = { 
//     name:"John",
//     age: 30
//  };

//  let clone = Object.assign({}, user);

//  console.log(clone.name);
//  console.log(clone.age);

// let user = {
//     name:"John",
//     sizes:{
//         height:182,
//         width:50
//     }
// };
// alert( user.sizes.height );
//
// let user = {
//     name:"John",
//     sizes:{
//         height:182,
//         width:50
//     }
// };

// let clone = Object.assign({}, user);
// console.log(user.sizes === clone.sizes );

// user.sizes.width = 60;
// console.log(clone.sizes.width);

// let user = {
//     name:"John" ,
//     sizes:{
//         height: 182,
//         width: 50
//     }
// }

// let clone = structuredClone(user);
// console.log( user.sizes === clone.sizes );
// user.sizes.width = 60;
// console.log(clone.sizes.width);

// let user = {};
// user.me = user;
// let clone = structuredClone(user);
// alert(clone.me === clone);

// structuredClone({
//f:function() {}
//})


//-------------------------------------------------garbage collection----------------------------
//user = null;

// function marry(man, woman){
//     woman.husband = man;
//     man.wife = woman;


//     return {
//        father: man,
//        mother: woman
//     }
// }

// let family = marry({

//     name:"John"

// }, {

//     name:"Ann"

// });

//delete family.father;
//delete family.mother.husband;

//family = null;
//--------------------------object methods, "this"

// let user = {
//     name:"John",
//     age: 30
// }

// user.sayHi = function() {
//     alert("Hello!");
// };

// user.sayHi = function() {
//     alert("Hello!");
// }

// user.sayHi();

//  let user ={
//     name: "John",
//     age: 30,
    
//     sayHi() {
//         console.log(this.name);
//     }
// };

// user.sayHi()

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         console.log( user.name );
//     }
// };


// function sayHi() {
//     console.log(this.name)
// }

// let user = { name: "John" };
// let admin = {name: "Admin" };

// function sayHi() {
//     console.log( this.name );
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// admin['f']();

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };

// user.sayHi();

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// console.log(user.ref.name);


// function makeUser() {
//     return {
//         name:"John",
//         ref() {
//             return this;
//         }
//     };
// }

// let user = makeUser();

// console.log( user.ref().name );

// let calculator = {
//     sum(){
//         return this.a + this.b;
//     },

//     mul(){
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// }
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

//let ladder = {
//    step:0,

     //tis: console.log (this)
    // step: 0,
    //  up() {
    //    // console.log(this);
    //      this.step++;
    //      return this;
    //  },
    // down(){
    //     this.step--;
    //     return this;
    // },
    // showStep: function() {
    //     console.log(this.step);
    //     return this;
    // }
//};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

//ladder.up().up().down().showStep().down().showStep();
//ladder.up()

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User( "Jack" );
// let nuser = new User("nikitha");

//console.log(user.name);
//console.log(user.isAdmin);

// console.log(nuser.name);
// nuser.isAdmin = true;
// console.log(nuser.isAdmin);

// function User(name) {
//     if(!new.target){
//         return new User(name);
//     }

//     this.name = name;
// }

// let john = User("John");
// console.log(john.name);

// function BigUser() {
//     this.name ="John";

//     return{ name: "Godzilla" };
// }

// console.log( new BigUser().name );

// function SmallUser() {

//     this.name = "John";

//     return;
// }

// console.log( new SmallUser().name );

// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert('My name is:' + this.name );
//     };
// }

// let john =new User("John");

// john.sayHi();

// let obj = {};

// function A() { return obj;}
// function B() { return obj;}

// console.log( new A() == new B() );

// function Calculator() {
//     this.read=function() {
//        this.a = +prompt("a?", 0);
//        this.b = +prompt("b?",0);
//     },
//     this.sum=function() {
//         return this.a + this.b;

//     },
//     this.mul=function(){
//         return this.a *  this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum() );
// console.log("Mul=" + calculator.mul() );

// function Accumulator(startingValue){
//     this.value = startingValue;

//     this.read = function(){
//         this.value += +prompt("enter a value",0);
        
        
//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

//----------------------------------------optional chaining()

// let user  = {};

// console.log(user.address ? user.address.street: undefined);

// let user = null;
// let x = 0;

// user?.sayHi(x++); // "?." is checking if there is a value for user in this case its null so executio stops right there.


// console.log(x)

// let userAdmin = {
//     admin() {
//         alert("I am admin");
//     }
// };

// let userGuest = {};

// userAdmin.admin?.();

// userGuest.admin?.();


// let userAdmin = {
//     admin(){
//         alert("I am admin");
//     }
// };

// let userGuest = {};

// userAdmin.admin?.() 

// userGuest.admin?.()

// let key = "firstName";

// let user1 = {
//     firstName:"John"
// };

// let user2 = null;

// console.log( user1?.[key] );
// console.log( user2?.[key] );

// delete user?.name;   //delete user.name if user exists

// let user = null;
// user?.name = "John";
// ---------------------------------------symbol
//let id = symbol()

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 == id2);

//let id = Symbol("id");
//console.log(id)
//console.log(id.toString());
//console.log(id.description);

// let user = {
//     name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;

// console.log( user[id] );

//let id = Symbol("id");

//user[id] = "Their id value";

//let user = {name: "John"};
//user.id = "Our id value";
//user.id = "Their id value".

// let id = Symbol("id");
// let user = {
//     name:"John",
//     [id]:123
// }

// let id = Symbol("id");
// let user = {
//     name:"John",
//     age:30,
//     [id]:123
// };

// for (let key in user) console.log(key);

// console.log( "Direct: " +user[id] );

//let id =Symbol("id");
//let user = {
//    [id] : 123
//};

//let clone = Object.assign({}, user); //object .assign will copy 

//console.log( clone[id] );

//let id = Symbol.for("id");
//let idAgain = Symbol.for("id");
//console.log(id === idAgain );

// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// console.log( Symbol.keyFor(sym)  );
// console.log( Symbol.keyFor(sym2) );

//obj1 + obj2  ?
//obj1 - obj2  ?
//alert(obj)   ?

//console.log(obj);
//another[obj] = 123;

//let num = Number(obj);
//let n = +obj
//let delta = date1 - date2;

//let greater = user1 > user2;

//let total = obj1 + obj2;

//if (user == 1){ ... };

//obj[Symbol.toPrimitive] = function(hint) {};

//let user = {
   // name:"John",
   // money: 1000,

   // [Symbol.toPrimitive](hint) {
   //     alert(`hint: ${hint}`);
 //       return hint == "string" ? `{name:"${this.name}"}`:this.money;

 //   }
//};

//console.log(user);
//console.log(+user);

// let user = {name:"John"};
// console.log( user );
// console.log(user.valueOf() === user);

// let user = {
//     name:"John",
//     money:1000,
//     toString() {
//         return `{name: "${this.name}"}`;
//     },

//     valueOf() {
//         return this.money;
//     }
// };

// console.log(user);
// console.log(+user);
// console.log(user + 500);

// let user = {
//     name:"John",

//     toString() {
//         return this.name;
//     }
// };

// alert(user);
// alert(user + 500);

// let obj = {
//     toString() {
//         return "2";
//     }
// };

// alert(obj * 2); 

// let obj = {
//     toString() {
//         return "2"
//     }
// }
// console.log(obj + 2);

//--------------------------------Methods of primitives

//let john = {
//    name:"John",
//    sayHi: function() {
//        alert("Hi buddy");
//    }
//};

//john.sayHi();


// let str = "Hello";
// alert( str.toUpperCase() );  // HELLO

// let n = 1.23456;

// alert( n.toFixed(2) );

//console.log( typeof 0 );
//console.log( typeof new Number(0) );

// let zero = new Number(0);

// if(zero) {
//     console.log("Zero is truthy!?!");
// }mkfjfmkj

// let zero = new Number(0);

// if (zero) {
//   alert( "zero is truthy!?!" );
// }

//let num =NUmber("123");

// let str = "Hello";

// str.test = 5;

// console.log(str.test);

//-----------------------more ways to write a number
// let billion = 1e9;

// console.log(7.3e9);

// 1e3 === 1 * 1000; //e3 means * 1000;
// 1.23e6 === 1.23 * 1000000  //e6 means * 1000000;
 

// //let mcs = 0.000001;
// let mcs = 1e-6; //five zeroes to the left from 1;

// 1e-3 === 1 / 1000;//0.001;

// 1.23e-6 === 1.23 /100000;//0.00000123

// 1234e-2 === 1234 / 100; //12.34, decimal point moves 2 times;

// console.log( 0xff ); //255
// console.log( 0xFF ); //255 (the same, case doesn't matter)


// let a = 0b11111111;//binary form of 255
// let b = 0o377; //octal from of 255

// console.log( a == b ); //true, the same number 255 at both sides;

// let num = 255;

// console.log( num.toString(16) ); //ff  convert the num to hexadecimal
// //console.log( num.toString(2) );  // 11111111  convert the sum to binary
// console.log( 123456..toString(36) ); //2n9c //

// console.log(Math.floor(3.6));  //rounds down
// console.log(Math.ceil(3.6));   //rounds up
// console.log(Math.round(3.6));  //rounds
// console.log(Math.trunc(3.6)); //removes the decimal part

// let num = 1.23456;
// console.log(Math.round(num *100)/100);

// let num = 12.34;
// console.log(num.toFixed(0));

// let num = 12.36;
// console.log(num.toFixed(1)); //12.4

// let num = 12.34;
// console.log(num.toFixed(10));


//--------------------------------imprecise calculations

//console.log(1e500);
//console.log(Math.round(0.1 + 0.2) == 0.3)
//console.log(Math.round(0.1 + 0.2))

//let num = 0.1 + 0.2
//console.log(num.toFixed(1) == 0.3)

//---------------------------------------------------------------
//console.log(0.1.toString(2));
//console.log(0.2.toString(2));
//console.log((0.1+0.2).toString(2));
// console.log( 0.1.toFixed(20) )
//let sum = 0.1 + 0.2;
//console.log( sum.toFixed(2) );
//console.log( (0.1 *10 + 0.2 * 10) / 10 );
//console.log((0.28 *100 + 0.14 * 100)/100);
//console.log(9999999999999999)
//console.log( isNaN(NaN) );
//console.log( isNaN( "str" ) );
//console.log( isNaN(23))

// console.log( isFinite("15") );
// console.log( isFinite("str") );
// console.log( isFinite(Infinity) );
// console.log( isFinite(23) );

//let num = +prompt("enter a number");
//console.log( isFinite(num) );

//console.log( Number.isNaN(NaN) );
//console.log(Number.isNaN("str" / 2) );
//console.log( Number.isNaN("str") );
//console.log( isNaN("str") );
//console.log( +"100px");

//console.log( parseInt('100px') );
//console.log( parseFloat('12.5em') );
//console.log( parseInt('12.3'));
//console.log( parseFloat('12.3.4') );

//console.log(Math.random())   //for random number

//console.log( Math.max(3, 5, -10, 0, 1) );
//console.log( Math.min(1, 2) );

//console.log(Math.pow(2, 10) );

//let single = 'single-qouted';
//let double = 'double-qouted';

//function sum(a, b) {
//    return a + b;
//}

//console.log(`1 + 2 = ${sum(1, 2)}.`);

// let guestList = `Guests:
// * John
// * Pete
// * Mary
// `;
// console.log(guestList);

//let guestList = "Guests:
//* John";

//let guestList = "Guests:\n * John\n * pete\n * Mary";
//console.log(guestList);

//let str1 = "Hello\nWorld";
//let str2 = `Hello
//World`;
//console.log(str1 == str2);

//console.log(`The backlash: \\`)

//console.log('I\'m the walrus!');

//console.log( `My\n`.length );

//--------------accessing characters

//let str = `Hello`;

//console.log( str[0] );
//console.log( str.at(0) );

//console.log( str[str.length - 1] );
//console.log( str.at(-1) );

//for (let char of "Hello") {
//    console.log(char);  
//}

//let str = 'Hi';

//str[0] = 'h'; // error
//alert( str[0] ); // doesn't work

// let str = 'Hi';
// str = 'h' + str[1];
// console.log( str );

//console.log('Interface'.toUpperCase() );
//console.log('Interface'.toLowerCase() );
//console.log('Interface'[0].toLowerCase() );

//let str = 'Widget with id';
//console.log(str.indexOf('Widget') );
//console.log(str.indexOf('widget'));
//console.log( str.indexOf('Widget') ); //0
//console.log( str.indexOf("with") ); // 7
//console.log( str.indexOf("id") ); // 1 the first occurece of the id is at position 1 in the word "W'id'get"

//let str = 'As sly as a fox, as strong as an ox';
//let target = 'as';

//let pos = 0;
//while (true) {
//    let foundPos = str.indexOf(target, pos);
//    if (foundPos == -1) break;

//    console.log(`Found at ${foundPos}`);
//    pos = foundPos + 1;
//}

//let str = "As sly as a fox, as strong as an ox";
//let target = "as";

//let pos = -1;
//while ((pos = str.indexOf(target, pos + 1)) != -1) {
//    console.log(pos);
//}

//let str = "Widget with id";

//if (str.indexOf("Widget")) {
//    console.log("we found it");
//}

//console.log("Widget with id".includes("Widget") );
//console.log( "hello".includes("Bye") );
//console.log("my name is nikitha" .includes("my"));

//console.log("Widget".includes("id") );
//console.log("widget".includes("id", 3) );

//console.log("Widget".startsWith("Wid") );
//console.log("Widget".endsWith("get") );

//let str = "stringify";
//console.log(str.slice(0, 5) );
//console.log( str.slice(0, 1) );

//let str = "stringfy";
//console.log( str.slice(2) );


// let str = "stringify";

// console.log(str.substring(2, 6) );
// console.log(str. substring(6, 2))

//alert( 'Österreich' > 'Zealand' ); // true

//console.log('A' < 'Z')

//console.log("Z".codePointAt(0) );
//console.log("z".codePointAt(0) );
//console.log("z".codePointAt(0).toString(16) );

//console.log(String.fromCodePoint(90) );
//console.log(String.fromCodePoint(0x5a)); 

// function ucFirst(str){
    
//     str=str[0].toUpperCase+str.slice(1);
//     return str;
// }

// function truncate(str, maxlength) {
//     strLength = str.length;
//     if(strLength > maxlength) {
//       return   str.slice(0, maxlength-1) +'...';
//     }else {
//         return str;
//     }

//----------------------------arrays----
// let arr = new Array();
// let arr = [];


 //let fruits = ["Apple","Orange","Plum"];
// console.log( fruits[0] );
// console.log( fruits[1] );
// console.log( fruits[2] );


//we can replace an element
//fruits[2] = 'Pear';
//fruits[3] = 'Lemon'
//console.log(fruits)

//we can find the length of the array
//console.log(fruits.length);

//let fruits = ['Apple','orange','plum'];
//console.log( fruits );


//array can store ay type of values
// let arr = ['Apple', {name:'John'}, true, function() { alert('hello'); } ]
// console.log( arr[1].name );
// arr[3]();

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum"
// ];

// let fruits = ["Apple", "Orange", "plum"];
// console.log( fruits[fruits.length-1] );

// let fruits = ["Apple", "orange", "Plum"];
// console.log( fruits.flat(-1) );

//let fruits = ["Apple", "Orange", "Pear"];
//console.log( fruits.pop() );
//console.log( fruits );

// let fruits = ["Apple"];
// fruits.push("Orange","Peach");
// fruits.unshift("Pineapple","Lemon");
// console.log( fruits );

//let fruits = ["Banana"]
//let arr = fruits;
//console.log(arr === fruits );
//arr.push("Pear");
//alert( fruits );

// let fruits = [];
// fruits[99999] = 5;
// fruits.age = 25

//push pop shift unshift
//fruits.shift();     //take 1 element from the start
//fruits.pop();       //take 1 element  from the end
//fruits.unshift();   //add 1 elemnt in the begining of the array
//fruits.push();      //add 1 element at the end of the array

// let fruits = ["Apple", "Orange", "Plum"];
// for (let fruit of fruits) {
//     console.log( fruit );
// }

//--------------------------multidimentional array
// let arr = [1, 2, 3];

// console.log( arr );
// console.log( String(arr) === '1,2,3')

// let arr = [1, 2, 3];
// console.log( [] + 1 );
// console.log( [1] + 1 );
// console.log( String(arr) === '1,2,3' )

// console.log( [] + 1 );
// console.log( [1] + 1 );
// console.log( [1,2] + 1);

//console.log( 0 == [] );
//console.log( '0'== [] );

//let arr = [item1, item2, item3];            //full case use 

//let arr2 = new Array(item1, item2, item3);  //rare case use only

//to loop over array
//for (let i=0; i<arr.length;i++)

// let fruits = ["Apple", "Pear", "Orange"];

// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// console.log( fruits.length );

// let styles =["Jazz","Blues"];
// styles.push("Rock-n-Roll");

// styles[Math.floor((styles.length - 1) / 2)] ="Classics";

// styles.shift();
// styles.unshift("Rap","Reggae");

// let arr = ["a","b"];
// arr.push(function(){
//     console.log(this)
// });
// console.log(arr)
// arr[2]();

// function sumInput() {
//     let numbers = [];

//     while (true) {
//         let value = prompt("A number please?",0);

//         if(value === ""||value===null||!isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum+= number;
//     }
//     return sum;
// }

// console.log( sumInput() );
//add/remove items from an array

//arr.push(...items)
//arr.pop()
//arr.shift()
//arr.unshift(...items)

// let arr = ["I","go","home"];
// delete arr[1];
// console.log( arr[1] );
// console.log( arr.length );

// let arr = ["I", "study","JavaScript"];

// arr.splice(1, 1);

// console.log( arr );

//let arr = ["I", "Study", "JavaScript","right","now"];
//arr.splice(0, 3, "Let's","dance");

//console.log( arr ) //now ["Let's", "dance","right", "now"]
//let arr = ["I","study","JavaScript","right","now"];
//let removed = arr.splice(0,2);
//console.log(removed);

//let arr = ["I","study","JavaScript"];

//arr.splice(2, 0, "complex" , "language");
 
//console.log( arr ); //"I","study","complex","language","JavaScript"

//let arr = [1, 2, 5];

//arr.splice(-1, 0, 3, 4);

//console.log(arr)

//let arr = ["t", "e", "s", "t"];

//console.log( arr.slice(1, 3) );  //e,s

//console.log( arr.slice(-2) );  //s, t

//arr.concat(args1, args2...)

// let arr = [1, 2]
// console.log(arr.concat([3,4]) ); //1,2,3,4
// console.log(arr.concat([3, 4], [5, 6]) ); 1,2,3,4,5,6
// console.log(arr.concat([3,4], 5, 6));  1,2,3,4,5,6

//let arr = [1, 2];

//let arrayLike = {
//    0:"something",
//    1:"else",
//    [Symbol.isConcatSpreadable]:true,
//    length:2
//};

//console.log( arr.concat(arrayLike) ) 

// Array.forEach(function(item, index, array){
// })


//["Bilbo","Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo","Gandalf","Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at ${index} in ${array}`);
// })

//------------------------searching in array
//indexOf/lastIndexOf and includes

//Array.indexOf(item, from) - looks for item starting from , and returns the index where it was found, otherwise -1.

//arr.includes(item, from)- looks for item starting from returns true if found


// let arr = [1, 0, false];

// console.log( arr.indexOf(0) );
// console.log( arr.indexOf(false));
// console.log( arr.indexOf(null) );

// console.log( arr.includes(1) );


// let fruits = ["Apple","Orange","Apple"];
// console.log(fruits.indexOf('Apple') ); //0(first Apple)
// console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

//find and findIndex/findLastIndex
// let result = arr.find(function(item, index, array) {
//     //if true if returned, item is returned and iteration is stopped
//     //for falsy scenario returns undefined
    
// });

// let users = [
//     {id:1, name:"John"},
//     {id:2, name:"Pete"},
//     {id:3, name:"Mary"}
// ];

// let user = users.find(item => item.id == 1);

// console.log(user.name);

// let users = [
//     {id: 1, name:"John"},
//     {id: 2, name:"Pete"},
//     {id: 3, name:"Mary"},
//     {id: 4, name:"John"}
// ];

// console.log(users.findIndex(user => user.name == 'John')); //0

// console.log(users.findLastIndex(user => user.name == 'John'));// 3



//filter
//let result = arr.filter(function (item, index, array))

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name:"Pete"},
//     {id: 3, name:"Mary"}
// ];

// let someUsers = users.filter(item => item.id < 3);

// console.log(someUsers.length);

// let result = arr.map(function(item, index, array)) {
// }


// let lengths = ["Bilbo","Gandalf","Nazgul"].map(item => item.length);
// console.log(lengths);

// let arr = [1, 2, 15 ];

// arr.sort();

// console.log(arr) // 1, 15, 2


// function compare(a, b) {
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b) return -1;
// }

// function compare(a, b) {

//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;

// }

// function  compareNumeric(a, b){
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1, 2, 15];

// arr.sort(compareNumeric);

// console.log(arr); //1, 2, 15

// [1, -2, 15, 2, 0, 8].sort(function(a, b){
//     alert(a + " <> " + b );
//     return a - b; 
// })

// let arr = [ 1, 2, 15 ];
// arr.sort(function(a, b) { return a - b; });
// console.log(arr);

// let countries = ['Österreich','Andorra','Vietnam'];
// alert( countries.sort( (a, b) => a > b ? 1 : -1) );  //here the result will present wrong since we have special letters.
// alert( countries.sort( (a, b) => a.localeCompare(b) ) );// we use this to correctly sort icluding the special characters.

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log( arr );

//--------------------split and join
// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//     console.log ( `A message to ${name}.` ); // A message to Bilbo (and other names)
// }

// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ' , 2); //we can limit the number of item 

// console.log(arr);

// let str = "test";
// console.log( str.split('') );

// let arr = ['Bilbo','Gandalf','Nazgul'];
// let str = arr.join(';');
// console.log( str );

//---------------------------reduce/reduceRight

//let value = arr.reduce(function(accumulator, item, index, array) {});

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result); //15

//------------------------typeofarray

// console.log(typeof {}); //true mormal typeof cannot distinguish btw array object
// console.log(typeof []); // true
 
// isArray
// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

// let army = {
//     minAge:18,
//     maxAge:27,                //an object called army where function is given to find they can join or not
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };

// let users = [
//    {age: 16},
//    {age: 20},                    //an array of users age
//    {age: 23},
//    {age: 30}
// ];

// //find users for who army.canJoin returns true 
// let soldiers = users.filter(army.canJoin, army);

// console.log(soldiers.length);  //2 only 2 person can join 
// console.log(soldiers[0].age);   //20
// console.log(soldiers[1].age);   //23

//we can use every to  compare arrays

// function arraysEqual(arr1, arr2){
//     return arr1.length ===  arr2.length && arr1.every((value, index) => value === arr2[index]);

// }

// console.log(arraysEqual([1, 2], [1, 2]));


// function camelize(str) {
//     return str
//           .split('-')
//           .map(
//             (word, index) => index == 0 ? word: word[0].toUpperCase() +word.slice(1)
//           )
//          .join('');
// }
//---------------------------------------------------------
// function filterRange(arr, a, b) {

//    let arr2 = [];

//     for ( let i=0; i<arr.length; i++){
       
//         if(arr[i]>=a && arr[i]<=b){
//           arr2.push(arr[i]);
//         }
//     };

//     return arr2;
// }
//------------------anotherway
// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b))
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr)

//-------------------------------------------------


// function filterRangeInPlace(arr, a, b){

//     for (let i = 0;i < arr.length; i++){
//         let val = arr[i];

//         if(val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

//let arr = [5, 3, 8, 1];

//filterRangeInPlace(arr, 1, 4);

//console( arr )

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b - a)

// console.log( arr )


// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML","Javascript","CSS"];
// let sorted = copySorted(arr);
// console.log( sorted );
// console.log( arr );

// function calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+" :(a, b) => a + b
//     };

//     this.calculate = function(str) {
//         a = +split[0],
//         op = split[1],
//         b = +split[2];

//         if(!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }

// let john = { name: "John", age: 25};
// let pete = { name: "Pete", age: 30};
// let mary = { name: "Mary", age: 28};

// let users = [john, pete, mary];

// let names = users.map(item => item.name)

// console.log(names);

// let john = { name: "John", surname:"Smith", id: 1 };
// let pete = { name: "Pete", surname:"Hunt", id: 2 };
// let mary = { name: "Mary", surname:"Key", id : 3};

// let users = [john, pete, mary];


// let usersMapped = users.map(user => ({
//     fullName:`${user.name} ${user.surname}`,
//     id:user.id
// }))

// console.log( usersMapped[0].id );
// console.log( usersMapped[0].fullName );

// let john = { name:"John", age: 25 };
// let pete = { name:"Pete", age: 30 };
// let mary = { name:"Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(arr) {
//      arr.sort((a,b) => a.age - b.age);
// }

//console.log(Math.random()- 0.5);

// function shuffle(array) {
//     array.sort(() => Math.random() -0.5);
// }

// let count = {
//     '123':0,
//     '132':0,
//     '213':0,
//     '231':0,
//     '321':0,
//     '312':0
// };

// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }

// function getAverageAge(arr) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length
// }


// let john = { name:"John", age: 25};
// let pete = { name:"Pete", age: 30};
// let mary = { name:"Mary", age: 29};

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) );

//==========================================================================================================
//iterables

// let range = {
//     from: 1,
//     to: 5
// };

// range[Symbol.iterator] = function() {
//     return{
//         current:this.from,
//         last:this.to,

//         next() {
//             if(this.current <= this.last){
//                 return{ done: false, value: this.current++};
//             }else{
//                 return{ done: true };
//             }
//         }
//     };
// };

// for(let num of range) {
//     console.log(num);
// }


// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if(this.current <= this.to) {
//             return{done: false, value:this.current++};
//         }else {
//             return{ done: true };
//         }
//     }
// };

// for (let num of range) {
//     console.log(num);
// }

// for(let char of "test") {
//     console.log(char);
// }

// let str = '𝒳😂'
// for (let char of str){
//     console.log( char );
// }

// let str = "Hello";

// let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if(result.done) break;
//     console.log(result.value);
// }

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// for(let item of arrayLike) {}

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// let arr = Array.from(arrayLike);
// console.log(arr.pop());

// let range = {
//     from: 1,
//     to: 5
// }

// let arr = Array.from(range);
// console.log(arr)

//Array.from(obj[, mapFn, thisArg])

// let arr = Array.from(range, num => num * num);
// console.log(arr)

// let str = '𝒳😂';

// splits str into array of characters
//let chars = Array.from(str);

//alert(chars[0]); // 𝒳
//alert(chars[1]); // 😂
//alert(chars.length); // 2

// let str = '𝒳😂';

// let chars = [];
// for(let char of str) {
//     chars.push(char);
// }

// console.log(chars);

// function slice(str, start, end) {
//     return Array.from(str).slice(start, end).join('');
// }

// let str = '𝒳😂𩷶';

// console.log( slice(str, 1, 3) );

// console.log( str.slice(1, 3) );

//---------------------------------------------map
//new.Map()-creates the map
//map.set(key, value)-stores the value by the key.
//map.get(key)-returns the value by the key, undefined if key doesn't exist in map.
//map.has(key)-returns true if the key exists, false otherwise.
//map.delete(key)-removes the element(the key/value pair) by the key.
//map.clear() - removes everything from the map
//map.size - returns the current element count.



// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log( map.get(1) );
// console.log( map.get('1') );

// console.log(map.size);

// let john = {name:"John"};
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// console.log( visitsCountMap.get(john) );

// let john = { name:"John" };
// let ben = { name:"Ben" };

// let visitsCountObj = {};

// visitsCountObj[ben] = 234;
// visitsCountObj[john] = 123;

// console.log( visitsCountObj["[object Object]"] );

// map.set('1', 'str1')
//    .set(1, 'num1')         //we can chain th calls;
//    .set(true, 'boot1');

//map.keys() - returns an iterable for keys,
//map.values() - returns a iterable for values,
//map.entries() - returns an iterable for entries [key, value], it's used by default in for of.


// let reciepeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// for (let vegetables of reciepeMap.keys() ) {
//     console.log(vegetables); //cucumber, tomatoes, onion
// }

// for(let amount of reciepeMap.values() ){
//     console.log(amount);
// }

// for(let entry of reciepeMap) {
//     console.log(entry);
// }

//recipeMap.forEach( (value, key , map) => {
//    console.log(`${key}:${value}`);
//});

// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bool1']
// ]);

// consnole.log( map.get('1') );

// let obj = {
//     name:"John",
//     age: 30
// };

// let map = new Map(Object.entries(obj));

// console.log( map.get( 'name' ) );


// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat',4] 
// ]);

// console.log(prices.orange);

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries());

// console.log(obj.orange)

//------------------------set

//new Set([iterable]) - creates the set and if an iterable object is provided copies values from it into the set
//set.add(value)-adds a value, returns the set itself.
//set.delete(value)-removes the value,if value existed at the moment of the call, otherwise false.
//set.has(value) - returns true if the value exists in the set, otherwise false.
//set.clear()-removes everything from the set.
//set.size - is the elements count.

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary); 

// //set only keeps unique values
// console.log( set.size )//3

// for (let user of set) {
//     console.log(user.name);  // John then Pete and Mary 
// }

// let set = new Set(["oranges","apples", "bananas"]);

// for(let value of set) console.log(value);

// set.forEach((value, valueAgain, set) => {
//    console.log(value);
//});

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare","krishna","Hare","Krishna","Krishna","krishna","Hare","Hare",":-o"
// ];

// console.log( unique(values) );

// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }

//     return Array.from(map.values());
// }

// let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"];

// console.log( aclean(arr) );

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys)

//----------weakMap and weakSet
// let john = { name: "John" };

// john = null;


// let john = { name:"John" };
// let array = [ john ];

// john = null;

// let john = { name: "john" };

// let map = new Map();
// map.set(john, "...");

// john = null;

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok");

// weakMap.set("test","Whoops"); //error "test" is not a object

// let john = { name: "John"};
// let weakMap = new WeakMap();

// john =null;

//WeakMap.set(john, "secret documents");

//WeakMap.set(john, "secret documents");

// let visitsCountMap = new Map();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let visitsCountMap = new WeakMap();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let chache = new Map();

// function process(obj) {
//     if(!caches.has(obj)){
//         let result =

//         cache.set(obj, result);
//         return result;
//     }

//     return chache.get(obj);
// }

//  let obj = {/*let's say we have an object*/ };

//  let result1 = process(obj);

//  let result2 = process(obj);

//  obj = null;

//  alert(chache.size);

// let john = { name: "John" };
// john = null;

//let john = { name: "John" };
//let array = [john];
//john = null;

// let john = { name: "John" };

// let map = new Map();
// map.set(john,"...");

// john = null;

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, "ok");
// weakMap.set("test","Whoops");

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null;

// WeakMap.set(john, "secret documents");


// let visitsCountMap = new Map();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let john = { name:"John" };
// countUser (john);
// john = null;

// let visitsCountMap = new WeakMap();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let chache = new Map();

// function process(obj) {
//     if (!caches.has(obj)) {
//         let result = obj;
//         chache.set(obj, result);
//         return result;
//     }

//     return caches.get(obj);
// }

//  let result1 = process(obj);

//  let result2 = process(obj);

//  obj = null;

//  console.log(cache.size)

// let visitedSet = new WeakSet();

// let john = { name:"John" };
// let pete = { name:"Mary" };
// let mary = { name:"Pete" };

// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);

// console.log(visitedSet.has(john));
// console.log(visitedSet.has(mary));
// john = null;


// let messages = [
//     {text:"Hello", from:"John"},
//     {text:"How goes?", from:"John"},
//     {text:"See you soon", from:"Alice"}
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(message[0]);

// console.log("Read message 0:" + readMessages.has(messages[0]));

// messages.shift();

// let isRead = Symbol("isRead");
// messsage[0][isRead] = true;

//---------------------------------------Object.keys, values, entries

// let users = {
//     name:"John",
//     age: 30
// };

// for(let value of Object.values(user)) {
//     console.log(value);
// }


// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };

// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// )

// console.log(doublePrices.meat);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(){
//     let sum = 0;
//     for(let salary of Object.values(salaries)){
//         sum+=salary;
//     }

//     return sum;
// }


// console.log(sumSalaries(salaries));



// function count(obj) {
//     return Object.keys(obj).length
// }


// let user = {
//     name: 'John',
//     age: 30
// };

// console.log( count(user) )


//-------------------------Destructuring assignment


// let arr = ["John","Smith"]

// let [firstName, surname] = arr;

// console.log(firstName);
// console.log(surname);


// let [firstName, surname] = "John Smith".split(' ');
// console.log(firstName);
// console.log(surname);
// let arr =  {}
// let firstName = arr[0];
// let surname = arr[1];
// //arr = "John Smith".split(' ')
// console.log(arr)

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);

// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');
// console.log(user.name);   //john
// console.log(user.surname);  //Smith

// let user = {
//     name:"John",
//     age: 30
// };

// for(let [key, value] of Object.entries(user)){
//     console.log(`${key}:${value}`);
// }

// let user = new Map();
// user.set("name","John");
// user.set("age","30");

// for(let [key, value] of user) {
//     console.log(`${key}:${value}`);
// }

// let guest = "Jane";
// let admin = "Pete";

// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`)

// let [name1, name2] = ["Julius","Caesar","Consul","of the Roman Republic"];

// console.log(name1);  //Julius
// console.log(name2);  //Caesar

// let [name1, name2, ...rest] = ["Julius","Ceasar","Consul","of the Roman Republic"];

// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest.length);

//let [name1, name2, ...titles] = ["Julius","Ceasar","Consul","of the Roman Republic"];
//console.log(titles)

// let [firstName, surname] = [];
// console.log(firstName);
// console.log(surname);

// let[name = "Guest", surname ="Anonymous"] = ["Julius"];
// console.log(name);
// console.log(surname);

//--------------------object destructuring

//let {var1, var2} = {var1:..., var2:... }

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {height, width, title} = options;

// console.log(title);
// console.log(width);
// console.log(height);

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {width: w, height: h, title} = options;

// console.log(title);
// console.log(w);
// console.log(h);

// let options = {
//     title: "Menu"
// }

// let {width = prompt("Width?"), title = prompt("title?")} = options;


// console.log(title);
// console.log(width);

// let options = {
//     title: "Menu"
// };

// let {width: w = 100, height: h = 200, title} = options;

// console.log(title);
// console.log(w);
// console.log(h);

// let options = {
//     title:"Menu",
//     width: 100,
//     height:200
// };

// let {title} = options

// console.log(title)

// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
// }

// let{title,...rest} = options;
// console.log(rest.height);
// console.log(rest.width);

//=======================================================================================================
// let title, width, height;
// {title, width, height} = {title:"Menu", width: 200 , height: 100}

// let title, width, height;

// ({title, width, height} = {title:"Menu", width: 200, height: 100});

// console.log(title)

//===================================================nested destructuring========

// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake","Donut"],
//     extra: true
// }

// let {
//     size:{
//         width,
//         height
//     },
//     items:[item1, item2],
//     title ="Menu"
// }=options;

// console.log(title);
// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);

// function showMenu(title = "Untitled", width = 200, height = 100, item = []){
//     //...
// }

// let options = {
//     title: "My menu",
//     items: ["Item1","item2"]
// };

// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     console.log(`${title} ${width} ${height}`);
//     console.log( items );
// }

// showMenu(options);

// function({
//     incomingProperty: varName = defaultValue
// })

// showMenu({});
// showMenu();

// function showMenu({title = "Menu", width = 100, height = 200}={}){
//    console.log( `${title} ${width} ${height}` )
// }

// showMenu();

// let {prop: varName = defaultValue,...rest} = object;

// let [item1 = defaultValue, item2,...rest] = array;

// let user ={
//     name:"John",
//     years: 30
// };

// let user = {name:"john", years: 30};

// let {name, years: age, isAdmin = false} = user;


// console.log( name );
// console.log( age );
// console.log( isAdmin );

// let salaries = {

//     "John" : 100,
//     "pete" : 300,
//     "Mary" : 250

// };

// function topSalary(salaries){
//     let maxSalary = 0;
//     let maxName = null;

//     for(const [name, salary] of Object.entries(salaries)) {
//         if(maxSalary < salary) {
//             maxSalary = salary;
//             maxName = name;
//         }
//     }

//     return maxName
// }

// console.log(topSalary(salaries))

//--------------------------------------------Date and time
// let now = new Date();
// console.log( now ); 


//let Jan01_1970 = new Date(0)
//console.log(Jan01_1970);

// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );

//let date = new Date("2017-01-26");
//console.log(date);

//let date = new  Date(2011, 0, 1, 2, 3, 4, 567);
//console.log( date );
 
//getFullYear()  get the year(4 digit)

//getMonth()  get the month, from 0 to 11

//getDate() get the day of month, from 1 to 31 

//getHours(), getMinutes, getSeconds(), getMilliseconds() gets the  corresponding time components

//getDay()  get the day of week, from 0(sunday) to 6(saturday)

// let date = new Date();

// console.log(date.getHours() );

// console.log(date.getUTCHours() );


//onsole.log(new Date().getTimezoneOffset() );

//setFullYear(year, [month], [date])
//setMonth(month, [date])
//setDate(date)
//setHours(hour, [min], [sec], [ms])
//setMinutes(min, [sec], [ms])
//setSeconds(sec, [ms])
//setMillieseconds(ms)
//setTime(millieseconds)


// let today = new Date();

// today.setHours(0);
// console.log(today);

// today.setHours(0, 0, 0, 0);
// console.log(today)

// let date = new Date(2013, 0, 32);
// console.log(date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// console.log( date )

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// console.log( date );

// let date = new Date(2016, 0, 2);

// date.setDate(1);
// console.log( date );

// date.setDate(0);
// console.log( date );

// let date = new Date();
// console.log(+date);
// console.log(date.getTime());

// let start = new Date();

// for(let i = 0; i < 100000; i++ ){
    
//     let doSomething = i * i * i;
// }

// let end = new Date();

// console.log(`The loop took ${end - start} ms`);

//date.now()

// let start = Date.now();

// for (let i = 0; i < 100000; i++){
//     let doSomething = i * i * i;
// }

// let end = Date.now();

// console.log(`The loop took${end-start}ms`);

//---------------------benchmarking

// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }


// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for(let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start ;

// }

// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
// }

// console.log('Time of diffSubtract:' +time1 );
// console.log('Time of diffGetTime: ' +time2 );


// bench(diffSubtract);
// bench(diffGetTime);

// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
// }

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log(ms);

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// console.log(date);

// let date = new Date(2012, 1, 20, 3, 12 )
// console.log(date)

//                  or

// let d2 = new Date("2012-02-20T03:12");
// console.log( d2 )

// function getWeekDay(){
//     let days = ['SU','MO','TU','WE','TH','FR','SA'];

//     return days[date.getDay()];
      
// }

// let date = new Date(2012, 0, 3);
// console.log(getWeekDay(date) );




// function getLocalDay(){
//     let day = date.getDay();
    
//     if(day == 0) {
//         day = 7;
//     }

//     return day;9
// }


// let date = new Date(2012, 0, 3);
// console.log(getLocalDay(Date));




// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//     date.setDate(date.getDate()-days);
//     return getDate()
// }

// console.log( getDateAgo(date, 1) );
// console.log( getDateAgo(date, 2)  );
// console.log( getDateAgo(date, 365) );


// function    getLastDayOfMonth(year, month) {
//     let date = new Date(year, month+1,0);
//     return date.getDate();
// }


// console.log( getLastDayOfMonth(2012, 0) );
// console.log( getLastDayOfMonth(2012, 1) );
// console.log( getLastDayOfMonth(2013, 1) );

// function getSecondsToday() {
//     let now = new Date();

//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let diff = now - today;
//     return Math.round(diff / 1000);
// }

// console.log( getSecondsToday() );

// function getSecondsToTomorrow(time) {
//     let now = new Date();

//     let tomorrow = new Date(now.getFullYear, now.getMonth(), now.getDate()+1);

//     let diff = tomorrow - now;
//     return Math.round(diff / 1000);

   
// }

// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//   let diff = new Date() - date;

//   if (diff < 1000){
//     return 'right now';
//   }

//   let sec = Math.floor(diff / 1000);

//   if(sec < 60) {
//     return sec + ' sec. ago';
//   }

//   let min = Math.floor(diff / 60000);
//   if(min <  60) {
//     return min + ' min. ago';
//   }

//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '0' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2));

//   return d.slice(0, 3).join('.') + ' ' +d.slice(3).join(':');
// }

// console.log( formatDate(new Date(new Date - 1)) );

// console.log( formatDate(new Date(new Date - 30 * 1000)) );

// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );

// console.log( formatDate(new Date(new Date - 86400 * 1000)) );

// let user = {
//     name:"John" ,
//     age: 30,
//     toString() {
//         return `{name: "${this.name}, age:${this.age}"}`;
//     }
// };

// console.log(user)

// let student = {
//     name:'John',
//     age: 30,
//     isAdmin: false,
//     courses:['html','css','js'],
//     spouse: null
// }

// let json =JSON.stringify(student);

// console.log(typeof json)

// console.log(json)

// console.log(JSON.stringify(1) );
// console.log(JSON.stringify('test') );
// console.log(JSON.stringify(true) );
// console.log(JSON.stringify([1, 2, 3]) );

// let user = {
//     sayHi() {
//         console.log("Hello");
//     },
//     [Symbol("id")]: 123,
//     something: undefined
// };

// console.log( JSON.stringify(user) );

// let meetup = {
//     title: "Conference",
//     room:{
//         number:23,
//         participants: ["john", "ann"]
//     }
// };

// console.log(JSON.stringify(meetup))

// let room = {
//     number: 23
// };

// let meetup = {
//     title:"Conference",
//     participants:["john","ann"]
// };

// meetup.place = room;
// room.occupiedBy = meetup;

// JSON.stringify(meetup);

//excluding and trasnforming 

// let room = {
//     number: 23
// }

// let meetup = {
//     title:"Conference",
//     participants:[{name:"John"}, {name:"Alice"}],
//     place: room
// }

// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, ['title','participants']) );

// let room = {
//     number: 23
// };

// let meetup = {
//     title:"Conference",
//     participants:[{name:"John"}, {name:"Alice"}],
//     place: room
// }

// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup,['title','participants','place','name','number']) );

// let room = {
//     number: 23
// };

// let meetup = {
//     title:"Conference",
//     participants:[{name:"John"},{name:"Alice"}],
//     place: room
// };

// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//    console.log(`${key}:${value}`);
//    return(key == 'occupiedBy') ? undefined : value;
// }));

// let user = {
//     name:"John",
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true
//     }
// };

// console.log(JSON.stringify(user, null, 2));

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
// };

// console.log(JSON.stringify(meetup) );
// let room = {
//     number:23,
//     toJSON() {
//         return this.number;
//     }
// };

// let meetup = {
//     title:"Conference",
//     room
// };

// console.log(JSON.stringify(room) ); // 23

// console.log( JSON.stringify(meetup) );

//let value = JSON.parse(str[, reviver]);

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);


// console.log( numbers[1] ); 

// let userData = '{"name":"John","age":35, "isAdmin":false, "friends":[0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log(user)
// console.log(user.friends[1] ); //1 

// what is the use and meaning of JSON.parse()

// const jsonString = '{"name":"Alice", "age":30, "city":"Wonderland"}';
// const jsObject = JSON.parse(jsonString);



// console.log(jsObject.name);
// console.log(jsObject.age);
// console.log(jsObject.city);

// const jsonString = '{"name":"Alice", "age":30, "city":"Wonderland"}';

// const jsObject = JSON.parse(jsonString, (key, value) => {
//     if(key === 'age'){
//         return value + 1;
//     }
//     return value;
// }); 

// console.log( jsObject.age );

// let json = `{
//    name:"John",
//    "surname":'Smith',
//    'isAdmin': false,
//    "birthday":new Date(2000, 2, 3),
// }`
// let str = `{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}`;

// let meetup = JSON.parse(str, function(key, value) {
//     if(key == 'date') return new Date(value);
//     return value;
// });

// console.log(meetup.date.getDate() );

// let schedule = `{
//   "meetups":[
//    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//    if(key == 'date') return new Date(value);
//    return value;
// });

// console.log(schedule.meetups[1].date.getDate() );


// let user = {
//     name:"John Smith",
//     age: 35
// };

// json = JSON.parse(JSON.stringify(user));

let room = {
    number: 23
};

let meetup = {
    title:"Conference",
    occupiedBy: [{name:"John"},{name:"Alice"}],
    place:room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value){
    return(key != "" && value == meetup) ? undefined : value;

}));

