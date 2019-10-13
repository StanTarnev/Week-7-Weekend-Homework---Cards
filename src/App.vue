<template lang="html">
  <div>
    <h1>Magic: The Gathering Cards</h1>
    <card-dropdown :cards="cards"></card-dropdown>
    <card-detail :card="selectedCard"></card-detail>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardDropdown from './components/CardDropdown.vue';
import CardDetail from  './components/CardDetail.vue';

export default {
  name: 'app',
  data(){
    return{
      cards: [],
      selectedCard: null
    }
  },
  mounted(){
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then(cards => this.cards = cards)

    eventBus.$on('card-selected', (card) => {
      this.selectedCard = card;
    })
  },
  components: {
    'card-dropdown': CardDropdown,
    'card-detail': CardDetail
  }
}
</script>

<style lang="css" scoped>
</style>
