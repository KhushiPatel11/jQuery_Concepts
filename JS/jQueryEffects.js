// slide down 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#slide").slideDown("slow");
    })
})

// slide up
$(document).ready(function(){
    $("#flip").click(function(){
        $("#slide").slideUp("slow");
    })
})

// slide toggle
$(document).ready(function(){
    $("#flip").click(function(){
        $("#slide").slideToggle("slow");
    })
})