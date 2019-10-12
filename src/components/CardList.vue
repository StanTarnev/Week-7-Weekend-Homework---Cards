<template lang="html">
  <!-- <div class="">
  <h3>Select a Card:</h3>
  <select v-model="selectedCard">
  <option disabled value="">Select a card...</option>
  <option v-for="card in cards.cards" :value="card">{{card.name}}</option>
</select>
</div> -->
<ul>
  <!-- <li v-for="(card, index) in cards" :card="card" :key="index"></li> -->
  <list-entry v-for="(card, index) in cards.cards" :card="card" :key="index"></list-entry>
</ul>

</template>

<script>

import ListEntry from './ListEntry.vue';

export default {
  name: 'card-list',
  // data(){
  //   return {
  //     'selectedCard': {}
  //   }
  // },
  props: ['cards'],
  components: {
  'list-entry': ListEntry
  }
}
</script>

<style lang="css" scoped>
</style>
