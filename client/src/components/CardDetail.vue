<template lang="html">
  <div id="image-details" v-if="card">
    <div id="image-wrapper">
      <img :src='card.imageUrl'/>
    </div>
    <div id="details">
      <h2>{{card.name}}</h2>
      <p><span>Artist:  </span>{{card.artist}}</p>
      <h4><span>Set:  </span>{{card.setName}}</h4>
      <p>{{card.flavor}}</p>
      <h4><span>Type:  </span>{{card.type}}</h4>
      <h4><span>Rarity:  </span>{{card.rarity}}</h4>
      <p>{{card.text}}</p>
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
  width: 53%;
}

img {
  height: 25em;
}

#image-wrapper {
  background-color: white;
  height: min-content;
  padding: 7px 7px 0 7px;
  border-radius: 11px;
  border: 6px solid red;
}

#details {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40%;
  height: 87%
}

h2, span {
  text-decoration: underline;
  color: orange;
}

h2 {
  margin-top: 0;
}
</style>
