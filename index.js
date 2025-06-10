// Q1. Add two Numbers
 var a = 2; //declear a variable "a" and assign value 2
 var b = 5; //declear a variable "b" and assign value 5
 console.log(a + b); // prints 7 to the console.
 
//  Q2. Find if the conditions are obeyed or not? 
let a1 = 5; //declear a variable "a1" and assign value 5
let b1 = 3; ////declear a variable "b1" and assign value 3
let res1 = (a1 < 10 && a1 > b1); // using && comparision Operator
console.log(res1); // print true to the console


//Q3. Check the conditions 
let a2 = 12;//declear a variable "a2" and assign value 12
let b2 = 20;////declear a variable "b2" and assign value 20
//1. if both are divisible by 10 console true.
let res2 = (a2 / 10 === 0 && b2 / 10 === 0); // To check the condition using && Operator
console.log(res2);// 

// 2. if both are not divisible by 10 console false.
let a21 = 12;//declear a variable "a2" and assign value 12
let b21 = 20;////declear a variable "b2" and assign value 20
//1. if both are divisible by 10 console true.
let res21 = (a21 / 10 === 0 && b21 / 10 === 0); // To check the condition using && Operator
console.log(res21);

//3. if one of them only is divisible by 10 console true.
let a22 = 12;//declear a variable "a2" and assign value 12
let b22 = 20;////declear a variable "b2" and assign value 20
//1. if both are divisible by 10 console true.
let res22 = (a22 % 10 === 0 || b22 % 10 === 0); // To check the condition using || Operator
console.log(res22);// 


//Q4. Find the first digit of a 4 digit number
let a3 = 4567; //declear a variable "a3" and assign value 4567
let res3 = a3 / 1000; // Using division operator to divide variable "a3"
console.log(Math.floor(res3)); //print 4 to the console

// Q5. Find the last digit of a 4 digit number 
let a4 = 4567 //declear a variable "a4" and assign value 4567
let lastdigit = a4 % 10; // Using modulo  operator to divide variable "a3"
console.log(lastdigit);//print 7 to the console

//Q6. Find the remainder
let a5 = 2 //declear a variable "a5" and assign value 2
let b5 = 9 //declear a variable "b5" and assign value 9
let remainder = ( b5 % a5) //Using modulo  operator to divide variable "b5" by "a5" 
console.log(remainder); //print 1 to the console

//Q7. Multiply two Numbers
let a6 = 2; //declear a variable "a6" and assign value 2
let b6 = 5; //declear a variable "b6" and assign value 2
console.log(a6 * b6); // Using multiplier operator to print 10 to the console 

// Q8. Marks Calculator 
let a7 = 50;
let b7 = 20;
let c7 = 100 
let marks = (a7 + b7 + c7);// using Add(+) operator to add the variable "a7 , b7 , c7" 
let avg = (marks / 3); // To find average using division operator   
console.log(marks , avg) // To Print the Marks and average of Shyam
                





