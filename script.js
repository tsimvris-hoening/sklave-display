const images = [
    'https://hoening.de/de/dashboard/shots/screenshot-1.png',
    'https://hoening.de/de/dashboard/shots/screenshot-2.png',
    'https://hoening.de/de/dashboard/shots/screenshot-3.png'
];

let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    const imageElement = document.getElementById('slider-image');
    imageElement.src = images[currentIndex];
}, 15000); // Change every 15 seconds