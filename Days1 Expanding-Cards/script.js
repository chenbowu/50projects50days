const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        [].filter.call(panel.parentNode.children, child => child != panel)
            .forEach(element => element.classList.remove('active'));
        panel.classList.add('active');
    });
});