// ForLoop

const array=[0,2,4,5,8,10,12,14,16,18,20];
for (let index = 0; index < array.length; index++) { 
console.log((5 * array[index])+500);
}

// For each 

var xList=[
    "Abc",
    "Def",
    "Xyz",
    "Klm",
    "Rst",
    123456
];

xList.forEach(element => { 
    console.log(element);
}); //require callback
//or
List.forEach((element) => console.log(element));
//or
xList.forEach((element) => (console.log(element)));