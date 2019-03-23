<template>
  <div>
     <city-header></city-header>
     <city-search></city-search>
     <city-list></city-list>
     <city-alphabel></city-alphabel>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabel from './components/Alphabel'
export default{
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabel
  }
}
</script>

<style lang="stylus" scoped>
</style>
