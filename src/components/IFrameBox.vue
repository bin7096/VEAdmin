<template>
    <div class="iframe-box">
        <div class="iframe-title">
            <span class="iframe-btn iframe-direction-btn">
                <i class="el-icon-d-arrow-left"></i>
            </span>
        </div>
    </div>
</template>
<style>
    .iframe-box{
        background-color: #009688;
        height: calc(100% - 60px);
    }
    .iframe-btn{
        display: inline-block;
        height: 38px;
        line-height: 38px;
        width: 42px;
        text-align: center;
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
    .iframe-title{
        width: 100%;
        height: 38px;
        background-color: #FFF;
    }
</style>