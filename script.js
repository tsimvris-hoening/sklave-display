const imagesHorizontal = [
    'https://hoening.de/de/dashboard/shots/screenshot-0.png',
    'https://hoening.de/de/dashboard/shots/screenshot-1.png',
    'https://hoening.de/de/dashboard/shots/screenshot-2.png'
];
const imagesVertikal = [
    'https://hoening.de/de/dashboard/shots/vertikal-screenshot-0.png',
    'https://hoening.de/de/dashboard/shots/vertikal-screenshot-1.png',
    'https://hoening.de/de/dashboard/shots/vertikal-screenshot-2.png'
];
let cacheBuster = "?t=" + new Date().getTime(); // Create a unique timestamp

document.addEventListener('DOMContentLoaded', (event) => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const imageElement = document.getElementById('slider-image');
    if (width > height) {
        imageElement.src = imagesHorizontal[0] + cacheBuster;
    } else {
        imageElement.src = imagesVertikal[0] + cacheBuster;
    }
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
    });
    let currentIndexHorizontal = 0;
    let currentIndexVertikal = 0;
    if (!imageElement) {
        console.error('Slider image element not found!');
        return;
    }
    let autoChangeInterval;
    const intervalDuration = 15000;
    function showNextImage() {
        let cacheBuster = "?t=" + new Date().getTime();

        if (width > height) {
            currentIndexHorizontal = (currentIndexHorizontal + 1) % imagesHorizontal.length;
            imageElement.src = imagesHorizontal[currentIndexHorizontal] + cacheBuster;
        } else {
            currentIndexVertikal = (currentIndexVertikal + 1) % imagesVertikal.length;
            imageElement.src = imagesVertikal[currentIndexVertikal] + cacheBuster;
        }
    }
   function startOrResetInterval() {
        if (autoChangeInterval) {
            clearInterval(autoChangeInterval);
        }

        autoChangeInterval = setInterval(showNextImage, intervalDuration);
    }
    startOrResetInterval();

    document.body.addEventListener('click', () => {
        showNextImage();
        startOrResetInterval()
    });
});
