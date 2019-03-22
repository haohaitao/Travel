<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item">
          <div class="item-img-wrapper">
              <img class="item-img" src='http://img1.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg' />
          </div>
          <div class="item-info">
             <p class="item-title"></p>
             <p class="item-desc"></p>
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
    background: red
    .item-img
      overflow: hidden
      padding-bottom: 50%
      width: 50%
</style>
