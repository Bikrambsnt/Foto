

const images = [
    'image/img_1.jpg',
    'image/img.jpg',
    'image/img_5.jpg',
    'image/img_3.jpg',
    'image/img_4.jpg',
   
];

let currentImageIndex = 0;
const mainContent = document.querySelector('.main-content');

function preloadImages() {
    for (const imagePath of images) {
        new Image().src = imagePath;
    }
}

function changeBackgroundImage() {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    mainContent.style.backgroundImage = `url(${images[nextImageIndex]})`;

  
    setTimeout(() => {
        mainContent.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = nextImageIndex;
    }, 2000); 
}


preloadImages();


setInterval(changeBackgroundImage, 5000);