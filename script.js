let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let tar1 = document.querySelector(".target1");
let tar2 = document.querySelector(".target2");
let tar3 = document.querySelector(".target3");

btn1.addEventListener("click",()=>tar1.scrollIntoView());
btn2.addEventListener("click",()=>tar2.scrollIntoView());
btn3.addEventListener("click",()=>tar3.scrollIntoView());