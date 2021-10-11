const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnNext = document.getElementById('right');
const btnPrev = document.getElementById('left');
let currentActive = 0;

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive > slides.length - 1) {
        currentActive = 0;
    }
    setBgToBody();
    setActiveSlide();
});

btnPrev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
});

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[currentActive].style.backgroundImage;
}


function setActiveSlide() {
    [].find.call(slides, slide => slide.classList.contains('active'))
        .classList.remove('active');
    slides[currentActive].classList.add('active');
}