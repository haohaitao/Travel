<template>
  <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
          <div class="iconfont header-abs-back">&#xe6a4;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
          <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe6a4;</div>
          </router-link>
          景点详情
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
        showAbs: true,
        opacityStyle: {
            opacity: 0
        }
    }
  },
  methods: {
      handleScroll () {
          const top = document.documentElement.scrollTop
          if (top > 60) {
              let opacity = top / 140
              opacity = opacity > 1 ? 1 : opacity 
              this.opacityStyle = { opacity }
              this.showAbs = false
          } else {
              this.showAbs = true
          }
      }
  },
  // 进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面
  activated () {
      window.addEventListener('scroll', this.handleScroll)   //绑定监听
  },
  // deactivated 页面被替换为新的页面时候执行
  deactivated () {
      window.removeEventListener('scroll', this.handleScroll)   //解绑，因为window是一个全局对象
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      font-size: .65rem
      color: #fff
      top: 0
      left:0
      text-align: center
      width: .64rem      
</style>
