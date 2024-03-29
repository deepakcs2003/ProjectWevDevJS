// Arithmetics operator
// let a = 11;
// let b = 23;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);
// console.log(a++); //11
// console.log(a); //12
// console.log(++a); //13

// comparison operator
// let a = 5;
// let b = 10;
// //equal to
// console.log(a == b);
// // greater than equal to
// console.log(b >= a);
// //greater than;
// console.log(5 > 4);
// console.log(5 != 5);
// console.log(4 != 3);
// let n = 5;
// let str = "5";
// console.log(n == str);
// console.log(typeof str);
// console.log(n === str);
// console.log(0 == '');
// console.log(null == undefined);
// let age = 23;
// if (age > 18) {

// }

// // conditaional statement
// console.log("after if statement");
// let age = 14;
// if (age >= 23) {
//     console.log("yes,you can vote");
// } else {
//     console.log("you can not vote");
// }
// console.log("after my if statement");
// let col = 'yellow';
// if (col === 'green') {
//     console.log("go");
// } else if (col === 'red') {
//     console.log("stop !");
// } else {
//     console.log("slow down");
// }
// let age = 14;
// if (age >= 23) {
//     console.lof("you can vote");
// } else if (age < 23) {
//     console.log("you con't vote");
// }

// // Q1) create a system to calculate the price of popcorn base on size of customer ast;
// // if size is 'XL',price is Rs.250;
// // if size is 'L', price is Rs.200;
// // if size is 'M',price is Rs.150;
// // if size if 'S',price is Rs.100;
// let size = 'S';
// if (size === 'XL') {
//     console.log(`the prize is  Rs.${250} `);
// } else if (size === 'L') {
//     console.log(`the prize is Rs. ${200} `);
// } else if (size === 'M') {
//     console.log(`the prize is Rs. ${150} `);
// } else {
//     console.log(`the price is  Rs. ${100} `);
// }


// //create the system that can define the grade of student;
// let marks = 23;
// if (marks >= 33) {
//     console.log("pass");
//     if (marks >= 80) {
//         console.log("the grade is 'O'");

//     } else {
//         console.log("the grade is 'A'");
//     }
// } else {
//     console.log("batter luck next time!");
// }

// // logical operator;
// //Q2)A "good string" is a string that start with the latter 'a' & has a lenght>3. write a programe to find if  a string is good or not;\
// // programe to find if a string is good or not;

// let str='ant';
// if(str[0]==='a' && str.length>3){
//     console.log('good string');
// }else{
//     console.log('bad string');
// } 
// let str=' ';
// if(str){
//     console.log("is is true");
// }else{
//     console.log("is is fasle");
// }
// let color="blue";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//         case "green":
//             console.log("go");
//             break;
//             case "yellow":
//                 console.log("slow down");
//                 break;
//                 default:
//                     console.log("light is broken");
// }


// // Q3) use to switch statement to print the day of the week using a number variable "day"  with value '1' to '7';
// // 1-monday;
// // 2-wednesday;

// let num=12;
// switch(num){
//     case 1:
//         console.log("monday");
//         break;
//         case 3:
//         console.log("wednesday");
//         break;
//         case 2:
//             console.log("tuesday");
//             break;
//             case 4:
//                 console.log("thursday");
//                 break;
//                 case 5:
//                     console.log("friday");
//                     break;
//                     case 6:
//                         console.log("saturday");
//                         break;
//                         case 7:
//                             console.log("sunday");
//                             break;
//                             default:
//                                 console.log("invalid number");
//


// alert and prompt;
// alert("something is wrong!");
// alert("this is simple alert!");
// console.log("this is simple message");
// console.error("this is error");
// console.warn("this is warning message");
//  let firstName = prompt("enter your name:");
//  console.log(firstName);
// let firstName=prompt("enter the firsName");
// let lastName=prompt("enter the lastName");
// let name="welcome"+" "+firstName+" "+lastName;
// alert(""+name+"");

