var ShippingCalculator = {
  calculateCost: function() {
    var start = Math.floor(this.startingZip / 10000);
    var end = Math.floor(this.endingZip / 10000);
    var distance = (Math.abs(start - end)) + 1;
    return distance * this.weight;
  }
};


$(document).ready(function() {
  $("#shipping-info").submit(function(event) {
    event.preventDefault();

    var start = $("#starting-zip").val();
    var end = $("#ending-zip").val();
    var weight = $("#weight").val();
    var newCost = Object.create(ShippingCalculator);

    newCost.startingZip = start;
    newCost.endingZip = end;
    newCost.weight = weight;

    $(".result").text(newCost.calculateCost());    
  });
});
