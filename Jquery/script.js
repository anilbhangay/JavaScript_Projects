// $(document).ready(function(){ 
//   $("#btn1").click(function(){
//     $("#box").animate({left: "250px"}, 3000, function(){alert("Animation Completed");});
//   });
//      $("#btn2").click(function(){
//         $("#box").stop();
//      });
// });


$(document).ready(function(){
   $("#btn1").click(function(){
    $("#box").animate({
       height: "250px",
       width: "250px",
       "background-color": 'blue',
       "margin-left": "280px",
       "margin-top": "280px",
    }, 3000);
   });
});