let bell = document.querySelector("#bell");
let select =document.querySelector(".select");

bell.addEventListener("click" , function(){
    select.classList.toggle("none");
})

let submenu = document.querySelector(".submenu");
let lists = document.querySelector(".lists");

submenu.addEventListener("click" , function(){
    lists.classList.toggle("none");
})

let button1 = document.querySelector("#button1");
let  text1 = document.querySelector("#text1");

let button2 = document.querySelector("#button2");
let text2 = document.querySelector("#text2");

let button3 = document.querySelector("#button3");
let text3 = document.querySelector("#text3");


button1.addEventListener("click" , function(){
    text1.classList.toggle("none");
})

button2.addEventListener("click" , function(){
    text2.classList.toggle("none");
})

button3.addEventListener("click" , function(){
    text3.classList.toggle("none");
})
