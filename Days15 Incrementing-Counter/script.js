const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        // 使用+号将字符串转成数值
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;
        console.log(`c:${c} increment:${increment}`);
        if (c < target) {
            //ceil() 方法执行的是向上取整计算，它返回的是大于或等于函数参数，并且与之最接近的整数。
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
})