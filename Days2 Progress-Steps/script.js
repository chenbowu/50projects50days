// 获取进度条元素
const progress = document.getElementById('progress');
// 获取上一步 下一步按钮
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// 以上三个元素由于设置了唯一的ID，可以直接使用getElementById获取 方便后续直接操作，无需遍历
// 获取所有的圆圈进度元素
const circles = document.querySelectorAll('.circle');

// 定义一个变量保存当前所在进度的哪个位置，默认第一步
let currentActive = 1;

// 为按钮点击添加事件
prev.addEventListener('click', () => {
    currentActive--;
    // 进度是否越界
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
    // 判断按钮是否可以点击
});

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length)
    {
        currentActive = circles.length;
    }
    update();
});


function update() {
    // 遍历所有圆圈 下标与currentActive比较，如果小于，为圆圈添加active类
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    // 计算进度条
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}