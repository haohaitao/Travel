<template>
  <ul class="list">
    <li class="item" v-for="item of letter" 
                     :key="item"
                     @touchstart="handleTouchStart"
                     @touchmove="handleTouchMove"
                     @touchend="handleTouchEnd"
                     @click="handleLetterClick"
    >
    {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabel',
  props: {
    cities: Object
  },
  computed: {
    letter() {
      const letters = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove () {

    },
    handleTouchEnd () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
