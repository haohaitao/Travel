<template>
  <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名字或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    background: $bgColor
    height: .72rem
    padding: .1rem
    .search-input
      width: 100%
      text-align: center
      height: .62rem
      line-height: .62rem
      border-radius: .06rem
</style>
