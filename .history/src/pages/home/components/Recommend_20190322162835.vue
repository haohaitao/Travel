<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item">
          <div class="item-img-wrapper">
              <img class="item-img" src='' />
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
  .recommend-title
    margin-top: .2rem
    line-height : .8rem
    background: #eeeeee
    text-indent: .2rem
</style>
