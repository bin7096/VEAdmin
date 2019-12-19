<template class="box">
    <div class="box">
        <navigateTop :leftnavfold="leftNavFold" @foldChanged="test"></navigateTop>
        <navigateLeft :leftnavfold="leftNavFold"></navigateLeft>
    </div>
</template>
<style>
    #app,.box{
        width: 100%;
        height: 100%;
    }
</style>
<script>
import navigateTop from '../components/NavigateTop';
import navigateLeft from '../components/NavigateLeft';
export default {
    name: 'App',
    data(){
        return {
            leftNavFold : true,
        };
    },
    components: {
        "navigateTop": navigateTop,
        "navigateLeft": navigateLeft
    },
    methods: {
        test: function (val) {
            this.$nextTick(function () {
                this.leftNavFold = val;
                console.log(this.leftNavFold);
            });
        }
    }
}
</script>