const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log('scrollY', window.scrollY, 'offsetHeight', nav.offsetHeight);
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}