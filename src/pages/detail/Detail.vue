<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :List="list"></detail-list>
      </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三观联票',
          children: [{
            title: '成人三观联票 - 某一连锁店销售'
          }]
        },{
          title: '成人五观联票'
        },{
          title: '成人八观联票'
        }]
      },{
        title: '学生票'
      },{
        title: '儿童票'
      },{
        title: '半价票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
