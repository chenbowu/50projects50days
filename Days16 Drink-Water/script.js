const smallCups = document.querySelectorAll('.cup-small'); // All small cups dom element
const remained = document.getElementById('remained'); // The Big cup dom element.
const percentage = document.getElementById('percentage'); // 百分比元素 
const liters = document.getElementById('liters'); // 显示公升的dom element

// Define click events for small cups
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    console.log(idx);
}