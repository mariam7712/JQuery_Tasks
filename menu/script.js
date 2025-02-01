$(document).ready(function () {
  $("p").hide();
  $(".a").hide();
  $(".b").hide();
  $(".c").hide();
  $(".container").css("width", "30px");

  var isCVisible = false;

  $(".container").mouseenter(function () {
    $(this).animate({ width: "200px" }, 1000);
    $(".a").show();
    $(".b").show();
    $(".a").click(function () {
      if (isCVisible) {
        $(".c").hide();
      } else {
        $(".c").show();
      }
      isCVisible = !isCVisible;
    });
    $(".b").click(function () {
      if (isCVisible) {
        $(".d").hide();
      } else {
        $(".d").show();
      }
      isCVisible = !isCVisible;
    });
  });
});

$(".container").mouseleave(function () {
  $(this).animate({ width: "10px" }, 1000);
  $(".a").hide();
  $(".b").hide();
});
/* $(".container").hover(
  function () {
    $(this).animate({ width: "200px" }, 1000);
    $(".a").show();
    $(".b").show();
  },
  function () {
    $(this).animate({ width: "10px" }, 1000);
    $(".a").hide();
    $(".b").hide();
  }
); */
