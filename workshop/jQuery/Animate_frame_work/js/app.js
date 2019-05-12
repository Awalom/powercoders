
// To Initialize jquery when the document is ready
$(function(){
  // animation without vierpoer
  $("#hide").click(function(){
    $("p").hide();
    $(".name2").css("display", "none");
  });
  $("#show").click(function(){
    $("p").show();
    $(".name2").fadeIn(4000).css("display", "block");
    $(".name2").css("background-color", "yellow");
  });
  
  // Animation using the viewer port
    $('.section').addClass('hiden');

    $('.section').viewportChecker({
      classToAdd: 'animated slideInLeft',
      classToRemove: 'hiden',
      offSet: '100%',
      repeat: 'true'
    });
});
