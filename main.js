let randomNoun = "";
let randInitialVerb = "";
let randActingVerb = "";


// arrays containing possible sections for 3 parts of the random message
let nouns = ["The bears ", "The foxes ", "The squirrel ", "The ladybug ", "Mushroom Guy ", 
"The guy, who was just pasing by, ", "The peanutbutter side of the pb & j ", "The peanutbutter side of the pb & j ",
"The Mushroom Guy's wife, Mushroom Gal, ", "The leaf ", "The snail with evil eyes ", "The human ", "The dog holding two shiny marbles " ]

let initialVerbs = ["ran from the dragon", "enjoyed some cupcakes with the queen of donuts", "fought off an evil whorde of scorpiobees", "read from a diary they shouldn/'t have read from", 
"fell down a ravine", "climbed the highest mountain", "earned a one way trip to The Shadow Realm", "succumbed to their existensital dread",
"died, but not in an irrreversable way", "created a new universe on accident", "sang a song of joy"]

let actingVerbs = [", thinking about that one time they did something really cringey.", ", trying to explain a familiar feeling that is kind of there but not really but almsot there",
 ", listening to Tame Impala", ", thinking 'wow thanks Obama.'", ", looking for the forbidden milk.", ", only to realize, God is dead",
  ", contemplating their existnce within the realms of a javascript file.",]

// functions that select random element from their respective arrays above
function selectRandomNoun() {
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomNoun;
};

function selectRandomInitialVerb() {
    randInitialVerb = initialVerbs[Math.floor(Math.random() * initialVerbs.length)];
    return randInitialVerb;
};

function selectRandomActingVerb() {
    randActingVerb = actingVerbs[Math.floor(Math.random() * actingVerbs.length)];
    return randActingVerb;
};

// generates random message with 3 elements returned through functions above
function generateRandomMessage () {
    selectRandomNoun();
    selectRandomInitialVerb();
    selectRandomActingVerb();
    return randomNoun + randInitialVerb + randActingVerb;
};


console.log(generateRandomMessage())
