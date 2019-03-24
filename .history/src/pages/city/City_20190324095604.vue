<template>
  <div>
     <city-header></city-header>
     <city-search></city-search>
     <city-list :cities="cities" :hot="hotCities"></city-list>
     <city-alphabel :cities="cities" @change="handleLetterChange"></city-alphabel>
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
      cities: {},
      hotCities: [],
      letter: []
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
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
  }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
