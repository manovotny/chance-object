const Chance = require('chance');

const chance = new Chance();

module.exports = (object) => ({
    [chance.word()]: chance.word(),
    ...object
});
