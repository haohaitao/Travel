<template>
  <div class="list">
     <div class="area">
         <div class="title border-topbottom">当前城市</div>
         <div class="button-list">
             <div class="button">北京</div>
         </div>
     </div>
     <div class="area">
         <div class="title border-topbottom">热门城市</div>
     </div>
     <div class="area">
         <div class="title border-topbottom">A</div>
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
    .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
    .title
      line-height: .44rem
      background: #eee
      color: #666
      font-size: .26rem
      padding-left: .2rem
      .button
        width: 33.3%
</style>
