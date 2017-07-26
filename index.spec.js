const Chance = require('chance');

const object = require('./index');

describe('index.js', () => {
    const chance = new Chance();

    let word;

    beforeEach(() => {
        word = chance.word();

        spyOn(Chance.prototype, 'word').and.returnValue(word);

        chance.mixin({
            object
        });
    });

    it('should return random object', () => {
        const result = chance.object();

        expect(result).toEqual({
            [word]: word
        });
    });

    it('should return random object along with specified keys / values', () => {
        const result = chance.object({
            key: 'value'
        });

        expect(result).toEqual({
            key: 'value',
            [word]: word
        });
    });
});
