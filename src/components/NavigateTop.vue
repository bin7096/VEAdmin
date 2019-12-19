<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#67C23A">
        <el-menu-item class="logo">VEAdmin v1.0</el-menu-item>
        <el-menu-item @click="changeFold()">
            <i class="el-icon-s-unfold" v-if="isCollapse"></i>
            <i class="el-icon-s-fold" v-else></i>
        </el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
</template>
<style>
    .logo{
        background-color: #67C23A !important;
    }
</style>
<script>
export default {
    props: ['leftnavfold'],
    data() {
        return {
            activeIndex: '1',
            isCollapse: this.leftnavfold
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        changeFold: function () {
            this.$emit("foldChanged", !this.isCollapse);
        },
        changeData: function () {
            this.isCollapse = this.leftnavfold;
        }
    },
    watch: {
        leftnavfold: "changeData"
    }
}
</script>