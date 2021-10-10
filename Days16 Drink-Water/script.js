const smallCups = document.querySelectorAll('.cup-small'); // All small cups dom element
const remained = document.getElementById('remained'); // The Big cup dom element.
const percentage = document.getElementById('percentage'); // 百分比元素 
const liters = document.getElementById('liters'); // 显示公升的dom element

// Define click events for small cups
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') &&
        (idx === smallCups.length - 1 ||
            !smallCups[idx].nextElementSibling.classList.contains('full'))) {
        idx--;
    }
    smallCups.forEach((cup, i) => {
        if (i <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    console.time('Test');
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - 250 * fullCups / 1000}L`;
    }
    console.timeEnd('Test');
}