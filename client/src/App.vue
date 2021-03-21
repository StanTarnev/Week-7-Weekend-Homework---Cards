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
                            <option v-on:click="filterByType('Creature — Human Cleric')">Creature — Human Cleric</option>
                            <option v-on:click="filterByType('Creature — Angel')">Creature — Angel</option>
                            <option v-on:click="filterByType('Creature — Bird Soldier')">Creature — Bird Soldier</option>
                            <option v-on:click="filterByType('Creature — Human Rebel')">Creature — Human Rebel</option>
                            <option v-on:click="filterByType('Instant')">Instant</option>
                            <option v-on:click="filterByType('Creature — Human Knight')">Creature — Human Knight</option>
                            <option v-on:click="filterByType('Legendary Creature — Human Rebel')">Legendary Creature — Human Rebel</option>
                            <option v-on:click="filterByType('Creature — Human Soldier')">Creature — Human Soldier</option>
                            <option v-on:click="filterByType('Creature — Spirit')">Creature — Spirit</option>
                            <option v-on:click="filterByType('Enchantment')">Enchantment</option>
                            <option v-on:click="filterByType('Enchantment — Aura')">Enchantment — Aura</option>
                            <option v-on:click="filterByType('Legendary Creature — Angel')">Legendary Creature — Angel</option>
                            <option v-on:click="filterByType('Creature — Human Wizard')">Creature — Human Wizard</option>
                            <option v-on:click="filterByType('Creature — Elemental')">Creature — Elemental</option>
                            <option v-on:click="filterByType('Legendary Creature — Merfolk Wizard')">Legendary Creature — Merfolk Wizard</option>
                            <option v-on:click="filterByType('Creature — Bird Soldier Wizard')">Creature — Bird Soldier Wizard</option>
                            <option v-on:click="filterByType('Creature — Cephalid Wizard')">Creature — Cephalid Wizard</option>
                            <option v-on:click="filterByType('Creature — Shapeshifter')">Creature — Shapeshifter</option>
                            <option v-on:click="filterByType('Creature — Faerie')">Creature — Faerie</option>
                            <option v-on:click="filterByType('Sorcery')">Sorcery</option>
                            <option v-on:click="filterByType('Creature — Serpent')">Creature — Serpent</option>
                            <option v-on:click="filterByType('Legendary Creature — Vampire Noble')">Legendary Creature — Vampire Noble</option>
                            <option v-on:click="filterByType('Creature — Wraith')">Creature — Wraith</option>
                            <option v-on:click="filterByType('Creature — Merfolk')">Creature — Merfolk</option>
                            <option v-on:click="filterByType('Creature — Bird')">Creature — Bird</option>
                            <option v-on:click="filterByType('Creature — Beast')">Creature — Beast</option>
                            <option v-on:click="filterByType('Creature — Metathran Wizard')">Creature — Metathran Wizard</option>
                            <option v-on:click="filterByType('Creature — Lhurgoyf')">Creature — Lhurgoyf</option>
                            <option v-on:click="filterByType('Creature — Human Nomad Cleric')">Creature — Human Nomad Cleric</option>
                            <option v-on:click="filterByType('Creature — Illusion Warrior')">Creature — Illusion Warrior</option>
                            <option v-on:click="filterByType('Creature — Human Cleric Mercenary')">Creature — Human Cleric Mercenary</option>
                            <option v-on:click="filterByType('Creature — Zombie Crocodile')">Creature — Zombie Crocodile</option>
                            <option v-on:click="filterByType('Creature — Skeleton')">Creature — Skeleton</option>
                            <option v-on:click="filterByType('Creature — Imp')">Creature — Imp</option>
                            <option v-on:click="filterByType('Creature — Horror')">Creature — Horror</option>
                            <option v-on:click="filterByType('Creature — Zombie Insect')">Creature — Zombie Insect</option>
                            <option v-on:click="filterByType('Creature — Human Assassin')">Creature — Human Assassin</option>
                            <option v-on:click="filterByType('Creature — Nightmare Horse')">Creature — Nightmare Horse</option>
                            <option v-on:click="filterByType('Legendary Creature — Avatar Minion')">Legendary Creature — Avatar Minion</option>
                            <option v-on:click="filterByType('Creature — Insect')">Creature — Insect</option>
                            <option v-on:click="filterByType('Creature — Rat')">Creature — Rat</option>
                            <option v-on:click="filterByType('Creature — Zombie')">Creature — Zombie</option>
                            <option v-on:click="filterByType('Creature — Vampire')">Creature — Vampire</option>
                            <option v-on:click="filterByType('Creature — Minotaur')">Creature — Minotaur</option>
                            <option v-on:click="filterByType('Creature — Giant')">Creature — Giant</option>
                            <option v-on:click="filterByType('Creature — Cyclops')">Creature — Cyclops</option>
                            <option v-on:click="filterByType('Creature — Elemental Spirit')">Creature — Elemental Spirit</option>
                            <option v-on:click="filterByType('Creature — Zombie Goblin')">Creature — Zombie Goblin</option>
                            <option v-on:click="filterByType('Creature — Human Mercenary')">Creature — Human Mercenary</option>
                            <option v-on:click="filterByType('Creature — Specter')">Creature — Specter</option>
                            <option v-on:click="filterByType('Creature — Crab')">Creature — Crab</option>
                            <option v-on:click="filterByType('Creature — Zombie Spirit')">Creature — Zombie Spirit</option>
                            <option v-on:click="filterByType('Creature — Zombie Wizard')">Creature — Zombie Wizard</option>
                            <option v-on:click="filterByType('Creature — Elephant Cleric')">Creature — Elephant Cleric</option>
                            <option v-on:click="filterByType('Creature — Merfolk Rogue')">Creature — Merfolk Rogue</option>
                            <option v-on:click="filterByType('Legendary Creature — Human Barbarian')">Legendary Creature — Human Barbarian</option>
                            <option v-on:click="filterByType('Creature — Djinn')">Creature — Djinn</option>
                            <option v-on:click="filterByType('Creature — Shade')">Creature — Shade</option>
                            <option v-on:click="filterByType('Creature — Demon')">Creature — Demon</option>
                            <option v-on:click="filterByType('Creature — Goblin Mutant')">Creature — Goblin Mutant</option>
                            <option v-on:click="filterByType('Creature — Dragon')">Creature — Dragon</option>
                            <option v-on:click="filterByType('Creature — Goblin Warrior')">Creature — Goblin Warrior</option>
                            <option v-on:click="filterByType('Creature — Goblin')">Creature — Goblin</option>
                            <option v-on:click="filterByType('Creature — Zombie Warrior')">Creature — Zombie Warrior</option>
                            <option v-on:click="filterByType('Legendary Creature — Wizard')">Legendary Creature — Wizard</option>
                            <option v-on:click="filterByType('Creature — Orc Warrior')">Creature — Orc Warrior</option>
                            <option v-on:click="filterByType('Creature — Goblin Berserker')">Creature — Goblin Berserker</option>
                            <option v-on:click="filterByType('Creature — Badger Beast')">Creature — Badger Beast</option>
                            <option v-on:click="filterByType('Creature — Wurm')">Creature — Wurm</option>
                            <option v-on:click="filterByType('Creature — Avatar')">Creature — Avatar</option>
                            <option v-on:click="filterByType('Creature — Spider')">Creature — Spider</option>
                            <option v-on:click="filterByType('Creature — Elf Druid Warrior')">Creature — Elf Druid Warrior</option>
                            <option v-on:click="filterByType('Creature — Elf')">Creature — Elf</option>
                            <option v-on:click="filterByType('Creature — Elf Berserker')">Creature — Elf Berserker</option>
                            <option v-on:click="filterByType('Creature — Elf Shaman')">Creature — Elf Shaman</option>
                            <option v-on:click="filterByType('Creature — Human Archer')">Creature — Human Archer</option>
                            <option v-on:click="filterByType('Creature — Bear')">Creature — Bear</option>
                            <option v-on:click="filterByType('Creature — Elf Druid')">Creature — Elf Druid</option>
                            <option v-on:click="filterByType('Creature — Yeti')">Creature — Yeti</option>
                            <option v-on:click="filterByType('Creature — Kavu')">Creature — Kavu</option>
                            <option v-on:click="filterByType('Legendary Creature — Cat Warrior')">Legendary Creature — Cat Warrior</option>
                            <option v-on:click="filterByType('Legendary Creature — Elemental')">Legendary Creature — Elemental</option>
                            <option v-on:click="filterByType('Creature — Dryad')">Creature — Dryad</option>
                            <option v-on:click="filterByType('Creature — Rhino Beast')">Creature — Rhino Beast</option>
                            <option v-on:click="filterByType('Creature — Cat Knight')">Creature — Cat Knight</option>
                            <option v-on:click="filterByType('Creature — Lizard')">Creature — Lizard</option>
                            <option v-on:click="filterByType('Artifact')">Artifact</option>
                            <option v-on:click="filterByType('Artifact Creature — Gnome')">Artifact Creature — Gnome</option>
                            <option v-on:click="filterByType('Artifact Creature — Golem')">Artifact Creature — Golem</option>
                            <option v-on:click="filterByType('Artifact Creature — Juggernaut')">Artifact Creature — Juggernaut</option>
                            <option v-on:click="filterByType('Legendary Artifact')">Legendary Artifact</option>
                            <option v-on:click="filterByType('Artifact — Equipment')">Artifact — Equipment</option>
                            <option v-on:click="filterByType('Artifact Creature — Insect')">Artifact Creature — Insect</option>
                            <option v-on:click="filterByType('Artifact Creature — Thopter')">Artifact Creature — Thopter</option>
                            <option v-on:click="filterByType('Artifact Creature — Angel')">Artifact Creature — Angel</option>
                            <option v-on:click="filterByType('Artifact Creature — Masticore')">Artifact Creature — Masticore</option>
                            <option v-on:click="filterByType('Land')">Land</option>
                            <option v-on:click="filterByType('Creature — Wall')">Creature — Wall</option>
                            <option v-on:click="filterByType('Basic Land — Plains')">Basic Land — Plains</option>
                            <option v-on:click="filterByType('Basic Land — Island')">Basic Land — Island</option>
                            <option v-on:click="filterByType('Basic Land — Mountain')">Basic Land — Mountain</option>
                            <option v-on:click="filterByType('Basic Land — Forest')">Basic Land — Forest</option>
                            <option v-on:click="filterByType('Creature — Drake')">Creature — Drake</option>
                            <option v-on:click="filterByType('Creature — Human')">Creature — Human</option>
                            <option v-on:click="filterByType('Creature — Wolf')">Creature — Wolf</option>
                            <option v-on:click="filterByType('Creature — Human Monk Cleric')">Creature — Human Monk Cleric</option>
                            <option v-on:click="filterByType('Creature — Vedalken Wizard')">Creature — Vedalken Wizard</option>
                            <option v-on:click="filterByType('Creature — Minion')">Creature — Minion</option>
                            <option v-on:click="filterByType('Creature — Zombie Mercenary')">Creature — Zombie Mercenary</option>
                            <option v-on:click="filterByType('Creature — Thrull')">Creature — Thrull</option>
                            <option v-on:click="filterByType('Creature — Bat')">Creature — Bat</option>
                            <option v-on:click="filterByType('Creature — Human Cleric Mutant')">Creature — Human Cleric Mutant</option>
                            <option v-on:click="filterByType('Legendary Creature — Goblin')">Legendary Creature — Goblin</option>
                            <option v-on:click="filterByType('Creature — Cat')">Creature — Cat</option>
                            <option v-on:click="filterByType('Creature — Antelope Beast')">Creature — Antelope Beast</option>
                            <option v-on:click="filterByType('Creature — Basilisk')">Creature — Basilisk</option>
                            <option v-on:click="filterByType('Creature — Viashino')">Creature — Viashino</option>
                            <option v-on:click="filterByType('Creature — Viashino Scout')">Creature — Viashino Scout</option>
                            <option v-on:click="filterByType('Creature — Troll Shaman')">Creature — Troll Shaman</option>
                            <option v-on:click="filterByType('Creature — Griffin')">Creature — Griffin</option>
                            <option v-on:click="filterByType('Basic Land — Swamp')">Basic Land — Swamp</option>
                            <option v-on:click="filterByType('Creature — Human Druid')">Creature — Human Druid</option>
                        </select>
                    </div>
                    <div id="artist-filter">
                        <label for="show_by">Artist: </label>
                        <select id="show_by">
                            <option value="" hidden>Choose...</option>
                            <option v-on:click="showAll">All</option>
                            <option v-on:click="filterByArtist('Pete Venters')">Pete Venters</option>
                            <option v-on:click="filterByArtist('Volkan Baǵa')">Volkan Baǵa</option>
                            <option v-on:click="filterByArtist('Justin Sweet')">Justin Sweet</option>
                            <option v-on:click="filterByArtist('Matthew D. Wilson')">Matthew D. Wilson</option>
                            <option v-on:click="filterByArtist('Rebecca Guay')">Rebecca Guay</option>
                            <option v-on:click="filterByArtist('Rob Alexander')">Rob Alexander</option>
                            <option v-on:click="filterByArtist('Zoltan Boros & Gabor Szikszai')">Zoltan Boros & Gabor Szikszai</option>
                            <option v-on:click="filterByArtist('Steven Belledin')">Steven Belledin</option>
                            <option v-on:click="filterByArtist('Daren Bader')">Daren Bader</option>
                            <option v-on:click="filterByArtist('Christopher Rush')">Christopher Rush</option>
                            <option v-on:click="filterByArtist('Stephen Tappin')">Stephen Tappin</option>
                            <option v-on:click="filterByArtist('Kev Walker')">Kev Walker</option>
                            <option v-on:click="filterByArtist('Anthony S. Waters')">Anthony S. Waters</option>
                            <option v-on:click="filterByArtist('Ittoku')">Ittoku</option>
                            <option v-on:click="filterByArtist('Luca Zontini')">Luca Zontini</option>
                            <option v-on:click="filterByArtist('rk post')">rk post</option>
                            <option v-on:click="filterByArtist('Dan Dos Santos')">Dan Dos Santos</option>
                            <option v-on:click="filterByArtist('D. Alexander Gregory')">D. Alexander Gregory</option>
                            <option v-on:click="filterByArtist('Wayne England')">Wayne England</option>
                            <option v-on:click="filterByArtist('Anson Maddocks')">Anson Maddocks</option>
                            <option v-on:click="filterByArtist('Stephen Daniele')">Stephen Daniele</option>
                            <option v-on:click="filterByArtist('Jim Murray')">Jim Murray</option>
                            <option v-on:click="filterByArtist('Christopher Moeller')">Christopher Moeller</option>
                            <option v-on:click="filterByArtist('Greg Hildebrandt')">Greg Hildebrandt</option>
                            <option v-on:click="filterByArtist('Arnie Swekel')">Arnie Swekel</option>
                            <option v-on:click="filterByArtist('Mark Poole')">Mark Poole</option>
                            <option v-on:click="filterByArtist('Alan Pollack')">Alan Pollack</option>
                            <option v-on:click="filterByArtist('Michael Sutfin')">Michael Sutfin</option>
                            <option v-on:click="filterByArtist('Mark Zug')">Mark Zug</option>
                            <option v-on:click="filterByArtist('Randy Gallegos')">Randy Gallegos</option>
                            <option v-on:click="filterByArtist('Jim Pavelec')">Jim Pavelec</option>
                            <option v-on:click="filterByArtist('Alex Horley-Orlandelli')">Alex Horley-Orlandelli</option>
                            <option v-on:click="filterByArtist('Franz Vohwinkel')">Franz Vohwinkel</option>
                            <option v-on:click="filterByArtist('Roger Raupp')">Roger Raupp</option>
                            <option v-on:click="filterByArtist('Adam Rex')">Adam Rex</option>
                            <option v-on:click="filterByArtist('Daarken')">Daarken</option>
                            <option v-on:click="filterByArtist('Ralph Horsley')">Ralph Horsley</option>
                            <option v-on:click="filterByArtist('Mark Tedin')">Mark Tedin</option>
                            <option v-on:click="filterByArtist('Scott M. Fischer')">Scott M. Fischer</option>
                            <option v-on:click="filterByArtist('Mark Brill')">Mark Brill</option>
                            <option v-on:click="filterByArtist('Greg Staples')">Greg Staples</option>
                            <option v-on:click="filterByArtist('Brian Despain')">Brian Despain</option>
                            <option v-on:click="filterByArtist('Carl Critchlow')">Carl Critchlow</option>
                            <option v-on:click="filterByArtist('Jeremy Jarvis')">Jeremy Jarvis</option>
                            <option v-on:click="filterByArtist('Darrell Riche')">Darrell Riche</option>
                            <option v-on:click="filterByArtist('Dave Kendall')">Dave Kendall</option>
                            <option v-on:click="filterByArtist('Matt Thompson')">Matt Thompson</option>
                            <option v-on:click="filterByArtist('Thomas M. Baxa')">Thomas M. Baxa</option>
                            <option v-on:click="filterByArtist('Jim Nelson')">Jim Nelson</option>
                            <option v-on:click="filterByArtist('Brom')">Brom</option>
                            <option v-on:click="filterByArtist('Robert Bliss')">Robert Bliss</option>
                            <option v-on:click="filterByArtist('Jon J Muth')">Jon J Muth</option>
                            <option v-on:click="filterByArtist("William O'Connor")">William O'Connor</option>
                            <option v-on:click="filterByArtist('Ron Spears')">Ron Spears</option>
                            <option v-on:click="filterByArtist('Tom Fleming')">Tom Fleming</option>
                            <option v-on:click="filterByArtist('Eric Peterson')">Eric Peterson</option>
                            <option v-on:click="filterByArtist('Nelson DeCastro')">Nelson DeCastro</option>
                            <option v-on:click="filterByArtist('Dany Orizio')">Dany Orizio</option>
                            <option v-on:click="filterByArtist('Terese Nielsen')">Terese Nielsen</option>
                            <option v-on:click="filterByArtist('Aleksi Briclot')">Aleksi Briclot</option>
                            <option v-on:click="filterByArtist('Scott Kirschner')">Scott Kirschner</option>
                            <option v-on:click="filterByArtist('Puddnhead')">Puddnhead</option>
                            <option v-on:click="filterByArtist('Dermot Power')">Dermot Power</option>
                            <option v-on:click="filterByArtist('Roger Raupp')">Roger Raupp</option>
                            <option v-on:click="filterByArtist('Francis Tsai')">Francis Tsai</option>
                            <option v-on:click="filterByArtist('Tristan Elwell')">Tristan Elwell</option>
                            <option v-on:click="filterByArtist('Mike Dringenberg')">Mike Dringenberg</option>
                            <option v-on:click="filterByArtist('Jeff Easley')">Jeff Easley</option>
                            <option v-on:click="filterByArtist('Dave Dorman')">Dave Dorman</option>
                            <option v-on:click="filterByArtist('Chippy')">Chippy</option>
                            <option v-on:click="filterByArtist('John Matson')">John Matson</option>
                            <option v-on:click="filterByArtist('Matt Cavotta')">Matt Cavotta</option>
                            <option v-on:click="filterByArtist('DiTerlizzi')">DiTerlizzi</option>
                            <option v-on:click="filterByArtist('Brian Snõddy')">Brian Snõddy</option>
                            <option v-on:click="filterByArtist('Ben Thompson')">Ben Thompson</option>
                            <option v-on:click="filterByArtist('Lucio Parrillo')">Lucio Parrillo</option>
                            <option v-on:click="filterByArtist('Nick Percival')">Nick Percival</option>
                            <option v-on:click="filterByArtist('Steve Luke')">Steve Luke</option>
                            <option v-on:click="filterByArtist('Mike Ploog')">Mike Ploog</option>
                            <option v-on:click="filterByArtist('Jeff Miracola')">Jeff Miracola</option>
                            <option v-on:click="filterByArtist('Marcelo Vignali')">Marcelo Vignali</option>
                            <option v-on:click="filterByArtist('Gary Ruddell')">Gary Ruddell</option>
                            <option v-on:click="filterByArtist('Heather Hudson')">Heather Hudson</option>
                            <option v-on:click="filterByArtist('Steve Firchow')">Steve Firchow</option>
                            <option v-on:click="filterByArtist('Paolo Parente')">Paolo Parente</option>
                            <option v-on:click="filterByArtist('Donato Giancola')">Donato Giancola</option>
                            <option v-on:click="filterByArtist('Jon Foster')">Jon Foster</option>
                            <option v-on:click="filterByArtist('Cyril Van Der Haegen')">Cyril Van Der Haegen</option>
                            <option v-on:click="filterByArtist('Lars Grant-West')">Lars Grant-West</option>
                            <option v-on:click="filterByArtist('Richard Sardinha')">Richard Sardinha</option>
                            <option v-on:click="filterByArtist('D. J. Cleland-Hura')">D. J. Cleland-Hura</option>
                            <option v-on:click="filterByArtist('John Howe')">John Howe</option>
                            <option v-on:click="filterByArtist('Dan Scott')">Dan Scott</option>
                            <option v-on:click="filterByArtist('Larry Elmore')">Larry Elmore</option>
                            <option v-on:click="filterByArtist('John Avon')">John Avon</option>
                            <option v-on:click="filterByArtist('Jeffrey R. Busch')">Jeffrey R. Busch</option>
                            <option v-on:click="filterByArtist('Tim Hildebrandt')">Tim Hildebrandt</option>
                            <option v-on:click="filterByArtist('Todd Lockwood')">Todd Lockwood</option>
                            <option v-on:click="filterByArtist('Ron Spencer')">Ron Spencer</option>
                            <option v-on:click="filterByArtist('Doug Chaffee')">Doug Chaffee</option>filterByArtist
                            <option v-on:click="filterByArtist('John Zeleznik')">John Zeleznik</option>
                            <option v-on:click="filterByArtist('Dana Knutson')">Dana Knutson</option>
                            <option v-on:click="filterByArtist('Hannibal King')">Hannibal King</option>
                            <option v-on:click="filterByArtist('Stephan Martiniere')">Stephan Martiniere</option>
                            <option v-on:click="filterByArtist('Scott Bailey')">Scott Bailey</option>
                            <option v-on:click="filterByArtist('Richard Wright')">Richard Wright</option>
                            <option v-on:click="filterByArtist('Martina Pilcerova')">Martina Pilcerova</option>
                            <option v-on:click="filterByArtist('Glen Angus')">Glen Angus</option>
                            <option v-on:click="filterByArtist('Vance Kovacs')">Vance Kovacs</option>
                            <option v-on:click="filterByArtist('Una Fricker')">Una Fricker</option>
                            <option v-on:click="filterByArtist('Michael Koelsch')">Michael Koelsch</option>
                            <option v-on:click="filterByArtist('Wayne Reynolds')">Wayne Reynolds</option>
                            <option v-on:click="filterByArtist('Steve White')">Steve White</option>
                            <option v-on:click="filterByArtist('Andrew Goldhawk')">Andrew Goldhawk</option>
                            <option v-on:click="filterByArtist('Nils Hamm')">Nils Hamm</option>
                            <option v-on:click="filterByArtist('Michael Komarck')">Michael Komarck</option>
                            <option v-on:click="filterByArtist('Ray Lago')">Ray Lago</option>
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
        filterByType(property) {
            this.cards = this.originalCards.filter(card => card.type == property)
        },
        filterByArtist(property) {
            this.cards = this.originalCards.filter(card => card.artist == property)
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
