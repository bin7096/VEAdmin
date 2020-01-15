// 滚动的节点
let scrollObj = null;
// 当前是否已按下鼠标
let isDown = false;
// 滚动方向（X-横向，Y-纵向）
let scrollTo = 'X';
// 可滚动距离
let scrollable = 0;
// 点击按钮时，每次滚动的距离
let btnScroll = 0;
// 滚动元素的子节点总长度
let childLength = 0;
// 已经滚动过的距离
let scrolled = 0;
// 按下鼠标时的位置（clientX或clientY）
let position = 0;
// 获取位置的参数名
let pName = 'clientX';
/**
 * 初始化参数值
 * @params scrollId  String 滚动元素的class
 * @params disNum    Number 每次移动的数值，非拖动
 * @params direction String 滚动方向（X/Y）
 * @params allLength Number 滚动元素的子节点总长度
*/
export let mouseInit = function (scrollId, disNum, direction, allLength) {
    // DOM对象
    scrollObj = document.getElementById(scrollId);
    // 点击按钮时，每次滚动的距离
    btnScroll = Number(disNum);
    // 滚动方向
    scrollTo = direction === 'Y' ? 'Y' : 'X';
    // 获取位置的参数名
    pName = scrollTo === 'Y' ? 'clientY' : 'clientX';
    // 滚动元素子节点总长度
    childLength = allLength;
    // 延时操作。。。
    let st = setTimeout(() => {
        // 元素的可滚动距离
        let length = 0;
        if (scrollTo === 'Y') {
            // 纵向滚动，获取元素高度
            length = $(scrollObj).height();
        }else{
            // 横向滚动，获取元素的宽度
            length = $(scrollObj).width();
        }
        scrollable = childLength - length <= 0 ? 0 : childLength - length;
        console.log('length:', length);
        console.log('childLength:', childLength);
        console.log('scrollable:', scrollable);
        // 监听鼠标按下
        scrollObj.addEventListener('mousedown', mouseDown, false);
        // 监听鼠标移动
        scrollObj.addEventListener('mousemove', mouseMove, false);
        // 监听鼠标松开（连同范围外的区域一起）
        document.addEventListener('mouseup', mouseUp, false);
        // 监听窗口变化事件
        window.addEventListener('resize', resize);
        clearTimeout(st);
    }, 500);
}
// 鼠标按下事件
let mouseDown = function (event) {
    isDown = true;
    position = event[pName];
}
/**
 * 鼠标按下时，记录鼠标的clientX
 * 鼠标移动时，判断鼠标是否按下和移动距离是否超过可滚动长度
 * 移动位置减鼠标按下位置，0减求出的值置反
 * DOM滚动操作
 * 已滚动距离加上当前滚动的距离
*/
// 鼠标移动事件
let mouseMove = function (event) {
    if (!isDown) {return;}
    let l = event[pName] - position;
    if (Math.abs(l) > scrollable) {return;}
    l = 0 - l;
}
// 鼠标松开事件
let mouseUp = function (event) {
    isDown = false;
}
// 窗口变化事件
let resize = function (event) {
    console.log('resize:', event);
    // 元素的可滚动距离
    let length = 0;
    if (scrollTo === 'Y') {
        // 纵向滚动，获取元素高度
        length = $(scrollObj).height();
    }else{
        // 横向滚动，获取元素的宽度
        length = $(scrollObj).width();
    }
    scrollable = childLength - length <= 0 ? 0 : childLength - length;
    console.log('length:', length);
    console.log('childLength:', childLength);
    console.log('scrollable:', scrollable);
    // 重置DOM元素的滚动位置
    if (scrollTo === 'Y') {
        // 纵向滚动
        $(scrollObj).scrollTop(0);
    }else{
        // 横向滚动
        $(scrollObj).scrollLeft(0);
    }
}