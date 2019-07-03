<template>
<div>
  <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg">
  <div class="banner-info">
      <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63e;</span>
          {{this.bannerImg.length}}
      </div>
      <div class="banner-title">{{this.sightName}}</div>
  </div>
  </div>
  <fade-animation>
    <public-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></public-gallary>
  </fade-animation>
  </div>
</template>

<script>
import PublicGallary from '@/public/gallary/Gallary'
import FadeAnimation from '@/public/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    PublicGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        width:.8rem
        height: .4rem
        margin-left: .2rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
</style>
