$(document).ready(function(){
    $("#button1").click(function(){
        $(this).hide(); //	Selects the current HTML element
    });
    $("#button2").click(function(){
        $("p").show();
    });
});