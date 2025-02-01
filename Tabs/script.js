$(".tab").click(function () {
  $(".tab").removeClass("active");
  $(this).addClass("active");
  var tabIndex = $(this).index();
  $("p").text("Tab " + tabIndex);
});
