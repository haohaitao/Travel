<template>
  <div class="hello">
    <span>我是top250页面</span><br/>
    <span><router-link to="/">首页</router-link></span>
    <span><router-link to="/top250">top250</router-link></span>
    <span><router-link to="/very">值得一看</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
