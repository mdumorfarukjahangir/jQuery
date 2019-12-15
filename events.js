// All the different visitors' actions that a web page can respond to are called events.
// Examples:

// 1. moving a mouse over an element
// 2. selecting a radio button
// 3. clicking on an element
// $(document).ready(function(){
//     $("#button1").dblclick(function(){
//         $("p").hide();
//     });

//     $("#button2").dblclick(function(){
//         $("p").show();
//     });
// });

$(document).ready(function(){
// $("#button1").mouseenter(function(){
//    alert("Something wrong");
// });

// $("#button1").mouseleave(function(){
//     alert("Bye ! You now leave Hide Button");
// })

// $("input").focus(function(){
//     $(this).css("background-color", "#ccc");
   
//   });

  

  $("#button1").click(function(){
    $("p").toggle(1000); // Toggle means hide and show and 1000 milisecond toggle time
  });
});