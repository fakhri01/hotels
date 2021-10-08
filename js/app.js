// Date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var dmy = document.getElementById("date");
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = dd + " " + mm + " " + yyyy;
dmy.innerHTML = today;

$(document).ready(function () {
  // Nav Toggling
  $(".mini-nav").click(function () {
    $(".nav-links").toggleClass("show");
  });

  // Read more button
  var readerIcon = true;
  animateTime = 500;
  $("#readMore").on("click", function () {
    function myFunc() {
      if (readerIcon == true) {
        $(".gambl").animate({ height: "450px" }, animateTime);
        $(".gambl-container").animate({ height: "370px" }, animateTime);
        $("#readMoreIcon").toggleClass("rotateIcon");
        readerIcon = false;
        $("#readMore").text("Read less");
      } else {
        $(".gambl").animate({ height: 183 + "px" }, animateTime);
        $(".gambl-container").animate({ height: 93 + "px" }, animateTime);
        $("#readMoreIcon").toggleClass("rotateIcon");
        readerIcon = true;
        $("#readMore").text("Read more");
      }
    }
    myFunc();
  });

  // filter starts
  var arr = [];
  var listLength = $(".filter-body>ul").length;
  $(".filter-header [filter]").click(function () {
    var filterName = $(this).attr("filter");
    var card = $(".filter-body .card");

    if (filterName === "all") {
      $(this).addClass("active_filter").siblings().removeClass("active_filter");
      card.fadeIn();
      arr = [];
    } else {
      $(".filter-header [filter='all']").removeClass("active_filter");
      $(this).toggleClass("active_filter");

      card.fadeOut(0);

      var attr = $(this).attr("filter");
      if (arr.includes(attr)) {
        if (arr.length == 1) {
          $(".filter-header [filter='all']").addClass("active_filter");
          card.fadeIn();
          arr = jQuery.grep(arr, function (value) {
            return value != attr;
          });
        } else {
          arr = jQuery.grep(arr, function (value) {
            return value != attr;
          });
        }
      } else {
        arr.push($(this).attr("filter"));
      }
      console.log(arr);

      // console.log(arr)

      for (var i = 1; i < listLength + 1; i++) {
        // console.log('a');

        // $('.filter-body .card[filter=' + arr[i] + ']').fadeIn();
        if (arr.length == 1) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (item.includes(arr[0])) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 2) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (item.includes(arr[0]) && item.includes(arr[1])) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 3) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 4) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 5) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3]) &&
            item.includes(arr[4])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 6) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3]) &&
            item.includes(arr[4]) &&
            item.includes(arr[5])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 7) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3]) &&
            item.includes(arr[4]) &&
            item.includes(arr[5]) &&
            item.includes(arr[6])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 8) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3]) &&
            item.includes(arr[4]) &&
            item.includes(arr[5]) &&
            item.includes(arr[6]) &&
            item.includes(arr[7])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 9) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3]) &&
            item.includes(arr[4]) &&
            item.includes(arr[5]) &&
            item.includes(arr[6]) &&
            item.includes(arr[7]) &&
            item.includes(arr[8])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        } else if (arr.length == 10) {
          var item = $(".filter-body .card:nth-child(" + i + ")").attr(
            "filter"
          );
          if (
            item.includes(arr[0]) &&
            item.includes(arr[1]) &&
            item.includes(arr[2]) &&
            item.includes(arr[3]) &&
            item.includes(arr[4]) &&
            item.includes(arr[5]) &&
            item.includes(arr[6]) &&
            item.includes(arr[7]) &&
            item.includes(arr[8]) &&
            item.includes(arr[10])
          ) {
            $(".filter-body .card:nth-child(" + i + ")").fadeIn();
          }
        }
      }
    }
  });
  // filter ends

  // Games tab menu starts

  // Hide When focus lost on BlackJack
  $(".tab [tab]").on("click", function () {
    var tabBl = $(this).attr("tab");
    if (tabBl != "bl") {
      $("#info_blackjack").hide();
    } else if (tabBl == "all") {
      $(".tab-body .card").showAll();
    } else {
      $("#info_blackjack").show();
    }
  });

  // Info about Games end

  var tabTextLength = $(".filter-body .tab-texts [tab]").length;
  var tabCardLength = $(".filter-body .tab-cards [tab]").length;
  $(".tab [tab]").click(function () {
    var tabName = $(this).attr("tab");

    $(this).addClass("active_filter").siblings().removeClass("active_filter");

    $(".tab-body [tab]").removeClass("active main");
    var j = 0;
    for (var i = 1; i < tabCardLength + 1; i++) {
      var item = $(".filter-body .tab-cards [tab]:nth-child(" + i + ")").attr(
        "tab"
      );
      // console.log(item.includes(tabName))
      if (item.includes(tabName)) {
        $(".filter-body .tab-cards [tab]:nth-child(" + i + ")").addClass(
          "active"
        );
        j++;
        if (j == 1) {
          $(".filter-body .tab-cards [tab]:nth-child(" + i + ")").addClass(
            "main"
          );
        }
      }
    }

    for (var i = 1; i < tabTextLength + 1; i++) {
      var item = $(".filter-body .tab-texts [tab]:nth-child(" + i + ")").attr(
        "tab"
      );
      if (item.includes(tabName)) {
        $(".filter-body .tab-texts [tab]:nth-child(" + i + ")").addClass(
          "active"
        );
      }
    }
  });

  // Games tab menu ends

  // Games read more button
  $(".rmore").on("click", function (e) {
    $(this).next("span").removeClass("hide");
    $(this).addClass("hide");
    e.preventDefault();
  });

  $(".rless").on("click", function (e) {
    var p = $(this).parent("span");
    p.addClass("hide");
    p.prev(".rmore").removeClass("hide"); // Hide only the preceding "Read More"
    e.preventDefault();
  });

  // filter ends

  // toggle_term_icon

  $(".term_header").click(function () {
    if ($(this).attr("aria-expanded") === "false") {
      $(".toggling_icon").attr("src", "./img/icons/down.svg");
      $(this)
        .children()
        .find(".toggling_icon")
        .attr("src", "./img/icons/up.svg");
    } else {
      $(this)
        .children()
        .find(".toggling_icon")
        .attr("src", "./img/icons/down.svg");
    }
  });

  // Suscribe form validation

  function errorMessage() {
    $(".subscribe .success-message").html(
      "Please enter a valid email address!"
    );
    $(".subscribe .success-message").css({ color: "red" }).show().fadeOut(2000);
    $('.subscribe input[type="email"]')
      .css({ "border-color": "red" })
      .attr("placeholder", "example@Xxx.com")
      .addClass("sub_email");
  }

  $("#sub_submit").click(function () {
    if (
      $("#sub_email").val() == "" ||
      $("#sub_email").val().indexOf("@") == -1 ||
      $("#sub_email").val().indexOf(".") == -1
    ) {
      errorMessage();
      return false;
    } else {
      successMessage();
    }
  });

  // Contact form validation
  function formValidationError() {
    if ($(".contact #name").val() == "") {
      $('.contact input[type="text"]')
        .css({ "border-color": "red" })
        .addClass("sub_email");
      $(".contact #name").attr("placeholder", "Please write your name *");
    }
    if (
      $(".contact #email").val() == "" ||
      $(".contact #email").val().indexOf("@") == -1 ||
      $(".contact #email").val().indexOf(".") == -1
    ) {
      $('.contact input[type="email"]')
        .css({ "border-color": "red" })
        .addClass("sub_email");
      $(".contact #email").attr("placeholder", "Please write your email *");
    }
    if ($(".contact #message").val() == "") {
      $(".contact textarea")
        .css({ "border-color": "red" })
        .addClass("sub_email");
      $(".contact #message").attr("placeholder", "Please write your message *");
    }
  }

  $("#contactSubmit").click(function () {
    if (
      $(".contact #name").val() == "" ||
      $(".contact #email").val() == "" ||
      $(".contact #email").val().indexOf("@") == -1 ||
      $(".contact #email").val().indexOf(".") == -1 ||
      $(".contact #message").val() == ""
    ) {
      $(".contact .success-message p").html(
        "Please fill out all required fileds!"
      );
      $(".contact .success-message")
        .css({ background: "red", color: "white" })
        .show()
        .fadeOut(2000);

      formValidationError();
      return false;
    } else {
      formValidationSuccess();
    }
  });
});
