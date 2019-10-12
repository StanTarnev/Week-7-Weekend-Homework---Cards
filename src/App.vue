<template lang="html">
  <div>
    <h1>Magic: The Gathering Cards</h1>
    <card-list :cards="cards"></card-list>
    <card-detail :card="selectedCard"></card-detail>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardList from './components/CardList.vue';
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
    'card-list': CardList,
    'card-detail': CardDetail
  }
}
</script>

<style lang="css" scoped>
</style>
