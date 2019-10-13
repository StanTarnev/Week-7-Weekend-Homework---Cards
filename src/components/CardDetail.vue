<template lang="html">
  <div v-if="card">
    <h3>{{card.name}}</h3>
    <img :src='card.imageUrl'/>
    <p>{{card.rarity}}</p>
    <p>Artist: {{card.artist}}</p>
    <button v-on:click="removeFromList">Remove Card</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'card-detail',
  props:['card'],
  methods: {
    removeFromList() {
      eventBus.$emit('card-removed', this.card)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
