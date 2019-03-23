<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-iconfont">&#xe6a4;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xeb9c;</span>输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-iconfont">&#xe6aa;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
  display: flex
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  .header-left
    float: left
    width: 0.64rem
    .back-iconfont
      text-align: center
      font-size: 0.65rem
  .header-input
    flex: 1
    margin-top: 0.12rem
    margin-left: 0.2rem
    background: #fff
    color: #ccc
    height: 0.64rem
    line-height: 0.64rem
    padding-left: 0.2rem
    border-radius: 0.1rem
  .header-right
    float: right
    width: 1.24rem
    text-align: center
    color: #ffffff
    .arrow-iconfont 
      margin-left: 0.1rem
      font-size: 0.24rem
</style>
