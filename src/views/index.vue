<template class="box">
    <div class="box">
        <div class="left-box">
            <navigateLeft :leftNavFold="leftNavFold" class="navigate-left"></navigateLeft>
        </div>
        <div class="right-box">
            <navigateTop :leftNavFold="leftNavFold" :isFullScreen="isFullScreen" @foldChanged="change"></navigateTop>
            <iFrameBox :iFrameBtnList="iFrameBtnList"></iFrameBox>
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
    data(){
        return {
            isFullScreen: false,
            leftNavFold : true,
            iFrameBtnList: [
                {name: '会员列表1'},
                {name: '会员列表2'},
                {name: '会员列表3'},
                {name: '会员列表4'},
                {name: '会员列表5'},
                {name: '会员列表6'},
                {name: '会员列表7'},
                {name: '会员列表8'},
                {name: '会员列表9'},
                {name: '会员列表10'},
                {name: '会员列表11'},
                {name: '会员列表12'},
                {name: '会员列表13'},
                {name: '会员列表14'},
                {name: '会员列表15'},
                {name: '会员列表16'},
                {name: '会员列表17'},
                {name: '会员列表18'},
                {name: '会员列表19'},
                {name: '会员列表20'},
            ]
        };
    },
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
        },
        selectPage: function (index) {
            console.log('parent:', this.iFrameBtnList);
        }
    }
}
</script>