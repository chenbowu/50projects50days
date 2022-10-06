const sliderContainer = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const slideLength = slideRight.querySelectorAll('div').length;

downButton.addEventListener('click', () => switchSlide('down'));
upButton.addEventListener('click', () => switchSlide('up'))
// initialize
// reverse left slide element 
slideLeft.style.top = `-${ (slideLength - 1) * 100 }vh`;

let activeSlideIndex = 0
function switchSlide(direction) {
    if (direction === 'down') {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'up') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }

    // 使用 px 单位会导致窗口高度发生变化时显示异常
    // const sliderHeight = sliderContainer.clientHeight;
    // slideLeft.style.transform = `translateY(${ activeSlideIndex * sliderHeight }px)`;
    // slideRight.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`

    // 使用 vh 单位能够在窗口高度发生变化时自适应
    slideLeft.style.transform = `translateY(${ activeSlideIndex * 100 }vh)`;
    slideRight.style.transform = `translateY(-${ activeSlideIndex * 100 }vh)`

    // 为什么不直接修改 top ？
    // 因为初始化时修改了 top 属性，此时如果 slideLeft 元素 的 translation 监听属性为 all，那么将会出现过渡效果，
    // 为了避免此情景，所以后续通过 transform 来切换 slide
    // slideLeft.style.top = `-${ (slideLength - 1 - activeSlideIndex) * 100 }vh`;
    // slideRight.style.top = `-${ activeSlideIndex * 100 }vh`
}