// alert("this is wrong");
// console.warn("this is warning to you");
// console.error("this is error");
// console.log("this is my name");
// console.log("this is  mt name:deepak");
// console.error("this is error");
// to trim methods;
// let msg='  deepak  ';
// console.log(msg);
// console.log(msg.trim());
// let password=prompt("emter the password");
// let newpassword=password.trim();
// console.log(newpassword);
// console.log("password");
// let message='     deepak';
// console.log(message);
// let newmessage=message.trim(); 
// console.log(newmessage);
// // ToUpperCase And  toLowerCase;
// let str="Deepak Vishwakarma";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// // String methods with argument;
// let str='ilovecoding';
// console.log(str.indexOf("love"));
// console.log(str.indexOf("c"));
// console.log(str.indexOf("p"));
// console.log(str.indexOf("i"));

// //Methods chaining
// let str='   deepak';
// let newstr=str.trim();
// console.log(newstr);
// console.log(str);
// newstr=newstr.toUpperCase();
// console.log(newstr);
// let str='   deeepak';
// let newstr=str.trim().toUpperCase();
// console.log(newstr);
// newstr=str.toUpperCase().trim();
// console.log(newstr);

// // slice
// let str='deepakvishwakarma';
// console.log(str.slice(2, 4));
// console.log(str.slice(2));
// // replace and repeat;
//  let str='IloveCoding';
//  console.log(str);
//  let newstr=str.replace('love', 'do');
//  console.log(newstr);
//  console.log(newstr.replace("Coding","eating"));
//  console.log(newstr.replace("o","p"));
//  let  name ='deepak';
//  console.log(name.repeat(3)+" ");


// //practice;
// let msg="  help!  ";
// console.log(msg.trim().toUpperCase());
// let name="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.repeat(4));
// console.log(name.replace('l','t'));
// let newName=(name.replace("l","t"));
// console.log(newName)  ;
// console.log(newName.replace("l","t"));


// //Array;
// let std=["deepak","ashish","vikas"];
// console.log(std.length);
// console.log(std.join("\n"));
// console.groupCollapsed(std);
// console.log(std[0]);
// let nums =[1,2,3,4,5,5];
// console.log(nums.length);
// console.log(nums);
// let fruits=["mango","banana","apple"];
// console.log(fruits);

//practices;

// //loop
// //odd number
// let n=prompt("enter the number to find the odd");
// n=parseInt(n);
// for(let i=2;i<=n;i+=2){
//      console.log(i);
// }
// // even number
// console.log("backward");
// for(let i=n;i>=2;i-=2){
//     console.log(i);
// }
// //  multiple of number
// let a=prompt("this is table of:");
// a=parseInt(a);
// for(let i=1;i<=10;i++){
//     console.log(a*i);
// }

// //nested loop
// for(let i=0;i<=3;i++){
//     for(let j=0;j<=3;j++){
//         console.log(j);
//     }
// }

// // while loop
// let i=1;
// while(i<=5){
//     console.log(i++);
// }

// // favorite movies;
// let favorite='avatar';
// let guess;
// while((favorite!=guess)){
//     guess=prompt("guess the movies");
//     if(guess==favorite){
//         console.log("congratulations!");
//         break;
//     }
//     else if(guess=="quit"){
//         console.log("quit the game");
//         break;
//     }
//     else{
//         console.log("batter luck next time/");
//     }
// }

// // loop with array
// let fruit=['apple',"banana","litchi","orange","mango",];
// for(let i=0;i<fruit.length;i++){
//     console.log(i  ,    fruit[i]);
// }

// // nested loop with nested array;
// let heroes=[['ironman', "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(let i=0; i<heroes.length;i++) {
//     console.log(`list ${i}`);
//     for(let j=0;j<heroes[i].length;j++){
//          console.log(heroes[i][j]);
//     }
// }
// console.log(`this is :  ${2+1}`);

// // for  of loop

