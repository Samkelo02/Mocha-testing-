describe('Test my greet function' , function(){
    it("It should return 'Hello, Samke' when called with 'Samke' ", function(){
        assert.equal("Hello, Samke",greet("Samke"));

    });

        
    it("It should return 'Hello, Mpilo' when called with 'Mpilo' ", function(){
        assert.equal("Hello, Mpilo",greet("Mpilo"));
    });

    it("It should return 'Hello, Mpilo' when called with 'Anele' ", function(){
        assert.equal("Hello, Anele",greet("Anele"));
    });


});