<template lang="html">
  <li v-on:click="handleClick">{{card.name}}</li>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'list-entry',
  data(){
    return {
      'selectedCard': {}
    }
  },
  props: ['card'],
  methods: {
    handleClick(){
      eventBus.$emit('card-selected', this.card)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
