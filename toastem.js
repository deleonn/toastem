var toastem = (function($){

  var normal = function(content){
  $("#normal-alert").on('click', function(){
    var item = $('<div class="notification normal"><span>'+content+'</span></div>');
    $("#toastem").append($(item));
    $(item).animate({"right":"12px"}, "fast");
    setInterval(function(){
      $(item).animate({"right":"-400px"},function(){
        $(item).remove();
      });
    },4000);
  });
};



var success = function(content){
  $("#success-alert").on('click', function(){
      var item = $('<div class="notification success"><span>'+content+'</span></div>');
      $("#toastem").append($(item));
      $(item).animate({"right":"12px"}, "fast");
      setInterval(function(){
        $(item).animate({"right":"-400px"},function(){
          $(item).remove();
        });
      },4000);
    });
};


var error = function(content){
  $("#error-alert").on('click', function(){
    var item = $('<div class="notification error"><span>'+content+'</span></div>');
    $("#toastem").append($(item));
    $(item).animate({"right":"12px"}, "fast");
    setInterval(function(){
      $(item).animate({"right":"-400px"},function(){
        $(item).remove();
      });
    },4000);
  });
};

  $(document).on('click','.notification', function(){
      $(this).fadeOut(400,function(){
        $(this).remove();
      });
  });

  return{
    normal: normal,
    success: success,
    error: error
  };

})(jQuery);
