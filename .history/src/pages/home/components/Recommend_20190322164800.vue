<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item">
          <img class="item-img" src='http://img1.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg' />
          <div class="item-info">
             <p class="item-title">郑州方特欢乐世界</p>
             <p class="item-desc">7151条评论</p>
             <button class="item-button">查看详情</button>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
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
      .item-title
        padding: .26rem
        height: .44rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
</style>
