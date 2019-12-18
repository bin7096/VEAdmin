<template class="box">
    <div class="box">
        <navigateTop v-bind:leftnavfold="leftNavFold"></navigateTop>
        <navigateLeft v-bind:leftnavfold="leftNavFold"></navigateLeft>
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
            leftNavFold : false,
        };
    },
    components: {
        "navigateTop": navigateTop,
        "navigateLeft": navigateLeft
    }
}
</script>