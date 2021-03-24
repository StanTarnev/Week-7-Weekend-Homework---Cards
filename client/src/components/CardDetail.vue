<template lang="html">
  <div id="image-details" v-if="card">
    <div id="image-wrapper">
      <img :src='card.imageUrl'/>
    </div>
    <div id="details">
        <div id='name-artist-type-rarity'>
            <h2>{{card.name}}</h2>
            <h4><span>Artist:  </span>{{card.artist}}</h4>
            <h4><span>Type:  </span>{{card.type}}</h4>
            <h4><span>Rarity:  </span>{{card.rarity}}</h4>
        </div>
        <h4 id="flavor">{{card.flavor}}</h4>
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
  margin-top: 60px;
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
  margin-left: 6%;
}

#details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  margin-left: 7%
}

h2, span {
  text-decoration: underline;
  color: orange;
}

h2 {
  margin-top: 0;
  margin-bottom: 25px;
}

#flavor {
    color: red;
    margin: 0 0 20px 0;
}

h4 {
    margin: 27px 0;
}

#name-artist-type-rarity {
    display: flex;
    flex-direction: column;
}
</style>
