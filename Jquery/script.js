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


//  $(document).ready(function(){
//      $(".btn1").click(function(){
//        alert("Text : " + $(".para1").text());
//      });

//        $(".btn2").click(function(){
//          alert("HTML : " + $(".para2").html());
//        });

//          $(document).ready(function(){
//            $(".btn3").click(function(){
//              alert("Value : " + $(".search").val());
//            });
//          });
//  });


      $(document).ready(function(){
         $(".btn1").click(function(){
           $(".para1").text("Web Developer Page!");
           });
         
           $(".btn2").click(function(){
            $(".para2").html("<h2>How to Learn Jquery</h2>");
            });

            $(".btn3").click(function(){
              $(".search").val("Enter Here");
              });
      });

       $(document).ready(function(){
          $(".btn4").click(function(){
            alert($(".srch").attr("href"));
          });
       });