//  let fruit=['appple',"mango","banana","lichi","orange",];
//  for( fruits of fruit){
//     console.log(fruits);
//  }
//  for(char of 'deepak'){
//     console.log(char);
//  }

// let heroes=[['ironman', "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(list of heroes){
//     console.log(`list :  #${list}`);
//     for(hero of list){
//         console.log(hero);
//     }
// }

// // todo app;

// let todo=[];
// let req=prompt("please enter your request");
// while(true){
//     if(req=='quit'){
//         console.log("quiting app");
//         break;
//     }else if(req=='list'){
//         console.log('-------------------');
//         for(list of todo ){
//             console.log(list);
//         }
//         console.log("----------------------");

//     }else if(req=="add"){
//         let task=prompt("add you task")
//         todo.push(task);
//         console.log("task is added");
//     }else if(req=="remove"){
//         let taskidx=prompt("please enter the name of tatk to remove");
//         todo.splice(taskidx,1);
//     }
//     req=prompt("please enter your request");
// }

// //object literals
// const student ={
//     name: "deepak",
//     mark:8.68,
//     age:20,
//     city:"mumbai",
// }
// let delhi ={
//     latitude:"28.7041 N",
// longitude:"77.1025 E"
// }

// const item ={
//     price:100,
//     discount:50,
//     color:['red','pink']
// }
// // Q) create an object literals for the properties of thread/twitter post which includes
// // @username,
// //@content
// //@ likes
// // @ report
// // @tags
// const post={
//     username:"@deepak",
//     content:" #education",
//     like:190,
//     reposts:30,
//     tags:["@ashihs","@vikas","@subodh","@magan"]
// }

// // add and update 
// const student ={
//     name: "deepak",
//     mark:8.68,
//     age:20,
//     city:"mumbai",
// }

// //nested object

// const classInfo={
//     deepak:{
//         grade:"A+",
//         age:20,
//     },
//     ashish:{
//         grade:"A",
//         age:21
//     },
//     suraj:{
//         grade:"B",
//         age:22
//     }
// }


// // object of Array;
// const classInfo=[
//     {
//         name:"deepak",
//         grade:"A+",
//         city:"mumbai"

//     },
//     {
//         name:"vikas",
//         grade:"A",
//         city:"pune"
//     },
//     {
//      name:"suraj",
//      grade:"AAA",
//      city:"delhi"
//     }
// ]

// //math object
// // generate number in given range


// let n=prompt("enter the number range of number to geneerate the num");
// for(let i=1;i<=n;i++){
//      console.log(Math.floor(Math.random()*n)+1);
// }
// // Q) user enters a max number and then tries to  guess a random generated number to 1 to max;

// let user=prompt("guess the number beetween 1 to 10");
// user=parseInt(user);

// while(true){
//     let number=Math.floor(Math.random()*10)+1;
//     user=prompt("guess the number beetween 1 to 10");
//     if(number==user){
//         console.log("congratulation");
//         break;

//     }else if(user==-1){
//         console.log("you want to quit");
//         break;
//     }else{
//         console.log("try again");    
//     }
// }

// //function in java script 

// function hello(){
//     console.log("hello,I am Deepak!");
// }

// hello();
// hello();
// hello();
// hello();
// function Name(){
//     console.log("deepak");
// }
// Name();
// function print1Ton(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// print1Ton();
// function adult(){
//     let age=prompt("Enter the age ");
//     if(age>=18){
//         console.log("isAdult");
//     }else{
//         console.log("Not Adult");
//     }
// }
// adult();
// adult();

// // Q) Create a function that prints a poem

// function poem(){
//     console.log("lala lala lari chand ki kathori");
// }

// poem();

// // Q) create a function to roll a dice and always display the value of the dice(1 to 6);

// //first way
// function rollDice(){
//     for(let i=1;i<=6;i++){
//         console.log(i);
//     }
// }
// rollDice();

// // second way

// function rollDice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }

// rollDice();

// // function with arguments

// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3);
// sum(4,5);
// sum(4.23,43.2);

