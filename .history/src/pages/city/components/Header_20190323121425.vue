<template>
  <div class="header">
      <span class="iconfont back-iconfont">&#xe6a4;</span>城市选择
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
  overflow: hidden
  height: .86rem
  line-height: .86rem
  text-align: center
  color: #ffffff
  background: $bgColor
  .back-iconfont
    float: left
    text-align: center
    font-size: 0.65rem
</style>
