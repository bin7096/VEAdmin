<template class="box">
    <div class="box">
        <div class="left-box">
            <navigateLeft :leftNavFold="leftNavFold" class="navigate-left"></navigateLeft>
        </div>
        <div class="right-box">
            <navigateTop :leftNavFold="leftNavFold" :isFullScreen="isFullScreen" @foldChanged="change"></navigateTop>
            <div class="iframe-box"></div>
        </div>
    </div>
</template>
<style>
    #app,.box{
        width: 100%;
        height: 100%;
    }
    .box{
        display: flex;
    }
    .left-box, .right-box{
        height: 100%;
    }
    .right-box{
        width: calc(100% - 64px);
    }
    .iframe-box{
        background-color: #009688;
        height: calc(100% - 60px);
    }
</style>
<script>
import navigateTop from '../components/NavigateTop';
import navigateLeft from '../components/NavigateLeft';
export default {
    name: 'App',
    data(){
        return {
            isFullScreen: false,
            leftNavFold : true,
        };
    },
    components: {
        navigateTop: navigateTop,
        navigateLeft: navigateLeft
    },
    methods: {
        // NavigateTop中修改了侧边栏的折叠状态并抛出状态值，由change方法接收并更新
        change: function (val) {
            console.log(val);
            this.leftNavFold = val;
        },
        // NavigateTop中触发的全屏方法
        requestFullScreen: function() {
            let element = document.getElementById('app');
            //某个元素有请求    
            let requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
            if (requestMethod) {     
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }   
            }
            this.isFullScreen = true;
        },
        // NavigateTop中触发的关闭全屏方法
        closeFullScreen: function () {
            let closeMethod = document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen;
            if (closeMethod) {     
                closeMethod.call(document);
            } else if (typeof window.ActiveXObject !== "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{Esc}");
                }   
            }
            this.isFullScreen = false;
        }
    }
}
</script>