// function printInfo(name,age){
//     console.log(`name is: ${name}, age is :${age}`);
// }
// printInfo("deepak",20);
// printInfo("ashish",32);
// printInfo(14);

// // Q) calculate the average of 3 number;

// function calAvg(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);
// }
// calAvg(2,5,7);
// calAvg(3,3,3);
// calAvg(2,4,6);

// // Q) create a function that prints the multiplication table of a number

// function printTable(n){
//     for(let i=1;i<=10;i++){
//         console.log(i*n);
//     }
// }
//printTable(2);
// printTable(45);

// // return keyword

// function sum(a,b){
//     let val=a+b;
//     return val;
// }
// console.log(sum(2,3));
// console.log(sum(3,sum(2,3)));\


// // create a function that is return the sum of the number from 1 to n

// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
// sum+=i;
//     }
//     return sum;
// }
// console.log(sum(12));

// // create  a function that return the concatenation of  all the string in array;

// function  conArray(arr){
//     let word="";
//     for(let i=0;i<arr.length;i++){
//         word+=arr[i];
//     }
//     return word;
// }
// console.log(conArray(["deepak","asish","magan","vikas"]));

// // scope

// // function scope

// function calSum(a,b){
//     let sum=a+b;
//     return sum;
// }
// console.log(calSum(2,3));
// {
//     var a=19;
// 

// console.log(a);

// // lexical scope

// function outer(){
//     let x=12;
//     let y=34;
//     function inner(){
//         console.log(x);
//         let sum=100;
//         console.log(y);
//     }
//     //console.log(sum);
//     inner();
// }
// outer();

// // what will be the output;

// let greet="hello"; // global scope;
// function changeGreet(){
//     let greet="namaste";
//     console.log(greet);  // function scope;
//     function innerGreet(){
//         console.log(greet); // inner scope;
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();

// // function expression

// let sum= function(a,b){
//     return a+b;
// }
// console.log(sum(3,3));

//  //higher order  function

//  function multipleGreed(func,n){
//        for(let i=1;i<=n;i++){
//            func();
//        }
//  }
//  let greed=function (){
//     console.log("hello");
//  }
//  multipleGreed(greed,4);

// // return a function

// function oddEvenTest(request){
//     if(request=="odd"){
//         return function(n){
//             console.log((n%2!=0))
//         }
//     }else if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }
// let func=oddEvenTest("even");

// // methods;

// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// }

// // this keyword

// const student={
//     name:"deepak",
//     age:20,
//     math:90,
//     phy:76,
//     mach:87,
//     getAvg(){
//         console.log(this);
//         let avg=(this.math+this.phy+this.mach)/3;
//         console.log(avg);
//     }
// }
// function getAvg(){
//     console.log(this);
// }

// // try and catch 

// console.log("deepak");
// console.log("ashish");
// try{
// console.log(a);
// }catch(err){
//     console.log("error is detected");
//     console.log(err);
// }

// console.log("hello1");
// console.log("hello2");

// // miscellaneous funstion

// // Arrow function

// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const cube=n=>{
//     return n*n*n;
// }
// let c=cube(4555234234);
// console.log(c);
// const pow=(a,b)=>{
//     return a**b;
// }

// // implicit return

// const mul=(a,b)=>(
//     a*b
// )
// const pow=(a,b)=>a**b

// // settimeout function 

// console.log("hii bondu!");
// setTimeout(()=>{
//     console.log("deepak is here")}
// ,4000);
// console.log("welcome deepak !!");

// // setInterval function

//  let id=setInterval(() => {console.log("hii deaapk")}, 2000);
// console.log("wait");
// clearInterval(id);

// // this keyword in arrow function

// let student={
//     name: "deepak",
//     age:20,
//     grade:"A",
//     prop:this,
//      getName(){
//         console.log(this);
//         console.log(this.name);
//     },
//     getAge:()=>{
//         console.log(this);
//         console.log(this.age);
//     },
//     getInfo1:function(){
//         setTimeout(function(){
//             console.log(this);
//         },2000);
//     },
//     getInfo2:function(){
//         setTimeout( ()=>{
//             console.log(this);
//         },2000);
//     },
// }

