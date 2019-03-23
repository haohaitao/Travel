<template>
  <div class="list">
     <div class="area">
         <div class="title border-topbottom">当前城市</div>
         <div class="button-list">
             <div class="button">北京</div>
         </div>
         <div class="button-list">
             <div class="button">北京</div>
         </div>
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
    .button-list
      width: 33.3%
      height: .9rem;
      line-height: .9rem;
      font-size: .28rem;
      text-align: center;
      border-bottom: .02rem solid #ddd;
      margin-bottom: -1px;
      position: relative;
      z-index: 10;
      color: #212121;
</style>
