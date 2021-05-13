//sidebar
const openNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "250px";
    document.querySelector("body").style.backgroundColor = "#D4D4D4";
    document.querySelector("header").style.backgroundColor = "#D4D4D4";
}

const closeNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "0px";
    document.querySelector("body").style.backgroundColor = "initial";
    document.querySelector("header").style.backgroundColor = "initial";
}

document.querySelector(".fa-bars").onclick = openNav;
document.querySelector(".fa-times").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;

//main content
//use tutorial 6 as a guide for card animations