// // Q) write an arrow function that is return the square of a number 'n'

// let sq=(n)=>{
//     return n*n;
// }

// console.log(sq(3));
// console.log(sq(9));

// // write a functions that prints "hello wolrd" 5 times at intervals of 2s each;

// let id=setInterval(()=>{
//     console.log("hello");
// },2000)

// setTimeout(()=>{clearInterval(id);},10000);

// // forEach loop

// let arr=[2,4,5,11,45];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);
// console.log("for function");

// arr.forEach(function print(el){
//     console.log(el);
// })
// console.log("Arrow function");
// arr.forEach((el)=>{
//     console.log(el);
// })

// let arr=[
//     {
//         name:"deepka",
//         marks:45,
//     },
//     {
//         name:"magan",
//         marks:79,
//     },
//     {
//  name:"subosh",
//  marks:100,
//      },
// ];

// let newInfo=arr.map((el)=>{
//     return el.marks/10;
// })
// arr.forEach((student)=>{
//     console.log(student.name);
// });

// // Map;

// let arr=[2,4,6,8];

// let newArr=arr.map((el)=>{
//     return el*2;
// })

// // filter

// let arr=[2,4,13,9,44,23,53];
// let newArr=arr.filter((el)=>{
//     return el<5;
// })

// // reduce

// let arr=[1,2,3,4];

// let val=arr.reduce((acc,el)=>acc+el);
// console.log(val);

// let arr=[2,3,5,6,2,12,42,123432,45,24,4,531,345,2,45,35,,64,5,6,356,3,56,,56,3,5,3,54,4,5,43,45,443,5,435,43,54,443,56,543,54,345,5,6,453,546,543,54,435,65,5,6,564,545,645,435,465];
// let vsl=arr.reduce((acc,el)=>{
//     if(acc<el){
// return acc;
//     }else{
//         return el;
//     }
// })
// console.log(vsl);

// //spread
//  console.log(... "deepak");


// let info={
//     name:"deepak",
//     age:20,
// }
// let newInfo={...info,marks:90};

// // rest

// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log(args[i]);
//     }
// }
// sum(3);
// sum(3,4,3,4);
//  function sum(...args){
//     return args.reduce((sum,el)=>sum+el);
//  }

//  function min(msg,... args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min<el){
//             return min;
//         }else{
//             return el;
//         }
//     })
//  }

// destructuring

// let names=["deepak","ashish","vikas","magan","ayush"];
// // let winner=names[0];
// // let runnerUp=names[2];
// // let secondRunnerUp=names[4];
// let [winner,runnerUp,secondrunnerUp,...other]=names;

// let student={
//     name:"deepak";
//     age:15,
// }

// // getElementByClassName;
// let image = document.getElementsByClassName("image");
// for (let i = 0; i < image.length; i++) {
//     image[i].src = "sipderman.jpg";
//     console.dir(image[i].src);
// }


//querySelector
// document.querySelector('h2');
//Manipulation style
// let links = document.querySelectorAll('ul a');
// console.dir(links);
// for (link of links) {
//     link.style.color = "blue";
// }
// // class css;
// let head = document.querySelector('h1');
// console.dir(head.classList);
// head.classList.add('whit');
// head.classList.add('underline');
// head.classList.remove('underline');
// head.classList.toggle('underline');
// head.classList.toggle('underline');

