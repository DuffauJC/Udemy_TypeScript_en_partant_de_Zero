"use strict";
// Type Assertion
// let txt: string
// txt='str'
// Assertion
// const form: HTMLFormElement = document.querySelector('form')!
// console.log(form.children);
// Type casting
const form = document.querySelector('form');
console.log(form.children);
const input = document.querySelector('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log('envoyez');
}
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
const paragraphList = document.querySelectorAll('p'); // pas de casting
console.log(paragraphList);
