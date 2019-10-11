<template lang="html">
  <div>
    <h1>Magic: The Gathering Cards</h1>
    <card-list :cards="cards"></card-list>
  </div>
</template>

<script>
import {eventBus} from './main.js';

import CardList from './components/CardList.vue';

export default {
  name: 'app',
  data(){
    return{
      cards: []
    }
  },
  mounted(){
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then(cards => this.cards = cards)
  },
  components: {
    'card-list': CardList
  }
}
</script>

<style lang="css" scoped>
</style>
