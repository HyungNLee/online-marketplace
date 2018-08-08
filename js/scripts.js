$(document).ready(function() {

    $("#inputBoxes").submit(function(event) {
      var nameInput = $("input#name").val();
      var addressInput = $("input#address").val();
      var emailInput= $("input#email").val();
      var colorInput = $("#color").val();
      var shippingInput = $("input:radio[name=shipping]:checked").val();

      $(".nameReturn").text(nameInput);
      $(".addressReturn").text(addressInput);
      $(".emailReturn").text(emailInput);
      $(".colorReturn").text(colorInput);
      $(".shippingReturn").text(shippingInput);

      //Error message
        if (nameInput.length != 0 && addressInput.length != 0 &&
              emailInput.length != 0) {
              $(".modal").show();
            } else {
              alert("Please enter valid information.")
            }

    event.preventDefault();
  });
// Modal clicks
//   $("#buy").click(function() {
//   $(".modal").show();
// });
$(".close").click(function() {
  $(".modal").hide();
});


})
