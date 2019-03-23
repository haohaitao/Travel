<template>
  <div class="header">
    <router-link to='/'>
      <span class="iconfont back-iconfont">&#xe6a4;</span>
    <router-link>
        城市选择
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
  font-size: .32rem
  .back-iconfont
    float: left
    font-size: .65rem
</style>
