<template lang="html">
  <div class="cardlistitem">
    <button v-on:click="displayInfo"><img :src="card.imageUrl"/></button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'card-list-item',
  props: ['card'],
  methods: {
    displayInfo: function() {
      eventBus.$emit('card-selected', this.card);
    }
  }
}
</script>

<style lang="css" scoped>
.cardlistitem {
  display: flex;
  flex-direction: row;
}

button {
  padding: 2px 2px 0 2px;
  background-color: white;
  border: none;
  cursor: pointer;
}

img {
  height: 15em;
}
</style>
