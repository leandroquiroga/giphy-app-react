import { fetchGiff } from './../../helpers/getGift';



describe('Tests on de helpers fetchGiff.js', () => {
    const lengthArr = 50;

    test('This test must must return the length of the array response (data) ', async () => {
        const data = await fetchGiff('Marvel');

        expect(data.length).toBe(lengthArr);
    });

    test('This test not must return elements because have not receive argument', async() => {
        const data = await fetchGiff('');

        expect(data.length).toEqual( 0 )
    })

}) 