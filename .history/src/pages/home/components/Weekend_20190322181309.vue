<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
        <li class="item border-bottom"  v-for="item of recommenrList" :key="item.id">
          <div>
              <img class="item-img" :src="item.imgUrl" />
          </div>         
          <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p class="item-desc">{{item.desc}}</p>
             <div class="item-price">
                 <span class="before-price">￥<em class="how-price">{{item.price}}</em></span>起
             </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommenrList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
        title: '郑州打卡',
        desc: '日月轮回，孕育出新的美丽'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
        title: '城中碧玉万仙山',
        desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1603/eb/7f570846b929d8.jpg_r_640x214_7caca563.jpg',
        title: '本地人最爱玩',
        desc: '洛阳牡丹，美艳群芳'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ac/4c5317165807.jpg_r_640x214_f7431b62.jpg',
        title: '发现周末好玩',
        desc: '周末，想去哪儿就去哪儿'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/2c/e5e2b086fc0c60.jpg_r_640x214_811a2da7.jpg',
        title: '石刻艺术宝库',
        desc: '这里是中国石刻艺术宝库，石窟的规模大、艺术精湛，石刻艺术奇葩，是石刻艺术的典范之作。'
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
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
    .item-price
        position: relative
        margin-top: .22rem
        color: #616161
        font-size: .24rem
        line-height: .4rem
      .how-price
        font-size: .4rem
      .before-price
        color: #ff8300
        padding-left: .16rem
</style>
