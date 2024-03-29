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