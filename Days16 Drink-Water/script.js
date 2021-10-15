const smallCups = document.querySelectorAll('.cup-small') // This is small cups dom element
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

updateBigCup() // 初始化

/**
 * 更新大杯子容器
 */
function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - 250 * fullCups / 1000}L`
  }
}
/**
 *
 * @param {number} idx 点击的小杯子所在父元素的下标
 */
function highlightCups(idx) {
  if (smallCups[idx].classList.contains('full') &&
        !smallCups[idx].nextElementSibling?.classList.contains('full')) {
    idx--
  }

  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}
