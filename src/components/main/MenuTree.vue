<template>
    <el-submenu v-if="item.childs.length > 0" :index="item.id">
        <template slot="title" @click="$store.dispatch('index/addIFrame', {title : item.title, src : item.location})">
            <i :class="item.iclass"></i>
            <span slot="title">{{item.title}}</span>
        </template>
        <menuTree v-for="(v, k) in item.childs" :key="k" :v="v" :isTop="false"></menuTree>
    </el-submenu>
    <el-menu-item v-else :index="item.id" @click="$store.dispatch('index/addIFrame', {id : item.id ,title : item.title, src : item.location})">
        <i :class="item.iclass"></i>
        <span slot="title">{{item.title}}</span>
    </el-menu-item>
</template>
<script>
import menuTree from './MenuTree';
export default {
    name: "menuTree",
    props: ['v', 'isTop'],
    components: {
        menuTree: menuTree
    },
    data (){
        return {
            item: this.v,
            isTopItem: this.isTop,
        };
    },
    methods: {
        openIFrame: function (src) {
            this.$parent.openIFrame(src);
        }
    },
}
</script>