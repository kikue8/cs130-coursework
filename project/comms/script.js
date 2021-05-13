//sidebar
const openNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "250px";
    document.querySelector("header").style.backgroundColor = "#D4D4D4";
    document.querySelector("body").style.backgroundColor = "#D4D4D4";
    document.querySelector("main").style.filter = "brightness(50%)";
}

const closeNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "0px";
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("main").style.filter = "initial";
    document.querySelector("body").style.backgroundColor = "initial";
}

document.querySelector(".fa-bars").onclick = openNav;
document.querySelector(".fa-times").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;

//images
const images = [
    'images/laxbigtenchamps.jpeg',
    'images/wbbjhamilton.jpeg',
    'images/wbblosslouisville.jpeg',
    'images/wbblpulliam.jpeg',
    'images/wbbohiostate.jpeg',
    'images/wbbucf.jpeg',
    'images/wbbvburton.jpeg',
];

currentIndex = 0

//inital screen
const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

//thumbnail click events
const thumbnailImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage
}

const imageElements = document.querySelectorAll('.image');

for (const elem of imageElements) {
    elem.onclick = thumbnailImage;
}

//next and previous click events
const nextImage = (ev) => {
    currentIndex += 1;
    if (currentIndex > 6){
        currentIndex = 0
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
}


const previousImage = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0){
        currentIndex = 6
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
}

//click events
document.querySelector('.next').onclick = nextImage;
document.querySelector('.prev').onclick = previousImage;
document.querySelector('.featured_image').onclick = nextImage;

