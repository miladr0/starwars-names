const allNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');
const getRandomItem = uniqueRandomArray(allNames);

module.exports = {
    all: allNames,
    random: random
};

function random(number) {
    if(number === undefined) {
        return getRandomItem();
    }else {
        let randomItems = [];
        for (let i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }

        return randomItems;
    }
}