// $(document).ready(function(){ 
//   $("#btn1").click(function(){
//     $("#box").animate({left: "250px"}, 3000, function(){alert("Animation Completed");});
//   });
//      $("#btn2").click(function(){
//         $("#box").stop();
//      });
// });


// $(document).ready(function(){
//    $("#btn1").click(function(){
//     $("#box").animate({
//       "background-color": "yellow",
//        height: "250px",
//        width: "250px",
//        "margin-left": "280px",
//        "margin-top": "280px",
//     }, 4000, function(){alert("Animate Completed")});
//    });
//        $("#btn2").click(function(){
//          $("#box").stop();
//        });
// });


 $(document).ready(function(){
     $(".btn1").click(function(){
       alert("Text : " + $(".para1").text());
     });

       $(".btn2").click(function(){
         alert("HTML : " + $(".para2").html());
       });

         $(document).ready(function(){
           $(".btn3").click(function(){
             alert("Value : " + $(".search").val());
           });
         });
 });