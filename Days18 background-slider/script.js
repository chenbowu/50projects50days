const body = document.body;
const btnPrev = document.getElementById('left');
const btnNext = document.getElementById('right');
const slides = document.querySelectorAll('.slide');
let currentActive = 0;

btnPrev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = slides.length - 1;
    }
    setBgToBody();
    setBgToSlidesContainer();
});

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive > slides.length -1) {
        currentActive = 0;
    }
    setBgToBody();
    setBgToSlidesContainer();
});

setBgToBody();

function setBgToSlidesContainer() {
    [].find.call(slides, slide => slide.classList.contains('active'))
        .classList.remove('active');
    slides[currentActive].classList.add('active');
}

function setBgToBody() {
    body.style.backgroundImage = slides[currentActive].style.backgroundImage;
}