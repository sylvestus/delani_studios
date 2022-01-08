//jquery
$(document).ready(function () {
  $("#design").click(function () {
    $("#design_txt").toggle();
  });
  $("#dev").click(function () {
    $("#development_txt").toggle();
  });
  $("#product").click(function () {
    $("#product_management_txt").toggle();
  });

  $(".hov_me1").hover(function () {
    $(".wonger_hov1").toggle();
    $(".wonger_hov1").css({});
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
      " transition": "transform 0.9s",
      " transform": "scale(1.5)",
    });
  });
  $(".hov_me2").hover(function () {
    $(".wonger_hov2").toggle();
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
    });
  });
  $(".hov_me3").hover(function () {
    $(".wonger_hov3").toggle();
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
    });
  });
  $(".hov_me4").hover(function () {
    $(".wonger_hov4").toggle();
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
    });
  });
  $(".hov_me5").hover(function () {
    $(".wonger_hov5").toggle();
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
    });
  });
  $(".hov_me6").hover(function () {
    $(".wonger_hov6").toggle();
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
      //"box-shadow": "3px 2px 5px white",
    });
  });
  $(".hov_me7").hover(function () {
    $(".wonger_hov7").toggle();
    $(".wonger_txtHov").css({
      "background-color": "rgba(255, 255, 255, 0.6)",
    });
  });
  $(".hov_me8").hover(function () {
    $(".wonger_showing").toggle();
    $(".wonger_hidden").toggle();
  });

  //form submission

  $("#cta").click(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    if (name == null || name == "") {
      $("#error").html("enter name!");
    } else if (email == null || email == "") {
      $("#error").html("enter email!");
    } else if (message == null || message == "") {
      $("#error").html("enter your message!");
    } else {
      let fetchData={
        method: 'POST',
        body: JSON.stringify({Name: name, Email: email, Message: message, js: true}), 
        Headers: {"content-type": "application/JSON"}

      }
      fetch('/subscribe' ,fetchData)
      .then(res => {
        if(res.ok){
        //console.log('it worked')
        alert("you have successfully submited your feedback")
        }else{
          $("#up_error").html("failed!");
        }
      })
      alert("thank you " + name + "we have recieved your feedback");
    }
  });
});
