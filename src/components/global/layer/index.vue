<template class="iframes-box">
    <div class="iframes-box-div">
        <div class="iframes-view">

        </div>
        <div :class="getOpenStatus ? 'iframes-list-tab' : 'iframe-element-hide'">
            <div class="iframe-item-tab" v-for="(item, index) in getIframeLayerList" :key="index">
                <span class="iframe-item-title iframe-list-btn">{{item.title}}</span>
                <span class="iframe-item-close iframe-list-btn" @click="$store.dispatch('layer/rmIFrameLayer', index)"><i class="el-icon-close"></i></span>
            </div>
            <a class="iframe-list-btn iframes-bottom-btn" @click="closeList">
                <i class="el-icon-caret-right"></i> 关闭 iframe-layer 列表
            </a>
        </div>
        <a class="iframe-list-btn iframes-left-btn" @click="openList"  v-if="!getOpenStatus">
            <i class="el-icon-caret-left"></i>
        </a>
    </div>
</template>
<style>
    .iframes-box, .iframes-box-div{
        position: fixed;
        top: 0;
        left: 0;
    }
    .iframes-list-tab{
        height: calc(100% - 60px);
        width: 200px;
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: #545c64;
        overflow: hidden;
        overflow-y: scroll;
        border: none;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        scrollbar-width: none;
    }
    .iframes-list-tab::-webkit-scrollbar { width: 0 !important }
    .iframe-item-tab{
        width: 200px;
        height: 49px;
        border-bottom: 1px solid #FFF;
    }
    .iframe-item-tab:hover{
        background-color: #009688;
    }
    .iframe-item-title, .iframe-item-close{
        margin: 0;
        padding: 0;
        display: inline-block;
        height: 49px;
        line-height: 50px;
    }
    .iframe-item-title{
        width: 80%;
    }
    .iframe-item-close{
        width: 18%;
    }
    .iframe-element-hide{
        display: none;
        transition: all 10s ease-in;
    }
    .iframe-list-btn, .iframe-list-btn:hover{
        color: #FFF;
        text-align: center;
        user-select: none;
        cursor: pointer;
    }
    .iframes-left-btn{
        width: 12px;
        height: 200px;
        line-height: 200px;
        position: fixed;
        top: calc((100% - 160px) / 2);
        right: 0;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        font-size: 12px;
        background-color: #009688;
    }
    .iframes-bottom-btn, .iframes-bottom-btn:hover{
        width: 200px;
        height: 50px;
        line-height: 50px;
        position: fixed;
        bottom: 0;
        right: 0;
        font-size: 16px;
        background-color: #009688;
    }
</style>
<script>
export default {
    data() {
        return {}
    },
    computed: {
        // 获取左侧侧边栏开启状态-根据状态改变iframe-view宽度
        getleftStatus() {
            return this.$store.state.index.leftNavFold;
        },
        // 获取iframe-layer列表开启状态
        getOpenStatus() {
            return this.$store.state.layer.listOpenStatus;
        },
        // 获取已打开的iframe-layer列表
        getIframeLayerList() {
            return this.$store.state.layer.iframeLayerList;
        }
    },
    methods: {
        // 打开iframe-layer列表
        openList() {
            this.$store.commit('layer/openList');
        },
        // 关闭iframe-layer列表
        closeList() {
            this.$store.commit('layer/closeList');
        }
        
    }
}
</script>