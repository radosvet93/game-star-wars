const helpers = require('./index');

describe('Helpers', () => {
    it('shuffleArr', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];

        expect(helpers.shuffleArr([1])).toEqual([1]);
        expect(helpers.shuffleArr(arr)).toEqual(expect.arrayContaining(expected));
    });

    it('shuffleArr should received array', () => {
        expect(helpers.shuffleArr([])).toEqual(expect.arrayContaining([]));
    });
})