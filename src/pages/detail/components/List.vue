<template>
  <div>
      <div class="item"
      v-for="(item, index) of List"
      :key="index"
      >
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
          <detail-list :List="item.children"></detail-list>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  // name主要是为了递归组件的调用
  name: 'DetailList',
  props: {
    List: Array
  },
  data () {
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    display: inline-block
    width: .36rem
    height: .36rem
    left: .06rem
    top: .06rem
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem
</style>
