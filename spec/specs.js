describe('ShippingCalculator', function() {
  describe('calculateCost', function(){
    it('calculates the cost of shipping an item using zip code and weight', function(){
      var testPackage = Object.create(ShippingCalculator);
      testPackage.startingZip = 54543;
      testPackage.endingZip = 96701;
      testPackage.weight = 7;
      testPackage.calculateCost().should.equal(28);
    });
  });
});
