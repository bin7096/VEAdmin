/**
 * 用于储存多个滚动DOM信息
 * scrollObj   滚动的节点
 * isDown      当前是否已按下鼠标（true或false）
 * scrollTo    滚动方向（X-横向，Y-纵向）
 * scrollable  可滚动距离
 * childLength 子节点总长度
 * aLength     单个子节点长度
 * scrolled    已经滚动过的距离
 * position    按下鼠标时的位置（event的clientX或clientY属性）
 * pName       获取位置的参数名（clientX或clientY）
*/
let scrollInfo = {};
// 当前鼠标操作的节点id属性
let domId = null;
// 鼠标是否在范围内按下
let isDown = false;
/**
 * 初始化参数值
 * @params scrollId  String 滚动元素的class
 * @params disNum    Number 每次移动的数值，非拖动
 * @params direction String 滚动方向（X/Y）
 * @params allLength Number 滚动元素的子节点总长度
*/
export let mouseInit = function (scrollId, disNum, direction, allLength) {
    scrollInfo[scrollId] = {
        // 滚动的节点
        scrollObj   : document.getElementById(scrollId),
        // 当前是否已按下鼠标（true或false）
        isDown      : false,
        // 滚动方向（X-横向，Y-纵向）
        scrollTo    : direction === 'Y' ? 'Y' : 'X',
        // 可滚动距离
        scrollable  : 0,
        // 子节点总长度
        childLength : Number(allLength),
        // 单个子节点长度
        aLength     : Number(disNum),
        // 已经滚动过的距离
        scrolled    : 0,
        // 按下鼠标时的位置（event的clientX或clientY属性）
        position    : 0,
        // 获取位置的参数名（clientX或clientY）
        pName       : scrollTo === 'Y' ? 'clientY' : 'clientX'
    }
    // 延时操作。。。
    let st = setTimeout(() => {
        // 元素的可滚动距离
        let length = 0;
        if (scrollTo === 'Y') {
            // 纵向滚动，获取元素高度
            length = $(scrollInfo[scrollId].scrollObj).height();
        }else{
            // 横向滚动，获取元素的宽度
            length = $(scrollInfo[scrollId].scrollObj).width();
        }
        scrollInfo[scrollId].scrollable = scrollInfo[scrollId].childLength - length <= 0 ? 0 : scrollInfo[scrollId].childLength - length;
        // 监听鼠标按下
        scrollInfo[scrollId].scrollObj.addEventListener('mousedown', mouseDown, false);
        // 监听鼠标移动
        scrollInfo[scrollId].scrollObj.addEventListener('mousemove', mouseMove, false);
        // 监听鼠标松开（连同范围外的区域一起）
        document.addEventListener('mouseup', mouseUp, false);
        // 监听窗口变化事件
        window.addEventListener('resize', resize);
        clearTimeout(st);
    }, 500);
}
// 上一个
export let prev = function (id) {
    if (!scrollInfo.hasOwnProperty(id)) {return;}
    let obj = scrollInfo[id];
    if (obj.scrolled === 0) {return;}
    let surplus = obj.scrolled % obj.aLength;
    if (surplus === 0) {
        surplus += obj.aLength;
    }
    obj.scrolled -= surplus;
    if (obj.scrollTo === 'Y') {
        // 纵向滚动
        $(obj.scrollObj).scrollTop(obj.scrolled);
    }else{
        // 横向滚动
        $(obj.scrollObj).scrollLeft(obj.scrolled);
    }
}
// 下一个
export let next = function (id) {
    if (!scrollInfo.hasOwnProperty(id)) {return;}
    let obj = scrollInfo[id];
    if (obj.scrolled >= obj.scrollable) {return;}
    let surplus = (obj.scrollable - obj.scrolled) % obj.aLength;
    if (surplus === 0) {
        surplus += obj.aLength;
    }
    obj.scrolled += surplus;
    if (obj.scrollTo === 'Y') {
        // 纵向滚动
        $(obj.scrollObj).scrollTop(obj.scrolled);
    }else{
        // 横向滚动
        $(obj.scrollObj).scrollLeft(obj.scrolled);
    }
}
// 鼠标按下事件
let mouseDown = function (event) {
    domId = $(this).attr('id');
    let obj = scrollInfo[domId];
    obj.isDown = isDown = true;
    obj.position = event[obj.pName] + obj.scrolled;
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
    let id = $(this).attr('id');
    let obj = scrollInfo[id];
    if (!obj.isDown) {return;}
    console.log('pName:', obj.pName);
    console.log('position:', obj.position);
    let l = event[obj.pName] - obj.position;
    l = 0 - l;
    if (Math.abs(l) > obj.scrollable || l < 0) {return;}
    obj.scrolled = l;
    console.log('scrolled:', obj.scrolled)
    // 滚动距离，JQ的scrollLeft和scrollTop参数需要总的值
    if (obj.scrollTo === 'Y') {
        // 纵向滚动
        $(obj.scrollObj).scrollTop(l);
    }else{
        // 横向滚动
        $(obj.scrollObj).scrollLeft(l);
    }
}
// 鼠标松开事件
let mouseUp = function (event) {
    if (!isDown) {return;}
    scrollInfo[domId].isDown = isDown = false;
}
// 窗口变化事件
export let resize = function (event) {
    for (const key in scrollInfo) {
        // 元素的可滚动距离
        let length = 0;
        if (scrollInfo[key].scrollTo === 'Y') {
            // 纵向滚动，获取元素高度
            length = $(scrollInfo[key].scrollObj).height();
        }else{
            // 横向滚动，获取元素的宽度
            length = $(scrollInfo[key].scrollObj).width();
        }
        scrollInfo[key].scrollable = scrollInfo[key].childLength - length <= 0 ? 0 : scrollInfo[key].childLength - length;
        // 重置DOM元素的滚动位置
        if (scrollInfo[key].scrollTo === 'Y') {
            // 纵向滚动
            $(scrollInfo[key].scrollObj).scrollTop(0);
        }else{
            // 横向滚动
            $(scrollInfo[key].scrollObj).scrollLeft(0);
        }
    }
}

// 问题：同个页面不可以有两个拖动节点使用同一个插件