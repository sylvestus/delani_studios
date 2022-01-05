// var projectName = function () {
//   $("#wonger").css({
//     "background": "rgba(0, 0, 0, 0.6);",
//     " transition": "transform 0.9s;",
//     " display": "visible;",
//     " transform": "scale(1.5);",
//   });
// };

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

  // $("#wonger").hover(
  //   function () {
  //     $(".wonger_txt").show();
  //     $(this).css({ background: "yellow" });
  //   },
  //   function () {
  //     $(this).css({ background: "transparent" });
  //   }
   
  // );

  $(".hov_me1").hover(function() {
    $(".wonger_hov1").toggle();
    $(".wonger_hov1").css({
     
     
    }
      );
      $(".wonger_txtHov").css({
        "background-color": "rgba(255, 255, 255, 0.6)" ,
        " transition": "transform 0.9s",
        " transform": "scale(1.5)",
      })
    
 
  });
  $(".hov_me2").hover(function() {
    $(".wonger_hov2").toggle();
 
  });
  $(".hov_me3").hover(function() {
    $(".wonger_hov3").toggle();
 
  });
  $(".hov_me4").hover(function() {
    $(".wonger_hov4").toggle();
 
  });
  $(".hov_me5").hover(function() {
    $(".wonger_hov5").toggle();
 
  });
  $(".hov_me6").hover(function() {
    $(".wonger_hov6").toggle();
 
  });
  $(".hov_me7").hover(function() {
    $(".wonger_hov7").toggle();
 
  });
$(".hov_me8").hover(function(){
  $(".wonger_showing").toggle();
  $(".wonger_hidden").toggle();
})
});
