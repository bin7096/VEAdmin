// 滚动的节点
let moveObj = null;
// 点击滑动的距离
let distance = 0;
// 移动类型，move：移动，scroll：滚动
let type = 'scroll';
// 最小拖动距离
let minDistance = 0;
// 当前是否已按下鼠标
let isDown = false;
// 获取像素位置的参数
let pixelName = 'clientX';
// 按下鼠标时的像素位置
let beforePixel = 0;
// 滚动像素
let scrollPixel = 0;
// 已滚动像素
let scrolledPixel = 0;
// 可滚动距离
let scrollable = 0;
/**
 * 初始化参数值
 * @params moveId   String 移动元素的class
 * @params disNum   Number 每次移动的数值，非拖动
 * @params moveType String move：移动，scroll：滚动
 * @params minNum   Number 临界值，鼠标移动如果小于这个值，则不触发移动事件，触发鼠标松开事件
*/
export let mouseInit = function (moveId, disNum, moveType, minNum, direction, allWidth) {
    moveObj = document.getElementById(moveId);
    distance = Number(disNum);
    type = moveType === 'move' ? 'move' : 'scroll';
    minDistance = Number(minNum) > 0 ? Number(minNum) : 0;
    pixelName = direction === 'Y' ? 'clientY' : 'clientX';
    scrollTo  = direction === 'Y' ? 'scrollTop' : 'scrollLeft';
    console.log(moveObj);
    let st = setTimeout(() => {
        // 获取DOM元素的可滚动距离
        let domWidth = $(moveObj).width();
        scrollable = allWidth - domWidth <= 0 ? 0 : allWidth - domWidth;
        // 监听鼠标按下
        moveObj.addEventListener('mousedown', mouseDown, false);
        // 监听鼠标移动
        moveObj.addEventListener('mousemove', mouseMove, false);
        // 监听鼠标松开（连同范围外的区域一起）
        document.addEventListener('mouseup', mouseUp, false);
        // 监听窗口变化事件
        window.addEventListener('resize', resize);
        clearTimeout(st);
    }, 500);
}
// 鼠标按下事件
let mouseDown = function(event) {
    isDown = true;
    beforePixel = event[pixelName];
}
// 鼠标移动事件
let mouseMove = function (event) {
    if (!isDown) {return;}
    let now = event[pixelName];
    scrollPixel = now - beforePixel;
    scrollPixel = 0 - scrollPixel + scrolledPixel;
    scrolledPixel = scrollPixel;
    // 修改DOM的滚动位置
    $(moveObj)[scrollTo](scrollPixel);
}
// 鼠标松开事件
let mouseUp = function (event) {
    isDown = false;
    console.log('scrollPixel:', scrollPixel);
    console.log('scrolledPixel:', scrolledPixel);
}
// 窗口变化事件
let resize = function (event) {
    console.log('resize:', event);
    // 获取DOM元素的可滚动距离
    let domWidth = $(moveObj).width();
    scrollable = allWidth - domWidth <= 0 ? 0 : allWidth - domWidth;
}