describe('Unit test for my whichShift function' , function(){
    it("it should return the right price based on the Morning shift''" , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it("it should return the right price based on the Afternoon shift''" , function(){
       assert.equal(transportFee('afternoon'), 'R10'); 
    });

    it("it should return the right price based on the Night shift''" , function(){
      assert.equal(transportFee('nightshift'), 'free');
    });
    
});
