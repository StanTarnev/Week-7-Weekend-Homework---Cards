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
  width: 47%;
  height: 550px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}

</style>
