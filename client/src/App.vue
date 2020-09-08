<template lang="html">
  <div id="app">
    <cards-header title="Magic: The Gathering Cards" />
    <cards-header v-if="!cards" title="LOADING..."/>
    <div id="list-info" v-if="cards">
      <card-list :cards="cards" />
      <card-detail v-if="selectedCard" :card="selectedCard" />
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardDetail from  './components/CardDetail.vue';
import CardsHeader from './components/CardsHeader';
import CardList from './components/CardList';

export default {
  name: 'app',
  data(){
    return{
      cards: [],
      selectedCard: null,
    }
  },
  methods: {
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
  },
  components: {
    'card-detail': CardDetail,
    'cards-header': CardsHeader,
    'card-list': CardList
  }
}
</script>

<style lang="css" scoped>
#list-info {
  display: flex;
}
</style>
