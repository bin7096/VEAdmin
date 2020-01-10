<template>
    <div class="iframe-box">
        <div class="iframe-title">
            <div class="iframe-title-left">
                <span class="iframe-btn iframe-left-btn iframe-direction-btn">
                    <i class="el-icon-d-arrow-left"></i>
                </span>
                <span class="iframe-btn iframe-left-btn iframe-home-btn">
                    <i class="el-icon-house"></i>
                </span>
                <span class="iframe-btn iframe-left-btn iframe-page-btn">会员列表<i class="el-icon-close"></i></span>
                <span class="iframe-btn iframe-left-btn iframe-page-btn">会员列表<i class="el-icon-close"></i></span>
                <span class="iframe-btn iframe-left-btn iframe-page-btn">会员列表<i class="el-icon-close"></i></span>
                <span class="iframe-btn iframe-left-btn iframe-page-btn">会员列表<i class="el-icon-close"></i></span>
                <span class="iframe-btn iframe-left-btn iframe-page-btn">会员列表<i class="el-icon-close"></i></span>
            </div>
            <div class="iframe-title-right">
                <span class="iframe-btn iframe-right-btn iframe-home-btn">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="iframe-close-btn">关闭当前标签页</el-dropdown-item>
                            <el-dropdown-item class="iframe-close-btn">关闭其他标签页</el-dropdown-item>
                            <el-dropdown-item class="iframe-close-btn">关闭所有标签页</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
                <span class="iframe-btn iframe-right-btn iframe-home-btn">
                    <i class="el-icon-d-arrow-right"></i>
                </span>
            </div>
            <span class="iframe-title-end"></span>
        </div>
    </div>
</template>
<style>
    .iframe-box{
        background-color: #009688;
        height: calc(100% - 60px);
    }
    .iframe-box *{
        margin: 0;
        padding: 0;
    }
    .iframe-btn{
        display: inline-block;
        height: 38px;
        line-height: 38px;
        max-width: 100px;
        padding: 0 11px;
    }
    .iframe-btn:hover{
        background-color: #F6F6F6;
    }
    .iframe-btn *{
        display: inline-block;
    }
    .iframe-btn i{
        vertical-align: middle;
        font-size: 20px;
    }
    .iframe-btn i:hover{
        color: #009688;
    }
    .el-icon-close{
        font-size: 16px !important;
        position: relative;
        top: -1px;
        left: 5px;
    }
    .iframe-title{
        width: 100%;
        height: 38px;
        background-color: #FFF;
    }
    .iframe-title-left{
        float: left;
        display: flex;
        flex-direction: row;
    }
    .iframe-title-right{
        float: right;
        display: flex;
        flex-direction: row-reverse;
    }
    .iframe-close-btn:hover{
        color: #009688 !important;
    }
    .iframe-title-end{
        clear: both;
    }
</style>
<script>
    export default {
        name: "iFrameBox",
        props: [],
        data() {
            return {

            };
        }
    }
</script>