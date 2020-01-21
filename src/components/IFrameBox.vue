<template>
    <div class="iframe-box">
        <div class="iframe-title">
            <div class="iframe-title-left">
                <span class="iframe-btn iframe-left-btn iframe-direction-btn" @click="prev('iframe_page_btn_box')">
                    <i class="el-icon-d-arrow-left"></i>
                </span>
                <span class="iframe-btn iframe-left-btn iframe-home-btn">
                    <i class="el-icon-house"></i>
                </span>
                <span class="iframe-page-btn-box" id="iframe_page_btn_box">
                    <span class="iframe-btn iframe-left-btn iframe-page-btn" v-for="(item, index) in getIFrameList" :key="index">
                        {{item.title}}<i class="el-icon-close iframe-close-btn" @click.stop="closeIFrame(index)"></i>
                    </span>
                </span>
            </div>
            <div class="iframe-title-right">
                <span class="iframe-btn iframe-right-btn">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="iframe-close-btn-right">关闭当前标签页</el-dropdown-item>
                            <el-dropdown-item class="iframe-close-btn-right">关闭其他标签页</el-dropdown-item>
                            <el-dropdown-item class="iframe-close-btn-right">关闭所有标签页</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
                <span class="iframe-btn iframe-right-btn" @click="next('iframe_page_btn_box')">
                    <i class="el-icon-d-arrow-right"></i>
                </span>
                <span class="iframe-btn iframe-right-btn">
                    <i class="el-icon-refresh"></i>
                </span>
            </div>
            <span class="iframe-title-end"></span>
        </div>
        <div class="iframe-body">
            <iframe v-for="(item, index) in getIFrameList" :key="index" :src="item.src" frameborder="0" :class="$store.state.index.activeIFrameIndex === index ? '' : 'iframe-hidden'"></iframe>
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
    .iframe-title *{
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }
    .iframe-title-left, .iframe-page-btn-box{
        float: left;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        width: calc(100% - 126px);
    }
    .iframe-page-btn-box{
        width: calc(100% - 84px);
        overflow-x: auto;
        border: none;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        scrollbar-width: none;
    }
    .iframe-page-btn-box::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
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
    .iframe-page-btn{
        width: 108px;
        min-width: 108px !important;
    }
    .iframe-close-btn{
        font-size: 16px !important;
        float: right;
        position: relative;
        top: 11px;
    }
    .iframe-close-btn-right{
        font-size: 14px !important;
    }
    .iframe-close-btn:hover, .iframe-close-btn-right:hover{
        color: #009688 !important;
    }
    .iframe-title-end{
        clear: both;
    }
    .iframe-body{
        width: 100%;
        height: calc(100% - 38px);
    }
    .iframe-body iframe{
        width: 100%;
        height: 100%;
        background-color: #FFF;
    }
    .iframe-body .iframe-hidden{
        display: none;
    }
</style>
<script>
    import {mouseInit, prev, next, resize as scrollResize, changeLength} from '../assets/js/linearDrag.js';
    export default {
        name: "iFrameBox",
        mounted() {
            mouseInit('iframe_page_btn_box', 130, 'X', this.$store.state.index.iFrameList.length);
        },
        computed: {
            getIFrameList(){
                changeLength('iframe_page_btn_box', this.$store.state.index.iFrameList.length);
                return this.$store.state.index.iFrameList;
            }
        },
        methods: {
            prev: prev,
            next: next,
            closeIFrame: function (index) {
                this.$store.dispatch('index/rmIFrame', index);
                // console.log(index);
                // this.iFrameBtnList.splice(index, 1);
                // console.log(this.iFrameBtnList);
                // this.$parent.selectPage(index);
                // changeLength('iframe_page_btn_box', this.btnList.length);
            }
        },
    }
</script>