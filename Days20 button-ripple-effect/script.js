const button = document.querySelector('.ripple')

button.addEventListener('click', function (e) {
    // 点击的坐标
    const x = e.clientX
    const y = e.clientY
    // button 的左上角坐标
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    // 点击的坐标减去 button 左上角的坐标，计算出点击位于 button 的相对位置
    const insideX = x - buttonLeft
    const insideY = y - buttonTop

    console.log(`x:${x}`, `y:${y}`)
    console.log(`buttonTop:${buttonTop}`, `buttonLeft:${buttonLeft}`)
    console.log(`insideX:${insideX}`, `insideY:${insideY}`)
    // 创建一个 span 标签
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = insideY + 'px'
    circle.style.left = insideX + 'px'
    e.target.append(circle)
    setTimeout(() => { circle.remove() }, 500)
})