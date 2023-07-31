$(document).ready(function(){ 
  $("#btn1").click(function(){
    $("#box").animate({left: "250px"}, 3000, function(){alert("Animation Completed");});
  });
     $("#btn2").click(function(){
        $("#box").stop();
     });
});


