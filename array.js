// JavaScript source code
var mArray = [1,2,3,4,5]; //old way of declaring array

var array=new Array("Parth","Korawala",0827,"pkorawala@gmail.com"); // new way of declaring array with new keyword and array method
 // In js array can store hetrogeneous data

 function operations(array,mArray) {

    console.log(Array.isArray(array),Array.isArray(mArray)); // checks for array
    console.log(array.push("Parth Document")); //push element at last
    
    console.log(array.length, mArray.length); //print length of both arrays here length is 5
    console.log(array.pop(),mArray.pop()); //array.pop() pops out last element form the array
    console.log(array.length, mArray.length); // after popping length changed to 4
    console.log(array.shift(),mArray.shift()); //array.shift() menthod pops element from starting position of array
    console.log(array.unshift("Parth"),mArray.unshift(1)); 
    console.log(array,mArray);
    console.log(mArray.indexOf(3),array.indexOf("Parth Document")); // returns index of given element
    console.log(array.splice(2,3));//remove elements of given position
    
    
    console.log(array);
    
 }
 
 operations(array,mArray);