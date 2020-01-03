<template>
    <div class="navigate-header">
        <el-menu :default-active="activeIndex" class="el-menu-demo navigate-header-left" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#fff">
            <el-menu-item index="1" @click="$parent.change(!isCollapse)" :title="isCollapse ? '打开侧边栏' : '折叠侧边栏'">
                <i class="el-icon-s-unfold" v-if="isCollapse"></i>
                <i class="el-icon-s-fold" v-else></i>
            </el-menu-item>
            <el-menu-item index="2" title="前台">
                <a href="/"><i class="el-icon-view"></i></a>
            </el-menu-item>
        </el-menu>
        <el-menu :default-active="activeIndex" class="el-menu-demo navigate-header-right" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#fff">
            <el-submenu index="3" class="user-select">
                <template slot="title">UserName</template>
                <el-menu-item index="3-1"><i class="el-icon-user"></i>基本资料</el-menu-item>
                <el-menu-item index="3-2"><i class="el-icon-edit"></i>修改密码</el-menu-item>
                <el-menu-item index="3-3"><i class="el-icon-switch-button"></i>退出</el-menu-item>
            </el-submenu>
            <el-menu-item index="1" class="is-active" v-on:click="$parent.closeFullScreen();" title="关闭全屏" v-if="isFull">
                <i class="layui-icon layui-icon-screen-restore"></i>
            </el-menu-item>
            <el-menu-item index="1" class="is-active" v-on:click="$parent.requestFullScreen();" title="全屏显示" v-else>
                <i class="layui-icon layui-icon-screen-full"></i>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<style>
    .navigate-header{
        width: 100%;
        display: flex;
        background-color: #545c64;
    }
    .navigate-header-right{
        position: absolute;
        right: 5px;
        top: 0;
    }
    .navigate-header ul{
        background-color: rgba(0,0,0,0) !important;
    }
    .el-menu.el-menu--horizontal{
        border: none !important;
    }
    .user-select{
        width: 200px;
        text-align: center;
    }
    .is-active{
        background-color: #009688 !important;
    }
</style>
<script>
export default {
    name: "navigateTop",
    props: ['leftNavFold', 'isFullScreen'],
    data() {
        return {
            activeIndex: '0',
            isCollapse: this.leftNavFold,
            isFull: this.isFullScreen
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        changeData: function () {
            this.isCollapse = this.leftNavFold;
            this.isFull = this.isFullScreen;
        }
    },
    watch: {
        leftNavFold: "changeData",
        isFullScreen: "changeData"
    }
}
</script>