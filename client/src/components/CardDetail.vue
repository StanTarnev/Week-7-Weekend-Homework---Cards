<template lang="html">
  <div id="image-details" v-if="card">
    <img :src='card.imageUrl'/>
    <div id="details">
      <h3>{{card.name}}</h3>
      <p>{{card.flavor}}</p>
      <h4>{{card.type}}</h4>
      <h4>{{card.rarity}}</h4>
      <p>Artist: {{card.artist}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card-detail',
  props:['card']
}
</script>

<style lang="css" scoped>
#image-details {
  display: flex;
  justify-content: space-around;
}

img {
  height: 25em;
}
</style>
