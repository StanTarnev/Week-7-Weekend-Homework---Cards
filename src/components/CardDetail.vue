<template lang="html">
  <div v-if="card">
    <h3>{{card.name}}</h3>
    <img :src='card.imageUrl'/>
    <p>{{card.rarity}}</p>
    <p>Artist: {{card.artist}}</p>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'card-detail',
  props:['card']
}
</script>

<style lang="css" scoped>
</style>
