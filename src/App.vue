<template lang="html">
  <div>
<h1>Magic: The Gathering Cards</h1>
  </div>
</template>

<script>
import {eventBus} from './main.js';

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
  }
}
</script>

<style lang="css" scoped>
</style>
