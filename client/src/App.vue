<template lang="html">
  <div id="app">
    <div id="header">
      <img id="mtg-logo" src="./assets/mtg-logo.jpg" alt="Magic: The Gathering Logo">
      <h1 id="title">CARDS</h1>
    </div>
    <h1 v-if="!cards.length">LOADING..."</h1>
    <h3 id="click-instruction">Click on a card to see details</h3>
    <div id="list-info" v-if="cards">
      <card-list :cards="cards" />
      <card-detail v-if="selectedCard" :card="selectedCard" />
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardDetail from  './components/CardDetail.vue';
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
    'card-list': CardList
  }
}
</script>

<style lang="css" >
body {
  background-color: black;
  color: white;
  font-family: 'papyrus';
}

#list-info {
  display: flex;
}

#header {
  display: flex;
  justify-content: space-around;
  width: 70%;
}

#mtg-logo {
  height: 5em;
}

#click-instruction {
  padding-left: 13%;
  margin-bottom: 3px;
  margin-top: 10px;
}

#title {
  color: orange;
  font-weight: bold; 
}
</style>
