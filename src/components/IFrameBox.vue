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
                <span class="iframe-page-btn-box">
                    <span class="iframe-btn iframe-left-btn iframe-page-btn" v-for="(item, index) in btnList" :key="index" @click="$parent.selectPage(index)">
                        {{item.name}}<i class="el-icon-close"></i>
                    </span>
                </span>
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
    .iframe-title{
        width: 100%;
        height: 38px;
        background-color: #FFF;
    }
    .iframe-title-left, .iframe-page-btn-box{
        float: left;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        width: calc(100% - 84px);
    }
    .iframe-page-btn-box{
        overflow-x: auto;
    }
    .iframe-page-btn-box::-webkit-scrollbar {
        width: 0 !important;
    }
    .iframe-title-right{
        float: right;
        display: flex;
        flex-direction: row-reverse;
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
    .iframe-page-btn-box .iframe-btn{
        min-width: 80px;
    }
    .el-icon-close{
        font-size: 16px !important;
        position: relative;
        top: -1px;
        left: 5px;
    }
    .iframe-close-btn:hover{
        color: #009688 !important;
    }
    .iframe-title-end{
        clear: both;
    }
</style>
<script>
    import {down} from '../assets/js/mouse.js';
    export default {
        name: "iFrameBox",
        props: ['iFrameBtnList'],
        data() {
            return {
                btnList: this.iFrameBtnList
            };
        },
        mounted() {
            document.addEventListener('mousedown', down);
        },
    }
</script>