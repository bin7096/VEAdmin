<template>
    <el-submenu v-if="item.childs.length > 0" index="index">
        <template slot="title">
            <i :class="item.iclass"></i>
            <span slot="title">{{item.title}}</span>
        </template>
        <menuTree v-for="(v, k) in item.childs" :key="k" :k="k" :v="v" :isTop="false"></menuTree>
    </el-submenu>
    <el-menu-item v-else index="index">
        <i :class="item.iclass"></i>
        <span slot="title">{{item.title}}</span>
    </el-menu-item>
</template>
<script>
import menuTree from './MenuTree';
export default {
    name: "menuTree",
    props: ['k', 'v'],
    components: {
        menuTree: menuTree
    },
    data (){
        return {
            index: this.k,
            item: this.v
        }
    }
}
</script>