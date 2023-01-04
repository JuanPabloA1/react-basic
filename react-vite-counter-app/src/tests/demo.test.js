describe('Pruebas en <DemoComponent>', () => {
    
    test('Esta prueba no debe de fallar', () => {
    
        // 1. inicalizacion
        const message = 'Hola Mundo';
    
        // 2. estimulo
        const message2 = message.trim();
    
        // 3. observar el comportamiento... esperado
        expect( message ).toBe( message2 );
    });
});
