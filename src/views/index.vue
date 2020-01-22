<template class="box">
    <div class="box">
        <div class="left-box">
            <navigateLeft class="navigate-left"></navigateLeft>
        </div>
        <div class="right-box">
            <navigateTop></navigateTop>
            <iFrameBox></iFrameBox>
        </div>
        <div class="float-box">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-user"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><i class="el-icon-user"></i>基本资料</el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-edit"></i>修改密码</el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-switch-button"></i>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
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
        min-width: calc(100% - 200px);
        max-width: calc(100% - 64px);
        width: calc(100% - 64px);
    }
    .float-box{
        display: none;
        background-color: #FFF;
        position: fixed;
        right: 30px;
        bottom: 45px;
        width: 65px;
        height: 65px;
        text-align: center;
        line-height: 65px;
        border-radius: 65px;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 5px 1px #ccc;
    }
    .float-box .el-dropdown-link{
        font-size: 30px;
    }
    @media only screen and (max-width:599px), only screen and (max-device-width:599px){
        .user-select{
            display: none;
        }
        .float-box{
            display: inline-block;
        }
    }
</style>
<script>
import navigateTop from '../components/NavigateTop';
import navigateLeft from '../components/NavigateLeft';
import iFrameBox from '../components/IFrameBox';
export default {
    name: 'App',
    components: {
        navigateTop: navigateTop,
        navigateLeft: navigateLeft,
        iFrameBox: iFrameBox,
    },
    methods: {
        // NavigateTop中修改了侧边栏的折叠状态并抛出状态值，由change方法接收并更新
        change: function (val) {
            // console.log(val);
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
            this.$store.commit('index/fullScreenStatus');
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
            this.$store.commit('index/fullScreenStatus');
        },
        selectPage: function (index) {
            console.log('parent:', this.iFrameBtnList);
        },
        openPage: function (src) {
            console.log('src:', src);
        }
    }
}
</script>