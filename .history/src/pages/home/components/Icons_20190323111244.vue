<template>
 <div class="icons">
    <swiper :options="swiperOption" v-if="showIcon">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon"  v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
      // iconList: [
      //   {
      //     id: '0001',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //     desc: '景点门票'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //     desc: '一日游'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //     desc: '郑州必游'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
      //     desc: '郑州方特'
      //   },
      //   {
      //     id: '0005',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      //     desc: '踏青赏花'
      //   },
      //   {
      //     id: '0006',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
      //     desc: '泡温泉'
      //   },
      //   {
      //     id: '0007',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      //     desc: '动植物园'
      //   },
      //   {
      //     id: '0008',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
      //     desc: '亲子游'
      //   },
      //   {
      //     id: '0009',
      //     imgUrl:
      //       'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
      //     desc: '亲子游'
      //   }
      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcon () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixni.styl'
    .icons >>> .swiper-container
      height: 0
      padding-bottom: 50%
    .swiper-pagination swiper-pagination-bullets
      bottom: -2px;
    .icons
      margin-top: .1rem
      .icon
         position: relative
         overflow: hidden
         float: left
         width: 25%
         height: 0
         padding-bottom: 25%
         .icon-img
           position: absolute
           top: 0
           left: 0
           right: 0
           bottom: .44rem
           box-sizing: border-box
           padding: .1rem
           .icon-img-content
              height: 100%
              display: block
              margin: 0 auto
         .icon-desc
             position: absolute
             left: 0
             right: 0
             bottom: 0
             height: .44rem
             text-align: center
             line-height: .44rem
             color: $darkTextColor
             ellopsis()
</style>
