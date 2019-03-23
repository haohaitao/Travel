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
  .list 
    background: #eee   
    .title
      line-height: .6rem
      color: #666
      font-size: .24rem;
      margin: .24rem .3rem;
</style>
