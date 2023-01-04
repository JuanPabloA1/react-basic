import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";

describe('Pruebas de 08-imp-exp', () => {
    
    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    });

    test('getHeroesByOwner debe de retornar un arreglo de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'}
        ])
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

    test('getHeroesByOwner debe de retornar un arreglo de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });
});