// pratice quetion
// add the following elements to the container usinfg only javascript ans the DOM methods
// 1) a < p > with red text that say "hey I'M, RED";
// 2) an < h3 > with blue text that say "hey I'M, BLUE";
// 3) a < div > with black border ans pink backgroud color with the following elments inside of it *
//     Another < h1 > that says "I'm in a div";
// a < p > that say "ME TOO!";
// let p = document.createElement('p');
// p.innerText = "hey,I'm red";
// let body = document.querySelector('body');
// body.append(p);
// p.classList.add('red');
// let h3 = document.createElement('h3');
// h3.innerText = "Im a blue h3";
// body.append(h3);
// h3.classList.add('blue');
// let div = document.createElement('div');
// body.append(div);
// div.classList.add('st');
// let h1 = document.createElement('h1');
// h1.innerText = "I'm in a div ";
// div.append(h1);
// let para2 = document.createElement('p');
// para2.innerText = 'ME TOO!';
// div.append(para2);

// // DOM Event
// // onclick
// let btns = document.querySelectorAll('button');
// console.dir(btns);
// for (btn of btns) {
//     btn.onclick = gogo;
//     btn.onmouseenter = function() {
//         console.log("mouse us go on button");
//     }
// }

// function gogo() {
//     alert("button was clicked");
// }

// Event Listener:Multiple event trigger at a same time;
// let btns = document.querySelectorAll('button');
// for (btn of btns) {
//     btn.addEventListener("click", gogo);
//     btn.addEventListener("click", live);

// }

// function gogo() {
//     alert("button was clicked");
// }

// function live() {
//     alert("this page is inCurrupeted");
// }
// // activity;
// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     let h1 = document.querySelector('h1');
//     let rgb = rgbGenarator();
//     h1.innerText = rgb;
//     let div = document.querySelector('div');
//     div.style.backgroundColor = rgb;
//     console.log("color updated");
// })

// function rgbGenarator() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let newColor = `rgb(${red},${green},${blue})`;
//     return newColor;
// }
// // event listener is use in any tag and it event;
// let h1 = document.querySelector('h1');
// h1.addEventListener('click', function() {
//     console.log("mouse is enter into box");
// });
// let div = document.querySelector('div');
// div.addEventListener('mouseenter', function() {
//     console.log("mouse is enter the holl");
// })

// this in evenListerner
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h2 = document.querySelector('h2');
// // p.addEventListener('click', function() {
//     this.style.color = "blue";
// })
// h1.addEventListener('click', function() {
//     this.style.backgroundColor = "blue";
// })
// h2.addEventListener('click', function() {
//     this.style.color = "blue";
// })

// function colorchange() {
//     this.style.color = 'blue';
// }
// p.addEventListener('click', colorchange);
// h1.addEventListener('click', colorchange);
// h2.addEventListener('click', colorchange);
// //keyboard event
// let inp = document.querySelector('input');
// inp.addEventListener('keyup', function(event) {
//     // console.log(event.key);
//     console.log(event.code);
//     // console.log("key was pressed");
// })
//form event
// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // prevent the dedfault work
//     alert("form submmitted");
// })

// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let user = document.querySelector('#text');
//     let pass = document.querySelector('#pass');
//     console.dir(user);
//     alert(`this form is sabmit and user name is: ${user.value} ans ths password is ${pass.value}`);
// })

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.dir(form);
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     console.log()

// })

// event bubbilng
// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');
// div.addEventListener('click', function() {
//     console.log('div is clicked');
// });
// ul.addEventListener('click', function(event) {
//     event.stopPropagation();
//     console.log('ul is clicked');
// });
// for (li of lis) {

//     li.addEventListener('click', function() {
//         event.stopPropagation();
//         console.log('li is clicked');
//     });
// }
// todo app by using html and java script
// adding
// let btn = document.querySelector('button');
// let input = document.querySelector('input');
// let ul = document.querySelector('ul');

// btn.addEventListener('click', function() {
//         let li = document.createElement('li');
//         li.innerText = input.value;
//         input.value = "";
//         ul.append(li);
//         let dtbtn = document.createElement('button');
//         dtbtn.innerText = 'delete';
//         dtbtn.classList.add('delete');
//         li.appendChild(dtbtn);
//         console.log("add successfully");
//     })
// deleting the task
// let delbtn = document.querySelectorAll('.delect');
// for (btn of delbtn) {
//     btn.addEventListener('click', function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
// ul.addEventListener("click", function(event) {
//     if (event.target.nodeName == "BUTTON") {
//         let listName = event.target.parentElement;

