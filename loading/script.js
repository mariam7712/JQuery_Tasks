$(window).on("load", function () {
  $(".content").animate({ width: "100%" }, 4000, function () {
    $(".content").animate({ height: "100vh" }, 4000, function () {
      $(".h").fadeIn(3000, function () {
        $(".p").fadeIn(3000, function () {
          $(".images").fadeIn(3000);
        });
      });
    });
  });
});
