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
  var $projectPage = $("#projectPage, #projectPage2");
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
  var on3d = true;
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

  $projectPage.on("click", ".imageBox", function(event) {
    var $this = $(this);
    if ($this.hasClass("projectSelect")) {
      $projectPage.find(".projDesc").hide();
      $this.removeClass("projectSelect");
      $next.show();
      $previous.show();
    } else {
      $this.removeClass("projectSelect");
      $projectPage.find(".projDesc").hide();
      $next.hide();
      $previous.hide();
      $this.children(".projDesc").show();
      $this.addClass("projectSelect");
    }
  });

  $links.on("click", function() {
    $projectPage.children(".imageBox").removeClass("projectSelect");
    $projectPage.find(".projDesc").hide();
  });

  ////////////Theme Change
  function styleSwap(URL) {
    $tyleSwap.attr("href", URL);
  }

  $domino.tooltip({
    show: {
      effect: "blind",
      delay: 100
    },

    position: {
      my: "left center",
      at: "right center"
    }
  });
  $domino.on("click", function() {
    $canvas.hide();
    styleSwap("");
  });

  $ninja.tooltip({
    show: {
      effect: "slide",
      delay: 10
    },

    position: {
      my: "left center",
      at: "right center"
    }
  });
  $ninja.on("click", function() {
    $canvas.hide();
    styleSwap("css/ninja.css");
  });

  $doodle.tooltip({
    position: {
      my: "left center",
      at: "right center"
    }
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

  $magnet.tooltip({
    position: {
      my: "left center",
      at: "right center"
    }
  });
  $magnet.on("click", function() {
    $canvas.hide();
    styleSwap("css/magnet.css");
  });

  $beach.tooltip({
    show: {
      effect: "highlight",
      delay: 100
    },

    position: {
      my: "left center",
      at: "right center"
    }
  });
  $beach.on("click", function() {
    $canvas.hide();
    styleSwap("css/beach.css");
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
      }
    }, 200);
  }
  setTimeout(animateLearn, 5000);

  $replay.on("click", replayAnimation);
  var shuttering = true;
  var shutterHeight = "";
  var shutterWidth = "";

  function defineShutter() {
    shutterHeight = $messageBox.css("height");
    lShutter.css("borderTopWidth", shutterHeight);
    rShutter.css("borderBottomWidth", shutterHeight);
    shutterWidth = $messageBox.css("width");
    lShutter.css("borderRightWidth", shutterWidth);
    rShutter.css("borderLeftWidth", shutterWidth);
  }

  defineShutter();

  $(window).on("resize", function() {
    defineShutter();
  });

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
  }

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
    }
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
    }
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
    if (
      $(":focus").hasClass("customForm") ||
      $(":focus").hasClass("ui-slider-handle")
    ) {
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

  $links.children().on("click", function() {
    onProject2 = false;
    onContact2 = false;
    $glyphButton.removeClass("activeGlyph");
    switch (this.id) {
      case "home":
        $navHome.addClass("activeGlyph");
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
        $navProject.addClass("activeGlyph");
        $next.show();
        $bottom.show();
        $top.hide();
        $previous.show();
        $carousel.removeClass();
        $carousel.addClass("rotateProj");
        break;
      case "theme":
        $navTheme.addClass("activeGlyph");
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
    }
  });

  $home.click();
  $next.hide();
  var toScroll = 0;
  var scrollSensitivity = 5;
  $(document).on("wheel", function(event) {
    toScroll += event.originalEvent.wheelDelta;
    var action;
    if (
      toScroll >=
      Math.abs(event.originalEvent.wheelDelta) * scrollSensitivity
    ) {
      $previous.click();
      toScroll = 0;
    } else if (
      toScroll <=
      -Math.abs(event.originalEvent.wheelDelta) * scrollSensitivity
    ) {
      $next.click();
      toScroll = 0;
    }
  });

  ////////////////////////////Theme-specific functions
  function startDoodle(ID) {
    var canvas = document.getElementById(ID);
    var doodling;
    var ctx = canvas.getContext("2d");
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
    $clearPaint.on("click", function() {
      resizeCanvas();
    });

    function draw(e) {
      if (!doodling) {
        return false;
      }

      ctx.beginPath();

      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "red";

      ctx.moveTo(x + 10, y + 40);
      setPosition(e);
      ctx.lineTo(x + 10, y + 40);

      ctx.stroke();
    }
  }

  function startMagnet() {
    var magnetOn = false;
    var rotateNum1 = 0;
    var rotateNum2 = 0;
    var startX;
    var startY;
    var clientX;
    var clientY;
    $ironContainer.on("mousedown touchstart", function(e) {
      startX = $ironHolder.offset().left;
      startY = $ironHolder.offset().top;
      clientX = e.clientX;
      clientY = e.clientY;
      magnetOn = true;
      $ironHolder.css(
        "transform",
        "translateX(" +
          (clientX - startX) +
          "px) translateY(" +
          (clientY - startY) +
          "px) rotate(" +
          rotateNum1 +
          "deg) rotateX(" +
          rotateNum2 +
          "deg)"
      );
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
        $ironHolder.css(
          "transform",
          "translateX(" +
            (clientX - startX) +
            "px) translateY(" +
            (clientY - startY) +
            "px) rotateY(" +
            rotateNum1 +
            "deg) rotateX(" +
            rotateNum2 +
            "deg)"
        );
      }
    });

    $(document).on("mouseup touchend", function(e) {
      magnetOn = false;
      $ironHolder.css("transition", "");
      $ironHolder.css("transform", "");
    });
  }

  startMagnet();

  //////////////Slider

  var $slider = $("#slider");
  var $amount = $("#amount");
  var $openSlider = $("#openSlider");
  var $slideCont = $("#sliderContainer");
  var $cog1 = $("#cog1");
  var $cog2 = $("#cog2");

  $slider.slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 200,
    value: 100,
    step: 10,
    slide: function(event, slidePos) {
      $amount.val(slidePos.value / 100 + "s");
      $carousel.css("transition", "transform " + slidePos.value / 100 + "s");
    }
  });
  $slider.tooltip();
  $amount.val(1 + "s");

  $openSlider.tooltip();
  $openSlider.on("click", function() {
    $cog1.toggleClass("spinCog1");
    $cog2.toggleClass("spinCog2");

    if ($openSlider.hasClass("opened")) {
      $slideCont.hide(
        "fold",
        {
          horizFirst: 0
        },
        500
      );
      $openSlider.removeClass("opened");
      return;
    } else {
      $slideCont.show(
        "fold",
        {
          horizFirst: 0
        },
        500
      );
      $openSlider.addClass("opened");
      return;
    }
  });

  function addProjects(pageID, projectObj) {
    for (var a in projectObj) {
      var project = projectObj[a];
      $(pageID).append(
        `<div class='imageBox'>
            <img alt=` +
          project.altText +
          ` src=` +
          project.image +
          ` class=img-responsive>
            <div class=projDesc>
              <h3>` +
          project.name +
          `</h3>
              <p>` +
          project.description +
          `<br> <a href=` +
          project.link +
          ` style="text-decoration: underline; font-weight: bold;" target="_blank">` +
          project.linkText +
          `</a></p>
            </div>
          </div>`
      );
    }
  }
  
  var project1 = {
    Lampshade: {
      image: "lampshadeSS.png",
      name: "Lampshade Hangers Co.",
      description:
        "A mock website. I wanted to create yet another project that looked like a standard webpage, but I also wanted to experiment with scroll-activated animation using GSAP and ScrollMagic. The shopping page features a simple two-way binding and a sorting option for the listed lampshades using jQuery.",
      link: "/lampshadeHangers",
      linkText: " Illuminate your life with Lampshade Hangers Co. here!",
      altText: "Screenshot of the Lampshade Hangers Co. website"
    },
    Sanic: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/sanicSS_zpsbzsqlfpg.png",
      name: "Super Sanic Hegebros GSAP",
      description:
        "I made this short animation clip after taking an interest in SVG and GreenSock Animation Platform. It's a mash-up of Sanic, an intentionally poorly-drawn version of Sonic the Hedgehog, and a re-imagined version of the Super Mario Bros. opening background. The SVG elements were made using Method Draw, with the exception of Sanic. The animation is controlled via keyboard so there is no mobile support for this particular version of this project.",
      link: "/superSanic",
      linkText: " Watch Sanic get lost here!",
      altText: "Screenshot of my Sanic GSAP project"
    },
    Taco: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/TacoSS_zpsil0pdxj7.png",
      name: "Tacoholics Anonymous",
      description:
        "A mock page for a support group promising to help people whose lives are being ruined by their love of tacos. I made this web page after realizing that none of my projects looked like they belonged in an actual website. It's a responsive static web page featuring simple, clean design with subtle but effective use of white space. The featured scrolling effects are simple because I wanted to figure out how to implement them manually before using Scroll Magic JS. Looks best in Chrome.",
      link: "/tacoholicsAnonymous",
      linkText: " Cure your taco addiction here!",
      altText: "Screenshot of Tacoholics Anonymous"
    },
    Slide: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/slidePuzzleSS_zpsl27m0q5b.png",
      name: "Slide Puzzle",
      description:
        "The bomb is ticking and the only way to stop it is to solve the slide puzzle! I made this because my real life slide puzzle kept jamming. The game works by comparing the CSS positions of the slides. Tested in Chrome and Firefox.",
      link: "/slidePuzzle",
      linkText: " Slide away here!",
      altText: "Screenshot of my slide puzzle"
    },
    Flirt: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/flirtSS_zps9sof1uov.png",
      name: "Flirting App",
      description:
        "A silly project I made in one day. The user is prompted to put their name, and then asked whether they love me. However, whenever they click 'No' the button switches places with 'Yes' and they end up clicking that instead. Based on a Valentines theme and somewhat satirical of modern love. Tested and made to be used by my phone.",
      link:
        "/flirtAlert",
      linkText: " View this flirtatious app here!",
      altText: "Screenshot of my flirting app"
    },
    Pizza: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/pizzaPositioner_zps7vewwjpe.png",
      name: "Pizza Positioner",
      description:
        "This page is meant to show what goes in my thought process as I work on a project. I include a JS function from my GitHub named 'dragAndPos'. With jQuery/jQuery UI included, it makes an element draggable, then outputs the CSS code showing the left and top positioning using percentages. Great for positioning CSS art by eye, or for figuring out the necessary pattern. Since the jQuery draggle function ignores margin and padding, those should be exxcluded from the relavant elements.",
      link: "https://codepen.io/jx2bandito/pen/GWVyOL",
      linkText: " View the pen for this pepperoni pizza positioner here!",
      altText: "Screenshot of my pizza positioner pen"
    }
  };

  
  var project2 = {
    Simon: {
      image: "http://i347.photobucket.com/albums/p460/jx2bandito/SimonSaysSS_zpszhy3jcjw.png",
      name: "Simon Game",
      description:
        "A Simon Says game with a twist. Strict resets the sequence upon choosing the wrong button, and Nightmare mode removes colors and occasionally shuffles the game. Activate both for a trial harder than Dark Souls(maybe)!",
      link: "https://codepen.io/jx2bandito/debug/LxJbLm",
      linkText: "Challenge Simon here!",
      altText: "A screenshot of my Simon game"
    },
    Quote: {
      "image": "http://i347.photobucket.com/albums/p460/jx2bandito/quoteReduxSS_zpscokfmgyc.png",
      "name": "Random Quote Generator",
      "description": "A quote generator. While it seems to be random, it is not truly random; no quote will be repeated unless the other quotes have already been shown, in which case a new random cycle is begun. Comes with a Twitter button.",
      "link": "http://s.codepen.io/jx2bandito/debug/evjGVX",
      "linkText": " View the quote machine here!",
      altText: "A screenshot of my random quote generator"
    }
    ,
    Tic: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/TicTacToe_zps0xmr63yr.png",
      name: "Tic-Tac-Toe",
      description:
        "Robots have rebelled and the only way to stop them is to beat them in Tic-Tac-Toe. Practice by playing against a fellow human, or face 3 robots leaders who may or may not be based on other fictional robots.",
      link: "https://codepen.io/jx2bandito/debug/jyGJvw",
      linkText: " Quell their rebellion here!",
      altText: "A screenshot of my Tic-Tac-Toe main menu"
    },
    Twitch: {
      image: "http://i347.photobucket.com/albums/p460/jx2bandito/TwitchSS_zps7vdb0i1m.png",
      name: "Twitch Viewer",
      description:
        "This page uses the Twitch.tv API to see whether streamers are online or offline. Going beyond the suggested requirements from FreeCodeCamp.com, I included a button that removes streamers from the list and added the function to include additional streamers. Works perfectly but due for refactoring.",
      link: "https://codepen.io/jx2bandito/debug/eBaVvp",
      linkText: "Check out the Twitch streamers here!"
    },
    Wiki: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/WikipediaSS_zpsugclrzpo.png",
      name: "Wikipedia Viewer",
      description:
        "A simple Wikipedia viewer. Uses JavaScript to access Wikipedia API and displays the results on the page. CSS-wise, this project was my introduction to creating elements that changed color on hover.",
      link: "https://codepen.io/jx2bandito/debug/BQEbLj",
      linkText: " Explore the net's largest encyclopedia here!",
      altText: "A screenshot of my Wikipedia searcher"
    },
    Calc: {
      image:
        "http://i347.photobucket.com/albums/p460/jx2bandito/CalculatorSS_zps2djg6rgu.png",
      name: "Calculator",
      description:
        "A calculator powered by JavaScript. This project  helped me learn how to create an image with just simple CSS shapes. It was also my first venture into making buttons actually feel like buttons by changing their CSS properties on click.",
      link: "https://codepen.io/jx2bandito/debug/VPYPmm",
      linkText: "Calculate stuff here!",
      altText: "A screenshot of my JS Calculator"
    }
  }

  addProjects("#projectPage", project1);
  addProjects("#projectPage2", project2);
  
  
});
