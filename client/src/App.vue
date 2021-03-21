<template lang="html">
    <div id="app">
        <div id="header">
            <img id="mtg-logo" src="./assets/mtg-logo.jpg" alt="Magic: The Gathering Logo">
            <h1 id="title">10th Edition</h1>
        </div>
        <h1 v-if="!cards.length">LOADING...</h1>
        <div id="list-info" v-if="cards">
            <div id="left-side">
                <h3 id="click-instruction">Click on a card to see details</h3>
                <card-list :cards="cards" />
            </div>
            <div id="right-side">
                <div id="filters">
                    <div id="rarity-filter">
                        <label for="show_by">Rarity: </label>
                        <select id="show_by">
                            <option value="" hidden>Choose...</option>
                            <option v-on:click="showAll">All</option>
                            <option v-on:click="filterByRarity('Common')">Common</option>
                            <option v-on:click="filterByRarity('Uncommon')">Uncommon</option>
                            <option v-on:click="filterByRarity('Rare')">Rare</option>
                        </select>
                    </div>
                    <div id="type-filter">
                        <label for="show_by">Type: </label>
                        <select id="show_by">
                            <option value="" hidden>Choose...</option>
                            <option v-on:click="showAll">All</option>
                            <option v-on:click="filterBy('Creature — Human Cleric')">Creature — Human Cleric</option>
                            <option v-on:click="filterBy('Creature — Angel')">Creature — Angel</option>
                            <option v-on:click="filterBy('Creature — Bird Soldier')">Creature — Bird Soldier</option>
                            <option v-on:click="filterBy('Creature — Human Rebel')">Creature — Human Rebel</option>
                            <option v-on:click="filterBy('Instant')">Instant</option>
                            <option v-on:click="filterBy('Creature — Human Knight')">Creature — Human Knight</option>
                            <option v-on:click="filterBy('Legendary Creature — Human Rebel')">Legendary Creature — Human Rebel</option>
                            <option v-on:click="filterBy('Creature — Human Soldier')">Creature — Human Soldier</option>
                            <option v-on:click="filterBy('Creature — Spirit')">Creature — Spirit</option>
                            <option v-on:click="filterBy('Enchantment')">Enchantment</option>
                            <option v-on:click="filterBy('Enchantment — Aura')">Enchantment — Aura</option>
                            <option v-on:click="filterBy('Legendary Creature — Angel')">Legendary Creature — Angel</option>
                            <option v-on:click="filterBy('Creature — Human Wizard')">Creature — Human Wizard</option>
                            <option v-on:click="filterBy('Creature — Elemental')">Creature — Elemental</option>
                            <option v-on:click="filterBy('Legendary Creature — Merfolk Wizard')">Legendary Creature — Merfolk Wizard</option>
                            <option v-on:click="filterBy('Creature — Bird Soldier Wizard')">Creature — Bird Soldier Wizard</option>
                            <option v-on:click="filterBy('Creature — Cephalid Wizard')">Creature — Cephalid Wizard</option>
                            <option v-on:click="filterBy('Creature — Shapeshifter')">Creature — Shapeshifter</option>
                            <option v-on:click="filterBy('Creature — Faerie')">Creature — Faerie</option>
                            <option v-on:click="filterBy('Sorcery')">Sorcery</option>
                            <option v-on:click="filterBy('Creature — Serpent')">Creature — Serpent</option>
                            <option v-on:click="filterBy('Legendary Creature — Vampire Noble')">Legendary Creature — Vampire Noble</option>
                            <option v-on:click="filterBy('Creature — Wraith')">Creature — Wraith</option>
                            <option v-on:click="filterBy('Creature — Merfolk')">Creature — Merfolk</option>
                            <option v-on:click="filterBy('Creature — Bird')">Creature — Bird</option>
                            <option v-on:click="filterBy('Creature — Beast')">Creature — Beast</option>
                            <option v-on:click="filterBy('Creature — Metathran Wizard')">Creature — Metathran Wizard</option>
                            <option v-on:click="filterBy('Creature — Lhurgoyf')">Creature — Lhurgoyf</option>
                            <option v-on:click="filterBy('Creature — Human Nomad Cleric')">Creature — Human Nomad Cleric</option>
                            <option v-on:click="filterBy('Creature — Illusion Warrior')">Creature — Illusion Warrior</option>
                            <option v-on:click="filterBy('Creature — Human Cleric Mercenary')">Creature — Human Cleric Mercenary</option>
                            <option v-on:click="filterBy('Creature — Zombie Crocodile')">Creature — Zombie Crocodile</option>
                            <option v-on:click="filterBy('Creature — Skeleton')">Creature — Skeleton</option>
                            <option v-on:click="filterBy('Creature — Imp')">Creature — Imp</option>
                            <option v-on:click="filterBy('Creature — Horror')">Creature — Horror</option>
                            <option v-on:click="filterBy('Creature — Zombie Insect')">Creature — Zombie Insect</option>
                            <option v-on:click="filterBy('Creature — Human Assassin')">Creature — Human Assassin</option>
                            <option v-on:click="filterBy('Creature — Nightmare Horse')">Creature — Nightmare Horse</option>
                            <option v-on:click="filterBy('Legendary Creature — Avatar Minion')">Legendary Creature — Avatar Minion</option>
                            <option v-on:click="filterBy('Creature — Insect')">Creature — Insect</option>
                            <option v-on:click="filterBy('Creature — Rat')">Creature — Rat</option>
                            <option v-on:click="filterBy('Creature — Zombie')">Creature — Zombie</option>
                            <option v-on:click="filterBy('Creature — Vampire')">Creature — Vampire</option>
                            <option v-on:click="filterBy('Creature — Minotaur')">Creature — Minotaur</option>
                            <option v-on:click="filterBy('Creature — Giant')">Creature — Giant</option>
                            <option v-on:click="filterBy('Creature — Cyclops')">Creature — Cyclops</option>
                            <option v-on:click="filterBy('Creature — Elemental Spirit')">Creature — Elemental Spirit</option>
                            <option v-on:click="filterBy('Creature — Zombie Goblin')">Creature — Zombie Goblin</option>
                            <option v-on:click="filterBy('Creature — Human Mercenary')">Creature — Human Mercenary</option>
                            <option v-on:click="filterBy('Creature — Specter')">Creature — Specter</option>
                            <option v-on:click="filterBy('Creature — Crab')">Creature — Crab</option>
                            <option v-on:click="filterBy('Creature — Zombie Spirit')">Creature — Zombie Spirit</option>
                            <option v-on:click="filterBy('Creature — Zombie Wizard')">Creature — Zombie Wizard</option>
                            <option v-on:click="filterBy('Creature — Elephant Cleric')">Creature — Elephant Cleric</option>
                            <option v-on:click="filterBy('Creature — Merfolk Rogue')">Creature — Merfolk Rogue</option>
                            <option v-on:click="filterBy('Legendary Creature — Human Barbarian')">Legendary Creature — Human Barbarian</option>
                            <option v-on:click="filterBy('Creature — Djinn')">Creature — Djinn</option>
                            <option v-on:click="filterBy('Creature — Shade')">Creature — Shade</option>
                            <option v-on:click="filterBy('Creature — Demon')">Creature — Demon</option>
                            <option v-on:click="filterBy('Creature — Goblin Mutant')">Creature — Goblin Mutant</option>
                            <option v-on:click="filterBy('Creature — Dragon')">Creature — Dragon</option>
                            <option v-on:click="filterBy('Creature — Goblin Warrior')">Creature — Goblin Warrior</option>
                            <option v-on:click="filterBy('Creature — Goblin')">Creature — Goblin</option>
                            <option v-on:click="filterBy('Creature — Zombie Warrior')">Creature — Zombie Warrior</option>
                            <option v-on:click="filterBy('Legendary Creature — Wizard')">Legendary Creature — Wizard</option>
                            <option v-on:click="filterBy('Creature — Orc Warrior')">Creature — Orc Warrior</option>
                            <option v-on:click="filterBy('Creature — Goblin Berserker')">Creature — Goblin Berserker</option>
                            <option v-on:click="filterBy('Creature — Badger Beast')">Creature — Badger Beast</option>
                            <option v-on:click="filterBy('Creature — Wurm')">Creature — Wurm</option>
                            <option v-on:click="filterBy('Creature — Avatar')">Creature — Avatar</option>
                            <option v-on:click="filterBy('Creature — Spider')">Creature — Spider</option>
                            <option v-on:click="filterBy('Creature — Elf Druid Warrior')">Creature — Elf Druid Warrior</option>
                            <option v-on:click="filterBy('Creature — Elf')">Creature — Elf</option>
                            <option v-on:click="filterBy('Creature — Elf Berserker')">Creature — Elf Berserker</option>
                            <option v-on:click="filterBy('Creature — Elf Shaman')">Creature — Elf Shaman</option>
                            <option v-on:click="filterBy('Creature — Human Archer')">Creature — Human Archer</option>
                            <option v-on:click="filterBy('Creature — Bear')">Creature — Bear</option>
                            <option v-on:click="filterBy('Creature — Elf Druid')">Creature — Elf Druid</option>
                            <option v-on:click="filterBy('Creature — Yeti')">Creature — Yeti</option>
                            <option v-on:click="filterBy('Creature — Kavu')">Creature — Kavu</option>
                            <option v-on:click="filterBy('Legendary Creature — Cat Warrior')">Legendary Creature — Cat Warrior</option>
                            <option v-on:click="filterBy('Legendary Creature — Elemental')">Legendary Creature — Elemental</option>
                            <option v-on:click="filterBy('Creature — Dryad')">Creature — Dryad</option>
                            <option v-on:click="filterBy('Creature — Rhino Beast')">Creature — Rhino Beast</option>
                            <option v-on:click="filterBy('Creature — Cat Knight')">Creature — Cat Knight</option>
                            <option v-on:click="filterBy('Creature — Lizard')">Creature — Lizard</option>
                            <option v-on:click="filterBy('Artifact')">Artifact</option>
                            <option v-on:click="filterBy('Artifact Creature — Gnome')">Artifact Creature — Gnome</option>
                            <option v-on:click="filterBy('Artifact Creature — Golem')">Artifact Creature — Golem</option>
                            <option v-on:click="filterBy('Artifact Creature — Juggernaut')">Artifact Creature — Juggernaut</option>
                            <option v-on:click="filterBy('Legendary Artifact')">Legendary Artifact</option>
                            <option v-on:click="filterBy('Artifact — Equipment')">Artifact — Equipment</option>
                            <option v-on:click="filterBy('Artifact Creature — Insect')">Artifact Creature — Insect</option>
                            <option v-on:click="filterBy('Artifact Creature — Thopter')">Artifact Creature — Thopter</option>
                            <option v-on:click="filterBy('Artifact Creature — Angel')">Artifact Creature — Angel</option>
                            <option v-on:click="filterBy('Artifact Creature — Masticore')">Artifact Creature — Masticore</option>
                            <option v-on:click="filterBy('Land')">Land</option>
                            <option v-on:click="filterBy('Creature — Wall')">Creature — Wall</option>
                            <option v-on:click="filterBy('Basic Land — Plains')">Basic Land — Plains</option>
                            <option v-on:click="filterBy('Basic Land — Island')">Basic Land — Island</option>
                            <option v-on:click="filterBy('Basic Land — Mountain')">Basic Land — Mountain</option>
                            <option v-on:click="filterBy('Basic Land — Forest')">Basic Land — Forest</option>
                            <option v-on:click="filterBy('Creature — Drake')">Creature — Drake</option>
                            <option v-on:click="filterBy('Creature — Human')">Creature — Human</option>
                            <option v-on:click="filterBy('Creature — Wolf')">Creature — Wolf</option>
                            <option v-on:click="filterBy('Creature — Human Monk Cleric')">Creature — Human Monk Cleric</option>
                            <option v-on:click="filterBy('Creature — Vedalken Wizard')">Creature — Vedalken Wizard</option>
                            <option v-on:click="filterBy('Creature — Minion')">Creature — Minion</option>
                            <option v-on:click="filterBy('Creature — Zombie Mercenary')">Creature — Zombie Mercenary</option>
                            <option v-on:click="filterBy('Creature — Thrull')">Creature — Thrull</option>
                            <option v-on:click="filterBy('Creature — Bat')">Creature — Bat</option>
                            <option v-on:click="filterBy('Creature — Human Cleric Mutant')">Creature — Human Cleric Mutant</option>
                            <option v-on:click="filterBy('Legendary Creature — Goblin')">Legendary Creature — Goblin</option>
                            <option v-on:click="filterBy('Creature — Cat')">Creature — Cat</option>
                            <option v-on:click="filterBy('Creature — Antelope Beast')">Creature — Antelope Beast</option>
                            <option v-on:click="filterBy('Creature — Basilisk')">Creature — Basilisk</option>
                            <option v-on:click="filterBy('Creature — Viashino')">Creature — Viashino</option>
                            <option v-on:click="filterBy('Creature — Viashino Scout')">Creature — Viashino Scout</option>
                            <option v-on:click="filterBy('Creature — Troll Shaman')">Creature — Troll Shaman</option>
                            <option v-on:click="filterBy('Creature — Griffin')">Creature — Griffin</option>
                            <option v-on:click="filterBy('Basic Land — Swamp')">Basic Land — Swamp</option>
                            <option v-on:click="filterBy('Creature — Human Druid')">Creature — Human Druid</option>
                        </select>
                    </div>
                    <div id="artist-filter">
                        <label for="show_by">Artist: </label>
                        <select id="show_by">
                            <option value="" hidden>Choose...</option>
                            <option v-on:click="showAll">All</option>
                            <option v-on:click="filterBy('Pete Venters')">Pete Venters</option>
                            <option v-on:click="filterBy('Volkan Baǵa')">Volkan Baǵa</option>
                            <option v-on:click="filterBy('Justin Sweet')">Justin Sweet</option>
                            <option v-on:click="filterBy('Matthew D. Wilson')">Matthew D. Wilson</option>
                            <option v-on:click="filterBy('Rebecca Guay')">Rebecca Guay</option>
                            <option v-on:click="filterBy('Rob Alexander')">Rob Alexander</option>
                            <option v-on:click="filterBy('Zoltan Boros & Gabor Szikszai')">Zoltan Boros & Gabor Szikszai</option>
                            <option v-on:click="filterBy('Steven Belledin')">Steven Belledin</option>
                            <option v-on:click="filterBy('Daren Bader')">Daren Bader</option>
                            <option v-on:click="filterBy('Christopher Rush')">Christopher Rush</option>
                            <option v-on:click="filterBy('Stephen Tappin')">Stephen Tappin</option>
                            <option v-on:click="filterBy('Kev Walker')">Kev Walker</option>
                            <option v-on:click="filterBy('Anthony S. Waters')">Anthony S. Waters</option>
                            <option v-on:click="filterBy('Ittoku')">Ittoku</option>
                            <option v-on:click="filterBy('Luca Zontini')">Luca Zontini</option>
                            <option v-on:click="filterBy('rk post')">rk post</option>
                            <option v-on:click="filterBy('Dan Dos Santos')">Dan Dos Santos</option>
                            <option v-on:click="filterBy('D. Alexander Gregory')">D. Alexander Gregory</option>
                            <option v-on:click="filterBy('Wayne England')">Wayne England</option>
                            <option v-on:click="filterBy('Anson Maddocks')">Anson Maddocks</option>
                            <option v-on:click="filterBy('Stephen Daniele')">Stephen Daniele</option>
                            <option v-on:click="filterBy('Jim Murray')">Jim Murray</option>
                            <option v-on:click="filterBy('Christopher Moeller')">Christopher Moeller</option>
                            <option v-on:click="filterBy('Greg Hildebrandt')">Greg Hildebrandt</option>
                            <option v-on:click="filterBy('Arnie Swekel')">Arnie Swekel</option>
                            <option v-on:click="filterBy('Mark Poole')">Mark Poole</option>
                            <option v-on:click="filterBy('Alan Pollack')">Alan Pollack</option>
                            <option v-on:click="filterBy('Michael Sutfin')">Michael Sutfin</option>
                            <option v-on:click="filterBy('Mark Zug')">Mark Zug</option>
                            <option v-on:click="filterBy('Randy Gallegos')">Randy Gallegos</option>
                            <option v-on:click="filterBy('Jim Pavelec')">Jim Pavelec</option>
                            <option v-on:click="filterBy('Alex Horley-Orlandelli')">Alex Horley-Orlandelli</option>
                            <option v-on:click="filterBy('Franz Vohwinkel')">Franz Vohwinkel</option>
                            <option v-on:click="filterBy('Roger Raupp')">Roger Raupp</option>
                            <option v-on:click="filterBy('Adam Rex')">Adam Rex</option>
                            <option v-on:click="filterBy('Daarken')">Daarken</option>
                            <option v-on:click="filterBy('Ralph Horsley')">Ralph Horsley</option>
                            <option v-on:click="filterBy('Mark Tedin')">Mark Tedin</option>
                            <option v-on:click="filterBy('Scott M. Fischer')">Scott M. Fischer</option>
                            <option v-on:click="filterBy('Mark Brill')">Mark Brill</option>
                            <option v-on:click="filterBy('Greg Staples')">Greg Staples</option>
                            <option v-on:click="filterBy('Brian Despain')">Brian Despain</option>
                            <option v-on:click="filterBy('Carl Critchlow')">Carl Critchlow</option>
                            <option v-on:click="filterBy('Jeremy Jarvis')">Jeremy Jarvis</option>
                            <option v-on:click="filterBy('Darrell Riche')">Darrell Riche</option>
                            <option v-on:click="filterBy('Dave Kendall')">Dave Kendall</option>
                            <option v-on:click="filterBy('Matt Thompson')">Matt Thompson</option>
                            <option v-on:click="filterBy('Thomas M. Baxa')">Thomas M. Baxa</option>
                            <option v-on:click="filterBy('Jim Nelson')">Jim Nelson</option>
                            <option v-on:click="filterBy('Brom')">Brom</option>
                            <option v-on:click="filterBy('Robert Bliss')">Robert Bliss</option>
                            <option v-on:click="filterBy('Jon J Muth')">Jon J Muth</option>
                            <option v-on:click="filterBy("William O'Connor")">William O'Connor</option>
                            <option v-on:click="filterBy('Ron Spears')">Ron Spears</option>
                            <option v-on:click="filterBy('Tom Fleming')">Tom Fleming</option>
                            <option v-on:click="filterBy('Eric Peterson')">Eric Peterson</option>
                            <option v-on:click="filterBy('Nelson DeCastro')">Nelson DeCastro</option>
                            <option v-on:click="filterBy('Dany Orizio')">Dany Orizio</option>
                            <option v-on:click="filterBy('Terese Nielsen')">Terese Nielsen</option>
                            <option v-on:click="filterBy('Aleksi Briclot')">Aleksi Briclot</option>
                            <option v-on:click="filterBy('Scott Kirschner')">Scott Kirschner</option>
                            <option v-on:click="filterBy('Puddnhead')">Puddnhead</option>
                            <option v-on:click="filterBy('Dermot Power')">Dermot Power</option>
                            <option v-on:click="filterBy('Roger Raupp')">Roger Raupp</option>
                            <option v-on:click="filterBy('Francis Tsai')">Francis Tsai</option>
                            <option v-on:click="filterBy('Tristan Elwell')">Tristan Elwell</option>
                            <option v-on:click="filterBy('Mike Dringenberg')">Mike Dringenberg</option>
                            <option v-on:click="filterBy('Jeff Easley')">Jeff Easley</option>
                            <option v-on:click="filterBy('Dave Dorman')">Dave Dorman</option>
                            <option v-on:click="filterBy('Chippy')">Chippy</option>
                            <option v-on:click="filterBy('John Matson')">John Matson</option>
                            <option v-on:click="filterBy('Matt Cavotta')">Matt Cavotta</option>
                            <option v-on:click="filterBy('DiTerlizzi')">DiTerlizzi</option>
                            <option v-on:click="filterBy('Brian Snõddy')">Brian Snõddy</option>
                            <option v-on:click="filterBy('Ben Thompson')">Ben Thompson</option>
                            <option v-on:click="filterBy('Lucio Parrillo')">Lucio Parrillo</option>
                            <option v-on:click="filterBy('Nick Percival')">Nick Percival</option>
                            <option v-on:click="filterBy('Steve Luke')">Steve Luke</option>
                            <option v-on:click="filterBy('Mike Ploog')">Mike Ploog</option>
                            <option v-on:click="filterBy('Jeff Miracola')">Jeff Miracola</option>
                            <option v-on:click="filterBy('Marcelo Vignali')">Marcelo Vignali</option>
                            <option v-on:click="filterBy('Gary Ruddell')">Gary Ruddell</option>
                            <option v-on:click="filterBy('Heather Hudson')">Heather Hudson</option>
                            <option v-on:click="filterBy('Steve Firchow')">Steve Firchow</option>
                            <option v-on:click="filterBy('Paolo Parente')">Paolo Parente</option>
                            <option v-on:click="filterBy('Donato Giancola')">Donato Giancola</option>
                            <option v-on:click="filterBy('Jon Foster')">Jon Foster</option>
                            <option v-on:click="filterBy('Cyril Van Der Haegen')">Cyril Van Der Haegen</option>
                            <option v-on:click="filterBy('Lars Grant-West')">Lars Grant-West</option>
                            <option v-on:click="filterBy('Richard Sardinha')">Richard Sardinha</option>
                            <option v-on:click="filterBy('D. J. Cleland-Hura')">D. J. Cleland-Hura</option>
                            <option v-on:click="filterBy('John Howe')">John Howe</option>
                            <option v-on:click="filterBy('Dan Scott')">Dan Scott</option>
                            <option v-on:click="filterBy('Larry Elmore')">Larry Elmore</option>
                            <option v-on:click="filterBy('John Avon')">John Avon</option>
                            <option v-on:click="filterBy('Jeffrey R. Busch')">Jeffrey R. Busch</option>
                            <option v-on:click="filterBy('Tim Hildebrandt')">Tim Hildebrandt</option>
                            <option v-on:click="filterBy('Todd Lockwood')">Todd Lockwood</option>
                            <option v-on:click="filterBy('Ron Spencer')">Ron Spencer</option>
                            <option v-on:click="filterBy('Doug Chaffee')">Doug Chaffee</option>
                            <option v-on:click="filterBy('John Zeleznik')">John Zeleznik</option>
                            <option v-on:click="filterBy('Dana Knutson')">Dana Knutson</option>
                            <option v-on:click="filterBy('Hannibal King')">Hannibal King</option>
                            <option v-on:click="filterBy('Stephan Martiniere')">Stephan Martiniere</option>
                            <option v-on:click="filterBy('Scott Bailey')">Scott Bailey</option>
                            <option v-on:click="filterBy('Richard Wright')">Richard Wright</option>
                            <option v-on:click="filterBy('Martina Pilcerova')">Martina Pilcerova</option>
                            <option v-on:click="filterBy('Glen Angus')">Glen Angus</option>
                            <option v-on:click="filterBy('Vance Kovacs')">Vance Kovacs</option>
                            <option v-on:click="filterBy('Una Fricker')">Una Fricker</option>
                            <option v-on:click="filterBy('Michael Koelsch')">Michael Koelsch</option>
                            <option v-on:click="filterBy('Wayne Reynolds')">Wayne Reynolds</option>
                            <option v-on:click="filterBy('Steve White')">Steve White</option>
                            <option v-on:click="filterBy('Andrew Goldhawk')">Andrew Goldhawk</option>
                            <option v-on:click="filterBy('Nils Hamm')">Nils Hamm</option>
                            <option v-on:click="filterBy('Michael Komarck')">Michael Komarck</option>
                            <option v-on:click="filterBy('Ray Lago')">Ray Lago</option>
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
            this.cards = this.originalCards.filter(card => card.rarity == property)
        },
        showAll() {
            this.cards = this.originalCards;
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
    text-align: center;
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
