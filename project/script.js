const openNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "250px";
    document.querySelector("main").style.filter = "brightness(50%)";
    document.querySelector("body").style.backgroundColor = "#D4D4D4";
}

const closeNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "0px";
    document.querySelector("main").style.filter = "initial";
    document.querySelector("body").style.backgroundColor = "initial";
}

document.querySelector(".fa-bars").onclick = openNav;
document.querySelector(".fa-times").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;