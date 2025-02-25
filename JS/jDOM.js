// Get Content and Attribute
// text() and html() 
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("text: " + $("#text").text());
    })
    $("#btn2").click(function(){
        alert("HTML: " + $("#text").html());
    })
})

// Value()
$(document).ready(function(){
    $("#value").click(function(){
        alert("Value: " + $("#test").val());
    })
})

// attr()
$(document).ready(function(){
    $("#Show").click(function(){
        alert("Attribute Value is : " + $("#img").attr("src"));
        alert("Attribute Value is : " + $("#img").attr("alt"));
    });
});


// Set Content and Attribute
// text()
$(document).ready(function(){
    $("#text-btn").click(function(){
        $("#test1").text("Hello World");
    });
});

// html()
$(document).ready(function(){
    $("#text-html").click(function(){
        $("#test2").html("<b>Hello World</b>");
    });
});

// value()
$(document).ready(function(){
    $("#text-value").click(function(){
        $("#name").val("Khushi Patel");
    });
});

// Callbacks Function for text()
$(document).ready(function(){
    $("#text-change").click(function(){
        $("#test3").text(function(){
            let originText = $("#test3").text();
            return "Old Text is: " + originText + "New Text : Hello World"
        })
    })
})

// Callbacks Function for html()
$(document).ready(function(){
    $("#html-change").click(function(){
        $("#test4").html(function(){
            let originText1 = $("#test4").text();
            return "Old Text is: " + originText1 + "New Text : Hello <b>World</b>"
        })
    })
})

// attr()
$(document).ready(function(){
    $("#google").click(function(){
        $("#google-link").text("Facebook");
        $("#google-link").attr("href", "https://www.facebook.com/")
    })
})


// jQuery Add Element
// Append()
$(document).ready(function(){
    $("#appended").click(function(){
        $("#app").append("<b>Hello World</b>")
    })
})

// Prepend()
$(document).ready(function(){
    $("#appended").click(function(){
        $("#app").prepend("<b>Hello World</b>")
    })
})

// after()
$(document).ready(function(){
    $("#appended").click(function(){
        $("#app").after("<b>Hello World</b>")
    })
})

// before()
$(document).ready(function(){
    $("#appended").click(function(){
        $("#app").before("<b>Hello World</b>")
    })
})

// Remove
$(document).ready(function(){
    $("#remove").click(function(){
        $("#div1").remove();
    })
})

// Empty
$(document).ready(function(){
    $("#remove").click(function(){
        $("#div1").empty();
    })
})