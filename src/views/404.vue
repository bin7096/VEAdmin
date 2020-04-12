<template class="box">
  <div class="box"><span class="number">4 0 4</span>&nbsp;&nbsp;not  found</div>
</template>
<style>
  html, body, .box{
    width: 100%;
    height: 100%;
  }
  .box{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
    font-weight: bold;
  }
  .number{
    color: orange;
  }
</style>
<script>
export default {
  name: 'App',
  mounted() {
    const str = this.$store.state.index.styleColor;
    console.error('this.$store.state.index.styleColor:', str);
  }
}
</script>
