<template>
    <div class="navigate-left-box">
        <el-menu default-active="1" class="el-menu-vertical-demo menu-left-title" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#fff" :collapse="isCollapse">
            <el-menu-item class="logo" index="1">
                <i class="el-icon-s-platform"></i>
                <span slot="title">VEAdmin v1.0 beta</span>
            </el-menu-item>
        </el-menu>
        <el-menu default-active="1" class="el-menu-vertical-demo menu-left-bottom" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#fff" :collapse="isCollapse">
            <menuTree v-for="(item, index) in menuList" :key="index" :v="item" :isTop="true"></menuTree>
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
                        id: '1',
                        title: '会员管理',
                        iclass: 'el-icon-user-solid',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                id: '1-1',
                                title: '会员列表',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '1-2',
                                title: '会员删除',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '1-3',
                                title: '会员管理',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: [
                                    {
                                        id: '1-3-1',
                                        title: '会员列表',
                                        iclass: '',
                                        location: 'http://www.qq.com',
                                        childs: []
                                    },
                                    {
                                        id: '1-3-2',
                                        title: '会员删除',
                                        iclass: '',
                                        location: 'http://www.qq.com',
                                        childs: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '2',
                        title: '订单管理',
                        iclass: 'el-icon-s-order',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                id: '2-1',
                                title: '订单列表',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            }
                        ]
                    },
                    {
                        id: '3',
                        title: '管理员管理',
                        iclass: 'el-icon-s-custom',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                id: '3-1',
                                title: '管理员列表',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '3-2',
                                title: '角色管理',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '3-3',
                                title: '权限分类',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '3-4',
                                title: '权限管理',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            }
                        ]
                    },
                    {
                        id: '4',
                        title: '系统统计',
                        iclass: 'el-icon-s-data',
                        location: 'http://www.qq.com',
                        childs: [
                            {
                                id: '4-1',
                                title: '折线图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-2',
                                title: '柱状图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-3',
                                title: '地图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-4',
                                title: '饼图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-5',
                                title: '雷达图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-6',
                                title: 'k线图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-7',
                                title: '热力图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            },
                            {
                                id: '4-8',
                                title: '仪表图',
                                iclass: '',
                                location: 'http://www.qq.com',
                                childs: []
                            }
                        ]
                    },
                    {
                        id: '5',
                        title: '测试菜单',
                        iclass: 'el-icon-info',
                        location: 'http://www.qq.com',
                        childs: []
                    }
                ]
            };
        },
        created(){
            // console.log(this.leftNavFold);
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log('handleOpen', key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
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