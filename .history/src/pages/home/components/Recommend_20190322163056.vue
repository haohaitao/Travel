<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item">
          <div class="item-img-wrapper">
              <img class="item-img" src='' />
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
</style>
