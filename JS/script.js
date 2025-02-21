console.log($);

$(document).ready(function () {
  console.log("We are using jQuery");
  $('p').click(function () {
    console.log("you click this paragraph");
    // $('p').hide(); it's hide all p tag 
    // if we want to hide this p when i clicked on this particular p so i can use this
    $(this).hide();
  })

})