const { getGifs } = require("../../helpers/getGifs")


describe('Pruebas con fetch getGifs fetch', () => {
    test('Debe de devolver 10 elementos', async () => {
        const gifs = await getGifs("One Punch");

        expect( gifs.length ).toBe( 10 );
    })

    test('Debe de devolver 0 elementos', async () => {
        const gifs = await getGifs("");

        expect( gifs.length ).toBe( 0 );
    })
    
})
