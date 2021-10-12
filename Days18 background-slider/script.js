const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('left');
const btnNext = document.getElementById('right');
let currentActive = 0;

btnPrev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = slides.length - 1;
    }
    setBgToSlide();
    setBgToBody();
});

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive > slides.length - 1) {
        currentActive = 0;
    }
    setBgToSlide();
    setBgToBody();
})

setBgToBody();

function setBgToSlide() {
    [].find.call(slides,slide => slide.classList.contains('active'))
        .classList.remove('active');
    slides[currentActive].classList.add('active');
}

function setBgToBody() {
    body.style.backgroundImage = slides[currentActive].style.backgroundImage;
}