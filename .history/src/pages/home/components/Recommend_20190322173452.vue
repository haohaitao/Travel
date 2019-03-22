<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom"  v-for="item of recommenrList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p class="item-desc">{{item.desc}}</p>
             <p class="item-price">{{item.price}}</p>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommenrList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg',
        title: '郑州方特欢乐世界',
        desc: '这是一场盛大的欢乐盛宴！这是一个充满神奇的梦幻乐园！这是一个未来科幻的探险王国！梦幻奇妙的世界，等待你探秘！',
        price: '￥260'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/f3/f3406639b8e12c6ba3.img.jpg_200x200_8b6b1f2f.jpg',
        title: '郑州方特梦幻王国',
        desc: '要欢乐，去方特！欢迎加入方特梦幻之旅！',
        price: '￥240'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/12/317f9a83c526f54ac8d65eac.jpg_200x200_47220a8b.jpg',
        title: '古柏渡飞黄风景区',
        desc: '千年来孤柏嘴作为黄河的渡口，等待着来往匆匆的路人，而今峰回路转，历史给予了他新的使命——国家南水北调中线总干渠上最关键的建筑——穿黄工程就横亘在这里！',
        price: '￥170'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixni.styl'
  .title
    margin-top: .2rem
    line-height : .8rem
    background: #eeeeee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        padding: .16rem
        height: .44rem
        color: #212121
        font-size: .32rem
        line-height: .44rem
        ellopsis()
      .item-desc
        color: #616161
        font-size: .24rem
        line-height: .34rem
        padding-left: .16rem
        ellopsis()
      .item-button
        line-height: .44rem
        margin-top: .1rem
        background: #ff9300
        border-radius: .06rem
        color: #ffffff
        padding-left: .16rem
</style>
