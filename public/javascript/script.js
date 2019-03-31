
// on page load
$(function() {
  console.log(`hello world`);

  $("#add-burger-btn").click(function(event) {
    // if the burger-name-help has anything, clear it out
    $("#burger-name-help").html("");

    let myInput = $("#burger-name-input").val();
    if(myInput.length <= 0) {
      // no input, tell the user with the burger-name-help
      $("#burger-name-help").html("The burger name cannot be blank.");
    } else {
      // create a new burger
      let newBurger = {
        name: myInput,
        devoured: 0,
      }
      $.ajax({
        type: `POST`,
        url: `/api/burgers`,
        data: newBurger,
        success: function (result) {
          //console.log(`successful ajax`);
          // reload the page to force a refresh of the burger list
          location.reload();
        }
      });
    }

    // empty the input
    $("#burger-name-input").val("");
  });

  $(".devour-btn").click(function(event) {
    let myId = $(this).attr(`data-burgerId`);
    $.ajax({
      type: `PUT`,
      url: `/api/burgers/${myId}`,
      success: function (result) {
        //console.log(`successful ajax`);
        // reload the page to force a refresh of the burger list
        location.reload();
      }
    });
  });
});