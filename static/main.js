let currentIndex = 0;
const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];
const imgElement = document.querySelector('#portfolio-image');
const descriptionBox = document.querySelector('#description-box');
const closeDescription = document.querySelector('#close-description');

function showImage(index) {
    imgElement.src = `/static/img/${images[index]}`;
}

document.querySelector('#prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

document.querySelector('#next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

document.querySelector('#description').addEventListener('click', () => {
    descriptionBox.classList.remove('hidden');
});

closeDescription.addEventListener('click', () => {
    descriptionBox.classList.add('hidden');
});

showImage(currentIndex);
