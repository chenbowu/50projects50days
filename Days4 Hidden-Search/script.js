const searchNode = document.querySelector('.search');
const btnSearch = document.querySelector('.btn');
const inpSearch = document.querySelector('.input');

btnSearch.addEventListener('click', () => {
    searchNode.classList.toggle('active');
    inpSearch.focus();
});