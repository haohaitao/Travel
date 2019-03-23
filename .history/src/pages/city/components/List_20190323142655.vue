<template>
  <div class="list">
     <div class="area">
         <div class="title">当前城市</div>
     </div>
     <div class="area">
         <div class="title">热门城市</div>
     </div>
     <div class="area">
         <div class="title">A</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .title
    box-sizing: border-box
    line-height: .6rem
    background: #eee
    color: #666
    font-size: .24rem;
    margin: .24rem .3rem;
</style>
