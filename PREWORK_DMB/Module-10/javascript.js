$("#button1").on("click", function(){
    $("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#button2").on("click", function(){
    $("#box").css("background-color","blue");
})

$("#button3").on("click", function(){
    $("#box").animate({opacity:"-=.2"});
})

$("#button4").on("click", function(){
    $("#box").animate({height:"150px", width:"150px", opacity:"1"}).css("background-color","orange");
})