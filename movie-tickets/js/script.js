// business logic

function Ticket(title, time, age) {
  this.title = title;
  this.time = parseInt(time);
  this.age = parseInt(age);
  };

  Ticket.prototype.price = function() {
    var price = 12;
    if (this.age < 12 || this.age > 65){
      price = price * .75
    } else if (this.time < 5) {
      price = price * .60
    } else if (this.title == "ghostbusters" || "war dogs" || "suicide squad") {
      price = price * .85
    } else {
      price = price
    }
    return price;
  };

//front end logic

$(document).ready(function() {
  $("#newTicket").submit(function(event) {
    event.preventDefault();
    var inputtedTitle = $("input#newTitle").val();
    var inputtedTime = $("input#newTime").val();
    var inputtedAge = $("input#newAge").val();

    var myTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);
    console.log(myTicket);
    $("#showPrice").append("<li>" + myTicket.price() + "</li>");
  });
});
