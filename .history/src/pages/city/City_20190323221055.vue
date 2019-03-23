<template>
  <div>
     <city-header></city-header>
     <city-search></city-search>
     <city-list :city="cities"></city-list>
     <city-alphabel></city-alphabel>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabel from './components/Alphabel'
import axios from 'axios'
export default{
  name: 'City',
  data () {
    return {
      cities:[]
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabel
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfo)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
