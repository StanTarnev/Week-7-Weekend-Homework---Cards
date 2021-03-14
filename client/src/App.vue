<template lang="html">
    <div id="app">
        <div id="header">
            <img id="mtg-logo" src="./assets/mtg-logo.jpg" alt="Magic: The Gathering Logo">
            <h1 id="title">Ravnica</h1>
        </div>
        <h1 v-if="!cards.length">LOADING...</h1>
        <div id="list-info" v-if="cards">
            <div id="left-side">
                <h3 id="click-instruction">Click on a card to see details</h3>
                <card-list :cards="cards" />
            </div>
            <div id="right-side">
                <div id="filters">
                    <label for="show_by">Rarity: </label>
                    <select id="show_by">
                        <option value="" hidden>Choose...</option>
                        <option v-on:click="filterBy('Common')">Common</option>
                        <option v-on:click="filterBy('Uncommon')">Uncommon</option>
                        <option v-on:click="filterBy('Rare')">Rare</option>
                        <option v-on:click="filterBy('Mythic')">Mythic</option>
                    </select>
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
        filterBy(property) {
            this.cards = this.originalCards.filter(card => card.rarity == property)
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
    justify-content: space-around;
    width: 85%;
}

#mtg-logo {
    height: 5em;
}

#click-instruction {
    padding-left: 13%;
    margin-bottom: 3px;
    margin-top: 10px;
}

#title {
    color: red;
    font-weight: bold;
    font-size: xxx-large;
    margin: 0 0 20px 0;
}

#right-side {
    width: 55%;
}

#left-side {
    width: 42%;
}
</style>
