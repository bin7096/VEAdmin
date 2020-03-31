<template class="iframes-box">
    <div class="iframes-box-div">
        <div class="iframes-list-view" :class="$store.state.layer.showIndex === null ? 'iframes-list-view-hide' : ''">
            <div class="iframe-item-window" v-for="(item, index) in getIframeLayerList" :key="index" :class="$store.state.layer.showIndex === index ? 'iframe-item-window-show' : ''">
                <div class="iframe-item-window-title">
                    <span class="iframe-item-title-left">{{item.title}}</span>
                    <span class="iframe-item-title-right">
                        <a class="iframe-item-btn iframe-item-btn-hide" @click="$store.commit('layer/hideWindow')"><i class="el-icon-minus"></i></a>
                        <a class="iframe-item-btn iframe-item-btn-close" @click="$store.dispatch('layer/removeLayerByIndex', index)"><i class="el-icon-close"></i></a>
                    </span>
                    <span style="clear:both;"></span>
                </div>
                <iframe class="iframe-item-view" :src="item.src" frameborder="0"></iframe>
            </div>
        </div>
        <div :class="getOpenStatus ? 'iframes-list-tab' : 'iframe-element-hide'">
            <div class="iframe-item-tab" v-for="(item, index) in getIframeLayerList" :key="index" @click="$store.dispatch('layer/selectWindowByIndex', index)">
                <span class="iframe-item-title iframe-list-btn">{{item.title}}</span>
                <span class="iframe-item-close iframe-list-btn" @click="$store.dispatch('layer/removeLayerByIndex', index)"><i class="el-icon-close"></i></span>
            </div>
            <a class="iframe-list-btn iframes-bottom-btn" @click="$store.commit('layer/closeList')">
                <i class="el-icon-caret-right"></i> 关闭 iframe-layer 列表
            </a>
        </div>
        <a class="iframe-list-btn iframes-left-btn" @click="$store.commit('layer/openList')"  v-if="!getOpenStatus">
            <i class="el-icon-caret-left"></i>
        </a>
    </div>
</template>
<style>
    .iframes-box, .iframes-box-div{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .iframes-list-view{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
    }
    .iframes-list-view-hide{
        display: none;
    }
    .iframe-item-window{
        width: 800px;
        height: 600px;
        margin: auto;
        display: none;
    }
    .iframe-item-window-show{
        display: block;
    }
    .iframe-item-window *{
        background-color: #FFF;
        color: #000;
    }
    .iframe-item-window-title{
        width: 100%;
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        border-bottom: 1px solid #CCC;
    }
    .iframe-item-title-left{
        float: left;
        padding-left: .5rem;
    }
    .iframe-item-title-right{
        float: right;
        padding: 0 .5rem;
        font-weight: bold;
    }
    .iframe-item-btn{
        margin: 0 .2rem;
    }
    .iframe-item-btn:hover{
        user-select: none;
        cursor: pointer;
        color: #009688;
    }
    .iframe-item-view{
        width: 100%;
        height: calc(100% - 38px);
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
        // 获取iframe-layer列表开启状态
        getOpenStatus() {
            return this.$store.state.layer.listOpenStatus;
        },
        // 获取已打开的iframe-layer列表
        getIframeLayerList() {
            return this.$store.state.layer.iframeLayerList;
        },
    },
    methods: {
        
    }
}
</script>