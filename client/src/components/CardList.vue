<template lang="html">
  <div id="card-list" v-if="cards">
    <card-list-item v-for="(card, index) in cards" :card="card" :key="index" />
  </div>
</template>

<script>
import CardListItem from './CardListItem';

export default {
  name: 'card-list',
  props: ['cards'],
  components: {
    'card-list-item': CardListItem
  }
}
</script>

<style lang="css" scoped>
#card-list {
  height: 560px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 12px 0 12px 12px;
  border: 6px solid red;
  border-radius: 11px;
  align-content: flex-start;
}

</style>
