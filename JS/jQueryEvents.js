// Click() Event
$(document).ready(function () {
    $("p").click(function(){
        $(this).hide();
    });
}); 


// dblClick() Event
$(document).ready(function () {
    $("div").dblclick(function(){
        $(this).hide();
    });
}); 

// mouseenter() Event
$(document).ready(function () {
    $("p").mouseenter(function(){
        $(this).hide();
    });
}); 

// mouseleave() Event
$(document).ready(function () {
    $("p").mouseleave(function(){
        $(this).hide();
    });
}); 

// mousedown() Event
$(document).ready(function () {
    $("#para").mousedown(function(){
        alert("Mouse down over p")
    });
}); 

// mouseup() Event
$(document).ready(function () {
    $("p").mouseup(function(){
        $(this).hide();
    });
}); 

// hover() Event
$(document).ready(function () {
    $("p").hover(function(){
        $(this).hide();
    });
}); 

// focus() Event
$(document).ready(function () {
    $("p").mouseenter(function(){
        $(this).hide();
    });
}); 