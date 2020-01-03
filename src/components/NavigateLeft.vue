<template>
    <div class="navigate-left-box">
        <el-menu default-active="1" class="el-menu-vertical-demo menu-left-title" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#fff" :collapse="isCollapse">
            <el-menu-item class="logo" index="1">
                <i class="el-icon-s-grid"></i>
                <span slot="title">VEAdmin v1.0 beta</span>
            </el-menu-item>
        </el-menu>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu-left-bottom" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#fff" :collapse="isCollapse">
            <menuTree v-for="(item, index) in menuList" :key="index" :k="index" :v="item" :isTop="true"></menuTree>
        </el-menu>
    </div>
</template>
<style>
    .navigate-left-box{
        width: 100%;
        height: 100%;
    }
    .menu-left-title{
        height: 60px !important;
    }
    .menu-left-bottom{
        height: calc(100% - 60px) !important;
    }
    .el-menu-vertical-demo{
        border: none;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        overflow: hidden;
        overflow-y: scroll;
    }
    .el-menu-vertical-demo::-webkit-scrollbar { width: 0 !important }
    .logo{
        background-color: #226A62 !important;
        height: 60px;
    }
    .is-active{
        background-color: #009688 !important;
    }
</style>
<script>
    import menuTree from './MenuTree.vue';
    export default {
        name: 'navigateLeft',
        props: ['leftNavFold'],
        components: {
            menuTree: menuTree
        },
        data() {
            return {
                isCollapse: this.leftNavFold,
                menuList: [
                    {
                        title: '会员管理',
                        iclass: 'el-icon-s-grid',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                title: '会员列表',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '会员删除',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '会员管理',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: [
                                    {
                                        title: '会员列表',
                                        iclass: 'el-icon-s-grid',
                                        location: 'http://www.qq.com',
                                        childs: []
                                    },
                                    {
                                        title: '会员删除',
                                        iclass: 'el-icon-s-grid',
                                        location: 'http://www.qq.com',
                                        childs: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '订单管理',
                        iclass: 'el-icon-s-grid',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                title: '订单列表',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            }
                        ]
                    },
                    {
                        title: '管理员管理',
                        iclass: 'el-icon-s-grid',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                title: '管理员列表',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '角色管理',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '权限分类',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '权限管理',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            }
                        ]
                    },
                    {
                        title: '系统统计',
                        iclass: 'el-icon-s-grid',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                title: '折线图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '柱状图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '地图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '饼图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '雷达图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: 'k线图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '热力图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                title: '仪表图',
                                iclass: 'el-icon-s-grid',
                                location: 'http://www.qq.com',
                                childs: []
                            }
                        ]
                    },
                    {
                        title: '测试菜单',
                        iclass: 'el-icon-s-grid',
                        location: 'http://www.qq.com',
                        childs: []
                    }
                ]
            };
        },
        created(){
            console.log(this.leftNavFold);
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            changeData: function () {
                this.isCollapse = this.leftNavFold
            }
        },
        watch: {
            leftNavFold: "changeData"
        }
    }
</script>