//         listName.remove();
//         console.log("deleted");
//     }
// })


// //call stack
// function hello() {
//     console.log("inside the hello function")
//     console.log("hello");
// }

// function demo() {
//     console.log("calling the hello function");
//     hello();
//     console.log("we are return again");
// }
// console.log("calling the demo function")
// demo();
// console.log("done,hii");

// // visualization of call stack

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// // setTimeOut();
// setTimeout(() => {
//     console.log("hello is print");
// }, 2000);
// console.log("hello.......");

// // call back hall;
// let h1 = document.querySelector('h1');
// setTimeout(() => {
//     h1.style.color = 'red';
// }, 2000);
// setTimeout(() => {
//     h1.style.color = 'green';
// }, 3000);
// setTimeout(() => {
//     h1.style.color = 'blue';
// }, 4000);
// let h1 = document.querySelector('h1');

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10);
//             if (num > 3) {
//                 reject("color don't change");
//             }
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     })

// }
// // await and async keyword;
// async function color() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("red", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("purple", 1000);
//         await changeColor("mango", 1000);
//     } catch (err) {
//         console.log("error found");
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
//     console.log("new number:", a + 42);
// }
// changeColor("red", 1000)
//     .then(() => {
//         console.log("color is change to red");
//         return changeColor("yellow", 1000);
//     })
//     .then(() => {
//         console.log("color is change to yello");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("color is changed to green");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("color changed to blue");
//     })
// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("purple", 1000, () => {
//                     changeColor("orange", 1000)
//                 })
//             })
//         });
//     });
// });

// //promise
// function saveToDb(success, failure) {
//     let internetCnt = Math.floor(Math.random() * 10);
//     if (internetCnt > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDb(() => {
//     console.log("success1:data se save");
//     saveToDb(() => {
//         console.log("succuss2:data was save")
//         saveToDb(() => {
//             console.log("succuss3:data was save");
//         }, () => {
//             console.log("failure:save was not save,weak internet")
//         })
//     }, () => {
//         console.log("failure:save was not save,weak internet")
//     })
// }, () => {
//     console.log("failure:save was not save,weak internet");
// })

// function saveToDb(data) {
//     return new Promise((success, failure) => {
//         let internetCnt = Math.floor(Math.random() * 10);
//         if (internetCnt > 4) {
//             success("success:data was save");
//         } else {
//             failure("failure:data is not save");
//         }
//     });

// }

// saveToDb("deepak is i am")
//     .then((result) => {
//         console.log("promise was accepted");
//         console.log("return1:", result);
//         return saveToDb("this is me");

//     })
//     .then((result) => {
//         console.log("save1:promise was accepted");
//         console.log("return2:", result);
//         return saveToDb("yea.i am");

//     })
//     .then((result) => {
//         console.log("save2:promise was accepted");
//         console.log("return3:", result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error1:", error);
//     })

// async function 
//async keyword;
// async function greed() {
//     //throw 'deepak is not good';
//     return "hello!"
// }
// greed()
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })

// // JOSN acessing the data
// let jsonData = '{"fact":"Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by \u201ccrossing\u201d its eyes.","length":275}'
// console.log(jsonData);
// let validJson = JSON.parse(jsonData);
// console.log(validJson);
// console.log(validJson.fact);
// console.log(validJson.length);

// let student = {
//     name: "deepak",
//     marks: 87,
//     roll_No: 22510097,
// };

// our first api request
// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data_1:", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         console.log(res);
//         return res.fetch();
//     })
//     .then((data) => {
//         console.log("data_2:", data.fact)
//     })
//     .catch((err) => {
//         console.log("error:", err);
//     });
// using async and await 
// async function cat() {
//     try {
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log("data-1:", data1);
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data-1:", data2);
//     } catch (err) {
//         console.log("error_=", err);
//     }
//     console.log("bye");
// }
// cat();

