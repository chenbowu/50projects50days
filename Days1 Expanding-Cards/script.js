const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        var children = [].filter.call(panel.parentElement.children, el => el != panel);
        console.log(children);
        children.forEach(panel => panel.classList.remove('active'));
        panel.classList.add('active');
    });
});