<template lang="html">
  <div id="app">
    <cards-header title="Magic: The Gathering Cards" />
    <cards-header v-if="!cards" title="LOADING..."/>
    <card-dropdown :cards="cards" class="dropdown"></card-dropdown>
    <card-detail :card="selectedCard" class="card-detail"></card-detail>
    <button v-on:click="showRareCards" class="show-rare-cards">Show Rare Cards</button>
    <rare-cards-list v-if="rareCards.length > 0" :cards="rareCards"></rare-cards-list>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardDropdown from './components/CardDropdown.vue';
import CardDetail from  './components/CardDetail.vue';
import RareCardsList from './components/RareCardsList';
import CardsHeader from './components/CardsHeader';

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
      for (var card of this.cards) {
        if (card.rarity === "Rare") {
          this.rareCards.push(card);
        }
      }
    },
    removeDuplicates(cards){
      let uniqueCards = [];
      for (let myCard of cards.cards) {
        if (myCard.hasOwnProperty("imageUrl")) {
          uniqueCards.push(myCard);
        }
      }

      return uniqueCards;
    }
  },
  mounted(){
    fetch('http://localhost:3000/cards-data')
    .then(result => result.json())
    .then((cards) => {
      this.cards = this.removeDuplicates(cards);
    })

    eventBus.$on('card-selected', (card) => {
      this.selectedCard = card;
    })
    eventBus.$on('card-removed', () => {
      let result = this.cards.indexOf(this.selectedCard)
      this.cards.splice(result, 1);
    })
  },
  components: {
    'card-dropdown': CardDropdown,
    'card-detail': CardDetail,
    'rare-cards-list': RareCardsList,
    'cards-header': CardsHeader
  }
}
</script>

<style lang="css" scoped>

</style>
