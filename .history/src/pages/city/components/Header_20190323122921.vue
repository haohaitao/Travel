<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-iconfont">&#xe6a4;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: .86rem
  line-height: .86rem
  text-align: center
  color: #ffffff
  background: $bgColor
  font-size: .32rem
  .back-iconfont
    position: absolute
    font-size: .65rem
    color: #fff
    top: 0
    left:0
    width: .64rem
</style>
