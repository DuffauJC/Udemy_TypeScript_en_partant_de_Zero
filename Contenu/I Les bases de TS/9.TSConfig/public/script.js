"use strict";
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
console.log(newArr);
const pNodelist = document.querySelectorAll('p');
console.log(pNodelist);
const arrFromNodeList = [...pNodelist];
let text = 'abc';
const strictVar = 10;