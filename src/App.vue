<template lang="html">
  <div>
    <h1>Magic: The Gathering Cards</h1>
    <card-dropdown :cards="cards"></card-dropdown>
    <card-detail :card="selectedCard"></card-detail>
    <button v-on:click="showRareCards">Show Rare Cards</button>
    <rare-cards-list :cards="rareCards"></rare-cards-list>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardDropdown from './components/CardDropdown.vue';
import CardDetail from  './components/CardDetail.vue';
import RareCardsList from './components/RareCardsList';

export default {
  name: 'app',
  data(){
    return{
      cards: [],
      selectedCard: null,
      rareCards: []
    }
  },
  methods: {
    showRareCards() {
      // eventBus.$emit('card-rared', this.cards)
      for (var card in this.cards.cards) {
        if (card.rarity === "Rare") {
          this.rareCards.push(card);
        }
      }
    }
  },
  mounted(){
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then(cards => this.cards = cards)

    eventBus.$on('card-selected', (card) => {
      this.selectedCard = card;
    })
    eventBus.$on('card-removed', () => {
      let result = this.cards.cards.indexOf(this.selectedCard)
      this.cards.cards.splice(result, 1);
    })
    // eventBus.$on('card-rared', (card) => {
    //   this.rareCards.push(card);
    // })
  },
  components: {
    'card-dropdown': CardDropdown,
    'card-detail': CardDetail,
    'rare-cards-list': RareCardsList
  }
}
</script>

<style lang="css" scoped>
</style>
