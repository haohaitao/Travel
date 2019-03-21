<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-iconfont">&#xe6a4;</div></div>
    <div class="header-input"><span class="iconfont">&#xeb9c;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-iconfont">&#xe6aa;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex;
    line-height:.86rem;
    background :$bgColor;
    color : #fff;
    .header-left
      float:left;
      width: .64rem;
      .back-iconfont
        text-align: center;
        font-size: .65rem;
    .header-input
      flex:1;
      height:.64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      background: #fff;
      color:#ccc;
      height:.64rem;
      line-height:.64rem;
      padding-left:.2rem;
      border-radius: .1rem;
    .header-right
      float:right;
      width: 1.24rem;
      text-align: center;
      .arrow-iconfont
        margin-left:.1rem;
        font-size:.24rem
</style>
