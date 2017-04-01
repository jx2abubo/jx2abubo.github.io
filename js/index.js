  $(document).ready(function() {
    ///jQuery caching and globals
    var currentPage = "home";
    var $navigation = $("#navigation");
    var $carousel = $("#carousel");
    var $next = $("#nextPage");
    var $previous = $("#previousPage");
    var $bottom = $("#bottomPage");
    var $top = $("#topPage");
    var $imageBox = $(".imageBox");
    var $links = $("#links");
    var $btnLg = $(".btn-lg");
    var $tyleSwap = $("#styleSwap");
    var $canvas = $("canvas");
    var $domino = $("#dominoTheme");
    var $ninja = $("#ninjaTheme");
    var $doodle = $("#doodleTheme");
    var $magnet = $("#magnetTheme");
    var $beach = $("#beachTheme");
    var $ideCaret = $("#sideCaret");
    var $learn = $("#learn");
    var $replay = $("#replay");
    var $messageBox = $("#messageBox");
    var rShutter = $("#rightShutter");
    var lShutter = $("#leftShutter");
    var $header = $("#header");
    var $un = $("#sun");
    var $home = $("#home");
    var $project = $("#project");
    var $theme = $("#theme");
    var $contact = $("#contact");
    var $glyphButton = $(".glyphButton");
    var $navHome = $("#navHome");
    var $navProject = $("#navProject");
    var $navTheme = $("#navTheme");
    var $navContact = $("#navContact");
    var $clearPaint = $("#clearPaint");
    var $ironContainer = $("#ironContainer");
    var $ironHolder = $("#ironHolder");
    var $ide = $(".side");
    var $pleaseNav = $("#pleaseNav");
    var $contactMessage = $("#contactMessage");
    var $customForm = $(".customForm");
    var onProject2 = false;
    var onContact2 = false;
    var onForm = false;
    ///initialize functions defined bottom of page
    var startDoodle;
    var animateShutter;
    var magnetCounter;

    $("#ninja").css("text-decoration", "line-through");
    //I put this line in JS because the line-through bar shows before everything else if I define it in CSS which makes the page look glitchy

    ////////////Project Page 
    var $projDesc = $(".projDesc");
    $("*").dblclick(function(e) {
      e.preventDefault();
    });
    $projDesc.hide();
    $imageBox.on("click", function(event) {
      var $this = $(this);
      if (
        $this.hasClass("projectSelect")) {
        $projDesc.hide();
        $imageBox.removeClass("projectSelect");
        $next.show()
        $previous.show();
      } else {
        $imageBox.removeClass("projectSelect");
        $projDesc.hide();
        $next.hide();
        $previous.hide();
        $this.children(".projDesc").show();
        $this.addClass("projectSelect");
      }
    });

    $links.on("click", function() {
      $imageBox.removeClass("projectSelect");
      $projDesc.hide();
    });

    ////////////Theme Change
    function styleSwap(URL) {
      $tyleSwap.attr("href", URL);
    }

    $domino.on('click', function() {
      $canvas.hide();
      styleSwap("");
    });

    $ninja.on("click", function() {
      $canvas.hide();
      styleSwap("css/ninja.css");
    });

    $doodle.on("click", function() {
      $canvas.show();
      $clearPaint.click();
      styleSwap("css/doodle.css");
    });
    $doodle.one("click", function() {
      startDoodle("doodle1");
      startDoodle("doodle3");
      startDoodle("doodle2");
      startDoodle("doodle4");
      startDoodle("doodle5");
      startDoodle("doodle6");
    });

    $magnet.on("click", function() {
      $canvas.hide();
      styleSwap("css/magnet.css");
    });

    $beach.on("click", function() {
      $canvas.hide();
      styleSwap("css/beach.css")
    });

    ////////////Home Page animations
    function animateLearn() {
      $ideCaret.show();
      var learnInterval;
      var learn = "";
      var toLern = "Lern".split("");
      var learnInterval = setInterval(function() {
        if (toLern.length) {
          learn += toLern[0];
          toLern.shift();
          $learn.html(learn);
        } else {
          setTimeout(function() {
            $learn.html("Ler");
          }, 1000 - 300);

          setTimeout(function() {
            $learn.html("Le");
          }, 1250 - 300);

          setTimeout(function() {
            $learn.html("Lea");
          }, 1500 - 300);
          setTimeout(function() {
            $learn.html("Lear");
          }, 1750 - 300);

          setTimeout(function() {
            $learn.html("Learn");
            $ideCaret.hide();
            $("#replay").show();
            if (currentPage == "home") {
              $next.show();
            }
          }, 2000 - 300);

          clearInterval(learnInterval);
        };
      }, 200);

    };
    setTimeout(animateLearn, 5000);

    $replay.on("click", replayAnimation);
    var shuttering = true;
    var shutterHeight = "";
    var shutterWidth = "";

    function defineShutter() {
      shutterHeight = $messageBox.css('height');
      lShutter.css("borderTopWidth", shutterHeight);
      rShutter.css("borderBottomWidth", shutterHeight);
      shutterWidth = $messageBox.css("width");
      lShutter.css("borderRightWidth", shutterWidth);
      rShutter.css("borderLeftWidth", shutterWidth);
    };

    defineShutter();

    function replayAnimation() {
      defineShutter();
      $next.hide();
      $messageBox.fadeOut();
      setTimeout(function() {
        $replay.hide();
        $ideCaret.hide();
        $learn.html("&nbsp;&nbsp;&nbsp;");
        $messageBox.fadeIn("fast");
        setTimeout(animateLearn, 5000);
      }, 1000);

    };

    ///////////Resize functions for more accurate responsive design
    $(window).on("resize", function() {
      defineShutter();
    });

    if ($(window).width() < 700) {
      $header.hide();
      $navigation.show();
      $projDesc.css("font-size", "2.5vw");
      $un.css("animation", "0");
      $imageBox.css("transition", "none");
      $pleaseNav.hide();
    }

    $(window).on("resize", function() {
      if ($(window).width() < 700) {
        $header.hide();
        $navigation.show();
        $projDesc.css("font-size", "2.5vw");
        $pleaseNav.hide();
      } else {
        $header.show();
        $navigation.hide();
        $projDesc.css("font-size", "");
        $pleaseNav.show();
      }

    })

    //////////////Click functions for navigating page

    $links.children().on("click", function() {
      var $this = $(this);
      $this.siblings().css("transform", "");
      $this.css("transform", "scale(1.05)");
      $this.siblings().css("background-color", "");
      $this.css("background-color", "white");
      $this.siblings().css("color", "");
      $this.css("color", "black");
    });

    $next.on("click", function() {
      switch (currentPage) {
        case "home":
          $project.click();
          break;
        case "project":
          $theme.click();
          break;
        case "theme":
          $contact.click();
          break;
        default:
          return false;
      };
    });

    $previous.on("click", function() {
      switch (currentPage) {
        case "project":
          $home.click();
          break;
        case "theme":
          $project.click();
          break;
        case "contact":
          $theme.click();
        default:
          return false;
      };

    });

    $bottom.on("click", function() {

      if (onContact2) {
        $contact.click();
        return false;
      }

      if (currentPage == "project") {
        $carousel.addClass("rotateProj2");
        $previous.hide();
        $next.hide();
        $bottom.hide();
        $top.show();
        onProject2 = true;

        return false;
      }

      $project.click();
      setTimeout(function() {
        $carousel.addClass("rotateProj2");
        $previous.hide();
        $next.hide();
        $bottom.hide();
        $top.show();
        onProject2 = true;
      }, 500);

    });

    $top.on("click", function() {
      if (onProject2) {
        $project.click();
        return false;
      }

      if (currentPage == "contact") {
        $carousel.addClass("rotateCont2");
        $previous.hide();
        $next.hide();
        $bottom.show();
        $top.hide();
        onContact2 = true;

        return false;
      }

      $contact.click();
      setTimeout(function() {
        $carousel.addClass("rotateCont2");
        $previous.hide();
        $next.hide();
        $bottom.show();
        $top.hide();
        onContact2 = true;
      }, 500);

    });

    $("#contactClick").on("click", function() {
      $top.click();
    });
    //// A/D and L/R arrow key binding

    $(document).keydown(function(e) {

      if ($(":focus").hasClass("customForm")) {
        return;
      }

      var pressed = e.which;

      switch (pressed) {

        case 37:
        case 65:
          $previous.click();
          return false;
        case 39:
        case 68:
          $next.click();
          return false;
        case 40:
        case 83:
          e.preventDefault();
          $bottom.click();
          return false;
        case 38:
        case 87:
          e.preventDefault();
          $top.click();
          return false;
      }

    });

    $glyphButton.on("click", function() {
      switch (this.id) {
        case "navHome":
          $home.click();
          break;
        case "navProject":
          $project.click();
          break;
        case "navTheme":
          $theme.click();
          break;
        case "navContact":
          $contact.click();
          break;
      }
    });

    $btnLg.on("click", function() {
      var $this = $(this);
      $this.addClass("active");
      $this.siblings().removeClass("active");
    });

    $links.children().on('click', function() {
      onProject2 = false;
      onContact2 = false;
      $glyphButton.removeClass("activeGlyph");
      switch (this.id) {
        case "home":
          $navHome.addClass("activeGlyph")
          currentPage = "home";
          rotate = 0;
          $carousel.removeClass();
          $carousel.addClass("rotateHome");
          $next.show();
          $bottom.hide();
          $top.hide();
          $previous.hide();
          break;
        case "project":
          currentPage = "project";
          $navProject.addClass("activeGlyph")
          $next.show();
          $bottom.show();
          $top.hide();
          $previous.show();
          $carousel.removeClass();
          $carousel.addClass("rotateProj");
          break;
        case "theme":
          $navTheme.addClass("activeGlyph")
          $next.show();
          $bottom.hide();
          $previous.show();
          $top.hide();
          currentPage = "theme";
          $carousel.removeClass();
          $carousel.addClass("rotateTheme");
          break;
        case "contact":
          $navContact.addClass("activeGlyph");
          $bottom.hide();
          $next.hide();
          $previous.show();
          $top.show();
          currentPage = "contact";
          $carousel.removeClass();
          $carousel.addClass("rotateContact");
          break;
      };

    });

    $home.click();
    $next.hide();
    var toScroll = 0;
    var scrollSensitivity = 5;
    $(document).on("wheel", function(event) {
      toScroll += event.originalEvent.wheelDelta;
      var action;
      if (toScroll >= (Math.abs(event.originalEvent.wheelDelta) * scrollSensitivity)) {
        $previous.click();
        toScroll = 0;
      } else if (toScroll <= (-Math.abs(event.originalEvent.wheelDelta) * scrollSensitivity)) {
        $next.click();
        toScroll = 0;
      };
    });

    ////////////////////////////Theme-specific functions
    function startDoodle(ID) {
      var canvas = document.getElementById(ID);
      var doodling;
      var ctx = canvas.getContext('2d');
      resizeCanvas();
      var x;
      var y;

      $(window).on("resize", resizeCanvas);
      $(document).on("mousemove touchmove", draw);
      $(document).on("mousedown touchstart", setPosition);
      $(document).on("mouseup touchend", function() {
        doodling = false;
      });

      function setPosition(e) {
        doodling = true;
        x = e.clientX || e.touches[0].clientX;
        y = e.clientY || e.touches[0].clientY;
      }

      function resizeCanvas() {
        $canvas.attr("width", $(window).width());
        $canvas.attr("height", $(window).height());
      }
      $clearPaint.on('click', function() {
        resizeCanvas();
      });

      function draw(e) {
        if (!doodling) {
          return false;
        }

        ctx.beginPath();

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'red';

        ctx.moveTo(x + 10, y + 40);
        setPosition(e);
        ctx.lineTo(x + 10, y + 40);

        ctx.stroke();
      }

    };

    function startMagnet() {
      var magnetOn = false;
      var rotateNum1 = 0;
      var rotateNum2 = 0;
      var startX;
      var startY;
      var clientX;
      var clientY;
      $ironContainer.on('mousedown touchstart', function(e) {
        startX = $ironHolder.offset().left;
        startY = $ironHolder.offset().top;
        clientX = e.clientX;
        clientY = e.clientY;
        magnetOn = true;
        $ironHolder.css("transform", "translateX(" + (clientX - startX) + "px) translateY(" + (clientY - startY) + "px) rotate(" + rotateNum1 + "deg) rotateX(" + rotateNum2 + "deg)");
      });

      $(document).on("mousemove touchmove", function(e) {

        magnetCounter += 1;

        if (magnetCounter < 20) {
          return false;
        }

        magnetCounter = 0;

        rotateNum1 = Math.floor(Math.random() * 360);
        rotateNum2 = Math.floor(Math.random() * 360);
        clientX = e.clientX || e.touches[0].clientX;
        clientY = e.clientY || e.touches[0].clientY;

        if (magnetOn) {
          $ironHolder.css("transition", "all .15s ease-in");
          $ironHolder.css("transform", "translateX(" + (clientX - startX) + "px) translateY(" + (clientY - startY) + "px) rotateY(" + rotateNum1 + "deg) rotateX(" + rotateNum2 + "deg)");
        }
      });

      $(document).on("mouseup touchend", function(e) {
        magnetOn = false;
        $ironHolder.css("transition", "");
        $ironHolder.css("transform", "");
      });
    };

    startMagnet();
  });

  var app = angular.module("portfolioApp", []);
  app.controller("portfolioControl", ["$scope", function($scope) {
    var $ngSimon = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/SimonSaysSS_zpszhy3jcjw.png",
      "name": "Simon Game",
      "description": "A Simon Says game with a twist. Strict resets the sequence upon choosing the wrong button, and Nightmare mode removes colors and occasionally shuffles the game. Activate both for a trial harder than Dark Souls(maybe)!",
      "link": "http://codepen.io/jx2bandito/debug/LxJbLm",
      "linkText": "Challenge Simon here!",
      "altText": "A screenshot of my Simon game"
    };
    var $ngTic = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/TicTacToe_zps0xmr63yr.png",
      "name": "Tic-Tac-Toe",
      "description": "Robots have rebelled and the only way to stop them is to beat them in Tic-Tac-Toe. Practice by playing against a fellow human, or face 3 robots leaders who may or may not be based on other fictional robots.",
      "link": "http://codepen.io/jx2bandito/debug/jyGJvw",
      "linkText": " Quell their rebellion here!",
      "altText": "A screenshot of my Tic-Tac-Toe main menu"
    };
    var $ngTwitch = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/TwitchSS_zps7vdb0i1m.png",
      "name": "Twitch Viewer",
      "description": "This page uses the Twitch.tv API to see whether streamers are online or offline. Going beyond the suggested requirements from FreeCodeCamp.com, I included a button that removes streamers from the list and added the function to include additional streamers.",
      "link": "http://codepen.io/jx2bandito/debug/eBaVvp",
      "linkText": "Check out the Twitch streamers here!"
    };
    var $ngWiki = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/WikipediaSS_zpsugclrzpo.png",
      "name": "Wikipedia Viewer",
      "description": "A simple Wikipedia viewer. Uses JavaScript to access Wikipedia API and displays the results on the page. CSS-wise, this project was my introduction to creating elements that changed color on hover.",
      "link": "http://codepen.io/jx2bandito/debug/BQEbLj",
      "linkText": " Explore the net's largest encyclopedia here!",
      "altText": "A screenshot of my Wikipedia searcher"
    };
    var $ngCalc = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/CalculatorSS_zps2djg6rgu.png",
      "name": "Calculator",
      "description": "A calculator powered by JavaScript. This project  helped me learn how to create an image with just simple CSS shapes. It was also my first venture into making buttons actually feel like buttons by changing their CSS properties on click.",
      "link": "http://codepen.io/jx2bandito/debug/VPYPmm",
      "linkText": "Calculate stuff here!",
      "altText": "A screenshot of my JS Calculator"
    };
    var $ngQuote = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/QuoteSS_zpsiuu6zt2p.png",
      "name": "Random Quote Generator",
      "description": "One of my earliest projects, which explains the terrible design. A quote generator which contains some of my favorite quotes, and a custom, fully functional Tweet button. While it claims to be random, it is not truly random because no quote will be repeated unless the other quotes have already been shown, in which case a new random cycle is begun.",
      "link": "http://codepen.io/jx2bandito/debug/NbOWxJ",
      "linkText": " Read the quotes here!",
      "altText": "A screenshot of my random quote generator"
    };
    $scope.projectList = [$ngSimon, $ngTic, $ngTwitch, $ngWiki, $ngCalc, $ngQuote];

    var $ngTaco = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/TacoSS_zpsil0pdxj7.png",
      "name": "Tacoholics Anonymous",
      "description": "A mock page for a support group promising to help people whose lives are being ruined by their love of tacos. I made this web page after realizing that none of my projects looked like they belonged in an actual website. It's a responsive static web page featuring simple, clean design with subtle but effective use of white space.",
      "link": "http://s.codepen.io/jx2bandito/debug/zZwgKR",
      "linkText": " Cure your taco addiction here!"
    };
    var $ngSlide = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/slidePuzzleSS_zpsl27m0q5b.png",
      "name": "Slide Puzzle",
      "description": "The bomb is ticking and the only way to stop it is to solve the slide puzzle! I made this because my real life slide puzzle kept jamming. The game works by comparing the CSS positions of the slides. Tested in Chrome and Firefox.",
      "link": "http://s.codepen.io/jx2bandito/debug/rymrmL",
      "linkText": " Slide away here!"
    };
    var $ngRedux = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/quoteReduxSS_zpscokfmgyc.png",
      "name": "Quote Generator Redux",
      "description": "A remake of my old quote generator project. I planned on refactoring and designing the old project but I decided to redo it instead. Pull the lever to see the quote, then push the tweet button to tweet it.",
      "link": "http://s.codepen.io/jx2bandito/debug/evjGVX",
      "linkText": " View the all new quote machine here!"
    };
    var $ngFlirt = {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/flirtSS_zps9sof1uov.png",
      "name": "Flirting App",
      "description": "A silly project I made in one day. The user is prompted to put their name, and then asked whether they love me. However, whenever they click 'No' the button switches places with 'Yes' and they end up clicking that instead. Based on a Valentines theme and somewhat satirical of modern love. Tested and made to be used by my phone.",
      "link": "http://s.codepen.io/jx2bandito/debug/863fdfd972a40e89d91b7d48a52da884",
      "linkText": " View this flirtatious app here!"
    };

    $scope.projectList2 = [$ngTaco, $ngSlide, $ngRedux, $ngFlirt];

  }]);
