
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
// 按下鼠标时的当前位置
let nowPosition = 0;
// 获取像素位置的参数
let pixelName = 'clientX';
/**
 * 初始化参数值
 * @params moveId   String 移动元素的class
 * @params disNum   Number 每次移动的数值，非拖动
 * @params moveType String move：移动，scroll：滚动
 * @params minNum   Num    临界值，鼠标移动如果小于这个值，则不触发移动事件，触发鼠标松开事件
*/
export let mouseInit = function (moveId, disNum, moveType, minNum, direction) {
    moveObj = document.getElementById(moveId);
    distance = Number(disNum);
    type = moveType === 'move' ? 'move' : 'scroll';
    minDistance = Number(minNum) > 0 ? Number(minNum) : 0;
    pixelName = directives === 'Y' ? 'clientY' : 'clientX';
    console.log(moveObj);
    let st = setTimeout(() => {
        // 监听鼠标按下
        moveObj.addEventListener('mousedown', mouseDown, false);
        // 监听鼠标移动
        moveObj.addEventListener('mousemove', mouseMove, false);
        // 监听鼠标松开（连同范围外的区域一起）
        document.addEventListener('mouseup', mouseUp, false);
        clearTimeout(st);
    }, 500);
}
// 鼠标按下事件
let mouseDown = function(event) {
    console.log('down:', event);
    isDown = true;
}
// 鼠标移动事件
let mouseMove = function (event) {
    if (!isDown) {return;}
    console.log('move:', event);
}
// 鼠标松开事件
let mouseUp = function (event) {
    console.log('up:', event);
    isDown = false;
}