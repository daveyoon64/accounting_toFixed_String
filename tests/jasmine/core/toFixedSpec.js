describe('toFixed()', function(){

    it('should properly format numbers with given precision', function(){
        expect( accounting.toFixed('1.005', 2) ).toBe( '1.01' );
        expect( accounting.toFixed('10.235', 2) ).toBe( '10.24' );
        expect( accounting.toFixed('0.615', 2) ).toBe( '0.62' );
        expect( accounting.toFixed('0.614', 2) ).toBe( '0.61' );
    });
    
    it('should pad zeroes correctly using precision', function(){  
        expect( accounting.toFixed('54321', 5) ).toBe( '54321.00000' );
        expect( accounting.toFixed('0.54321', 8) ).toBe( '0.54321000' );
    });
});
