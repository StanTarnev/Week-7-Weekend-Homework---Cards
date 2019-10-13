<template lang="html">
  <div class="">
    <h3>Rare Cards:</h3>
    <ul>
      <list-entry v-for="(card, index) in cards.cards" :card="card" :key="index"></list-entry>
    </ul>
  </div>

</template>

<script>
import ListEntry from './ListEntry.vue';

export default {
  name: 'rare-cards-list',
  props: ['cards'],
  components: {
    'list-entry': ListEntry
  }
}
</script>

<style lang="css" scoped>
</style>
