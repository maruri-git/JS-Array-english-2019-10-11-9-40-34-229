// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a))
console.log(Array.isArray(b))
console.log("===================================================")

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var newArray = a.map(number => number * 2)
console.log(newArray)
console.log("===================================================")

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = colors.join(" ")
console.log(case1)
var case2 = colors.join("+")
console.log(case2)
var case3 = colors.join(",")
console.log(case3)
console.log("===================================================")

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var newArray = a.sort((a, b) => a - b)
console.log(newArray)
console.log("===================================================")

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

var sortedObject = a.reduce((prevEl, currEl) => {
    prevEl[currEl] ??= 0;
    prevEl[currEl]++;
    return prevEl;
}, {});

// var findMax = sortedArray.filter(element => )// not finished yet
// console.log(findMax)