// console.log("i am deepak");

// // axios function in js

// let btn = document.querySelector("button");
// btn.addEventListener("click", async() => {
//     let fact = await getfact();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// async function getfact() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error_:", e);
//         return "Not found fact";
//     }
// }

// dog image getting

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click", async() => {
//     let image = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", image);
// })
// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error_:", e);
//         return "Not found fact";
//     }
// }

//header in axios function

// let url3 = "https: //icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//         let joke = await axios.get(url3);
//         console.log(joke);
//     } catch (err) {
//         console.log("error_:", err);
//     }
// }

//crate a webpage to shown the list of college in diffent count

// let url3 = "http://universities.hipolabs.com/search?name="
// async function getCollege(country) {
//     try {
//         let college = await axios.get(url3 + country);
//         console.dir(college);
//         return college.data;
//     } catch (e) {
//         console.log("error-:", e);
//         return ['/'];
//     }
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async() => {
//     let country = document.querySelector("input");
//     let collArr = await getCollege(country.value);
//     // console.log(collArr);
//     shownList(collArr);
// })

// function shownList(collArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (let i = 0; i < collArr.length; i++) {
//         let li = document.createElement("li");
//         li.innerText = collArr[i].name;
//         list.appendChild(li);
//     }
// }

// let url = "http://worldtimeapi.org/api/timezone/asia/kolkata/";

// async function getTime() {
//     try {
//         let time = await axios.get(url);
//         console.log(time.data.datetime)
//     } catch (e) {
//         console.log(e);
//     }
// }

// function changeTime() {
//     let dateIs = new Date();
//     let hourIs = dateIs.getHours();
//     let minuteIs = dateIs.getMinutes();
//     let secondIs = dateIs.getSeconds();

//     let timeSet = document.querySelector(".time");
//     if (hourIs >= 12) {
//         let timeIs = hourIs + ":" + minuteIs + ":" + secondIs + " " + "AM!";
//         timeSet.innerText = timeIs
//     } else {
//         let timeIs = hourIs + ":" + minuteIs + ":" + secondIs + " " + "PM!";
//         timeSet.innerText = timeIs
//     }

//     //console.log(timeIs);
// }

// setInterval(changeTime, 1000)

// let url2 = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// async function word() {
//     try {
//         let words = await axios.get(url2 + "hello");
//         console.log(words.data[0].meanings);
//     } catch (e) {
//         console.log("error:", e)
//     }
// }
// let arr = [3, 5, 6, 4, 6, 8];
// // let total = 0;

// function sum(el, index, arr) {
//     arr[index] = el * 10;
// }
// // console.log(total);
// arr.forEach(sum);
// console.log(arr);
// Array object
// let arrObject = [{
//     name: "deepak",
//     marks: 97,
// }, {
//     name: "shivam",
//     marks: 100,
// }, {
//     name: "subodh",
//     marks: 120,
// }, {
//     name: "ashish",
//     marks: 150,
// }];
// console.log(arrObject);

// Array as map
// let arr = [1, 3, 5, 7, 9, 1, 3, 4, 6, 2, 43, 546, 356, 6, 346, 47, 4];
// let newArr = arr.map(function(el) {
//     return el * 2;
// })
// console.log(arr);
// let arr1 = arr.filter(function(el) {
//     return el % 3 == 0;
// })
// let arr2 = arr.filter(function(el) {
//     return el % 2 == 0;
// })
// console.log(arr2);

// function fun(a, b = 9) {
//     return a + b;
// }
// console.log(fun(12, 34))
let arr = [1, 3, 5, 7, 9, 1, 3, 4, 6, 2, 43, 546, 356, 6, 346, 47, 4];

function min(msg, ...args) {
    console.log(msg);
    return args.reduce(min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    }
}
console.log(min("deepak", 2, 5, 4, 6, 4, 5, 4));