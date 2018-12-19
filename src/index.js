const allNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: allNames,
    random: uniqueRandomArray(allNames)
};