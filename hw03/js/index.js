/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
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
    if (currentIndex > 7){
        currentIndex = 0
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
}


const previousImage = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0){
        currentIndex = 7
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
}

//click events
document.querySelector('.next').onclick = nextImage;
document.querySelector('.prev').onclick = previousImage;
document.querySelector('.featured_image').onclick = nextImage;