<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<style>
    html, body, #app{
        width: 100%;
        height: 100%;
        /* -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%); */
    }
</style>
<script>
export default {
  name: 'App'
}
</script>
