<template lang="html">
  <div class="">
    <h3>Select a Card:</h3>
    <select v-model="card" v-on:change="handleChoice">
      <option disabled value="">Select a card...</option>
      <option v-for="card in cards.cards" :value="card">{{card.name}}</option>
    </select>
  </div>
  <!-- <ul>
  <list-entry v-for="(card, index) in cards.cards" :card="card" :key="index"></list-entry>
</ul> -->

</template>

<script>
import { eventBus } from '../main.js'
import ListEntry from './ListEntry.vue';

export default {
  name: 'card-list',
  data(){
    return {
      'card': null
    }
  },
  props: ['cards'],
  methods: {
    handleChoice(){
      eventBus.$emit('card-selected', this.card)
    }
  },
  components: {
    'list-entry': ListEntry
  }
}
</script>

<style lang="css" scoped>
</style>
