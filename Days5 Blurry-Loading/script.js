const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;
let int = setInterval(blurry,30);

function blurry() {
    load++;
    loadText.innerText = `${load}%`;
    // 设置文字的透明度 从1到0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // 设置图片模糊度
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    if (load == 99) {
        clearInterval(int);
    }
}
/**
 * 两区间的数值按原比率进行线性转换
 * @param {*} number 当前的数值
 * @param {*} inMin  原区间最小值
 * @param {*} inMax  原区间最大值
 * @param {*} outMin 新区间最小值
 * @param {*} outMax 新区间最大值
 * @returns 转换后的比率
 */
function scale(number, inMin, inMax, outMin, outMax) {
    let oldRange = inMax - inMin;
    let newRange = outMax - outMin;
    let newValue = (number - inMin) * newRange / oldRange + outMin;
    return newValue;
}