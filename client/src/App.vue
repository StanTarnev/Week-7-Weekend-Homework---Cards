<template lang="html">
    <div id="app">
        <div id="header">
            <img id="mtg-logo" src="./assets/mtg-logo.jpg" alt="Magic: The Gathering Logo">
            <h1 id="title">Card Set, 10th Edition</h1>
        </div>
        <h1 v-if="!cards.length">LOADING...</h1>
        <div id="list-info" v-if="cards">
            <div id="left-side">
                <h3 id="description"><span>{{filterKey}}</span> {{filterValue}}</h3>
                <card-list :cards="cards" />
            </div>
            <div id="right-side">
                <div id="filters">
                    <button v-on:click="showAll">See All</button>
                    <div id="rarity-filter">
                        <label for="show-by-rarity">Rarity: </label>
                        <select id="show-by-rarity" v-model="selectedRarity" v-on:change="filterByRarity(selectedRarity)">
                            <option disabled hidden value="">Choose...</option>
                            <option v-for="rarity in uniqueRarities" :value="rarity">
                                {{rarity}}
                            </option>
                        </select>
                    </div>
                    <div id="type-filter">
                        <label for="show-by-type">Type: </label>
                        <select id="show-by-type" v-model="selectedType" v-on:change="filterByType(selectedType)">
                            <option disabled hidden value="">Choose...</option>
                            <option v-for="type in uniqueTypes" :value="type">
                                {{type}}
                            </option>
                        </select>
                    </div>
                    <div id="artist-filter">
                        <label for="show-by-artist">Artist: </label>
                        <select id="show-by-artist" v-model="selectedArtist" v-on:change="filterByArtist(selectedArtist)">
                            <option disabled hidden value="">Choose...</option>
                            <option v-for="artist in uniqueArtists" :value="artist">
                                {{artist}}
                            </option>
                        </select>
                    </div>
                </div>
                <card-detail v-if="selectedCard" :card="selectedCard" />
            </div>
        </div>
    </div>
</template>

<script>
import {eventBus} from './main.js';

import CardDetail from  './components/CardDetail.vue';
import CardList from './components/CardList';

export default {
    name: 'app',
    data(){
        return{
            cards: [],
            originalCards: [],
            selectedCard: null,
            filterKey: 'All Cards',
            filterValue: null,
            selectedRarity: '',
            selectedType: '',
            selectedArtist: ''
        }
    },
    methods: {
        removeDuplicates(cards){
            let uniqueCards = [];
            for (let myCard of cards.cards) {
                // if (myCard.hasOwnProperty("imageUrl") && (myCard.set === "RAV" || myCard.set === "GPT" || myCard.set === "DIS" || myCard.set === "RTR" || myCard.set === "GTC" || myCard.set === "DGM" || myCard.set === "GRN" || myCard.set === "RNA" || myCard.set === "WAR")) {
                if (myCard.hasOwnProperty("imageUrl") && myCard.set === "10E") {
                    uniqueCards.push(myCard);
                }
            }

            return uniqueCards;
        },
        filterByRarity(property) {
            this.cards = this.originalCards.filter(card => card.rarity == property);
            this.filterKey = 'Rarity:';
            this.filterValue = property;
            this.selectedRarity = '';
        },
        filterByType(property) {
            this.cards = this.originalCards.filter(card => card.type == property);
            this.filterKey = 'Type:';
            this.filterValue = property;
            this.selectedType = '';
        },
        filterByArtist(property) {
            this.cards = this.originalCards.filter(card => card.artist == property);
            this.filterKey = 'Artist:';
            this.filterValue = property;
            this.selectedArtist = '';
        },
        showAll() {
            this.cards = this.originalCards;
            this.filterKey = 'All Cards';
            this.filterValue = null;
        }
    },
    computed: {
        uniqueRarities() {
            return [...new Set(this.originalCards.map(card => card.rarity))]
        },
        uniqueTypes() {
            return [...new Set(this.originalCards.map(card => card.type))].sort();
        },
        uniqueArtists() {
            return [...new Set(this.originalCards.map(card => card.artist))].sort();
        }
    },
    mounted(){
        fetch('http://localhost:3000/cards-data')
        .then(result => result.json())
        .then((cards) => {
            this.cards = this.removeDuplicates(cards);
            this.originalCards = this.cards;
        })

        eventBus.$on('card-selected', (card) => {
            this.selectedCard = card;
        })
    },
    components: {
        'card-detail': CardDetail,
        'card-list': CardList
    }
}
</script>

<style lang="css" >
body {
    background-color: black;
    color: white;
    font-family: 'papyrus';
}

#list-info {
    display: flex;
}

#header {
    display: flex;
    justify-content: space-evenly;
    width: 89%;
}

#mtg-logo {
    height: 5em;
}

#description {
    margin: 10px 0 3px 24px;
}

#title {
    color: red;
    font-weight: bold;
    font-size: xxx-large;
    margin: 0 0 20px 0;
}

#right-side {
    width: 58%;
}

#left-side {
    width: 42%;
}

#filters {
    display: flex;
    justify-content: space-around;
    margin-top: 42px;
}

label, select, button, option {
    font-family: inherit;
    font-weight: bold;
    border-radius: 3px;
}

button {
    background-color: white;
}

span {
  text-decoration: underline;
  color: orange;
}
</style>
