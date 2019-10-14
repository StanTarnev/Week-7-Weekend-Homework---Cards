<template lang="html">
  <div class="body">
    <h1>Magic: The Gathering Cards</h1>
    <card-dropdown :cards="cards" class="dropdown"></card-dropdown>
    <card-detail :card="selectedCard" class="card-detail"></card-detail>
    <button v-on:click="showRareCards" class="show-rare-cards">Show Rare Cards</button>
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
  /* .body {
    background-image: url("https://a-static.besthdwallpaper.com/magic-the-gathering-wallpaper-2560x1440-1539_51.jpg");
    background-size: 100%;
    font-family: fantasy;
  }
  .card-detail {
    border: solid 2px red;
    border-radius: 10px;
    background-color: papayawhip;
    padding: 20px;
    margin: 10px;

  }
  .dropdown .show-rare-cards {
    margin: 20px;
  } */
</style>
