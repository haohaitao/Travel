<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名字或拼音">
    </div>
    <div class="search-content">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.name">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyworld) > -1 || 
                value.name.indexOf(this.keyword) > -1) {
                  result.push(value)
                }
          });
        }
        this.list = result
      }, 100)
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
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
