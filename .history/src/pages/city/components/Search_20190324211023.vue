<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名字或拼音">
    </div>
    <div class="search-content">
      <ul>
        <li>123</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    background: $bgColor
    height: .72rem
    padding: .1rem
    .search-input
      box-sizing: border-box
      width: 100%
      text-align: center
      height: .62rem
      line-height: .62rem
      border-radius: .06rem
      padding: 0 .1rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: green
</style>
