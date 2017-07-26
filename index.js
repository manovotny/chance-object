module.exports = (object) => Object.assign(
    {},
    {[chance.word()]: chance.word()}, // eslint-disable-line no-undef
    object
);
