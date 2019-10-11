<template lang="html">
  <select v-model="selectedCard">
    <option disabled value="">Select a card...</option>
    <option v-for="card in cards.cards" :value="card">{{card.name}}</option>
  </select>
</template>

<script>
export default {
  name: 'card-list',
  data(){
    return {
      'selectedCard': {}
    }
  },
  props: ['cards']
}
</script>

<style lang="css" scoped>
</style>
