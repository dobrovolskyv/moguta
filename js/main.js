$(function () {
  $(".top__checkout-list").hover(
    function () {
      $(".checkout__text").addClass("change-color");
      $(".checkout__img path").addClass("change-color");
    },
    function () {
      $(".checkout__text").removeClass("change-color");
      $(".checkout__img path").removeClass("change-color");
    }
  );
  $(".top__wish-list").hover(
    function () {
      $(".wish-list__text").addClass("change-color");
      $(".wish-list__svg path").addClass("change-color");
    },
    function () {
      $(".wish-list__text").removeClass("change-color");
      $(".wish-list__svg path").removeClass("change-color");
    }
  );
  $(".header__account").hover(
    function () {
      $(".title__account").addClass("change-color");
      $(".header__right-img path").addClass("change-color");
    },
    function () {
      $(".title__account").removeClass("change-color");
      $(".header__right-img path").removeClass("change-color");
    }
  );
  $(".header__cart").on("click", function () {
    $(".account-link__menu-cart").toggle("hide");
  });
  $(".header__account").on("click", function () {
    $(".account-link__menu ").toggle("hide");
  });
  $(".header__cart").hover(
    function () {
      $(".title__cart").addClass("change-color");
      $(".header__right-img-cart path").addClass("change-color");
      $(".header__cart-span").addClass("header__cart-span--hover");
    },
    function () {
      $(".title__cart").removeClass("change-color");
      $(".header__right-img-cart path").removeClass("change-color");
      $(".header__cart-span").removeClass("header__cart-span--hover");
    }
  );
  $(".nav__item").on("click", function () {
    $(this).children("div").toggle("list--active");
    $(this).children("ul").toggle("list--active");
  });

  $(".burger").on("click", function () {
    if (parseInt($(window).width()) < 1200) {
      $(".nav").slideToggle();
    }
  });

  $(".nav__item").hover(
    function () {
      if (parseInt($(window).width()) > 1200) {
        $(this).children("div").addClass("list--active");
        $(this).children("ul").addClass("list--active");
      }
    },
    function () {
      if (parseInt($(window).width()) > 1200) {
        $(this).children("ul").removeClass("list--active");
        $(this).children("div").removeClass("list--active");
      }
    }
  );

  $(".nav__item").on("click", function (e) {
    e.preventDefault();
    if (parseInt($(window).width()) < 1200) {
      $(this).children("div").addClass("list--active-visible");
      $(this).children("ul").toggle("list--active-media");
    }
  });

  $(".item__blender-link").hover(
    function () {
      $(".blender__list").css({ display: "block" });
    },
    function () {
      $(".blender__list").css({ display: "none" });
    }
  );

  $(".tabheader__item").on("click", function (e) {
    e.preventDefault();
    $(".tabheader__item").removeClass("tabheader__item--active");
    $(this).addClass("tabheader__item--active");

    $(".tabcontainer__slides").removeClass("tabcontainer__slides--active");
    $($(this).attr("href")).addClass("tabcontainer__slides--active");
  });

  $(".tabcontent").hover(
    function () {
      $(this).children(".tabcontent__btn").css({ display: "block" });
    },
    function () {
      $(".tabcontent__btn").css({ display: "none" });
    }
  );
  $(".sponsors__slides").hover(
    function () {
      $(".sponsors__arrow-left, .sponsors__arrow-right").css({ visibility: "visible" });
    },
    function () {
      $(".sponsors__arrow-left, .sponsors__arrow-right").css({ visibility: "hidden" });
    }
  );

  $(".location__list-title, .inner__info-store-arrow").on("click", function () {
    $(".location__list").toggle("list--active");
  });

  $(".footer__inner-title, .inner__info-arrow").on("click", () => {
    $(".info__list").toggle("list--active");
  });
  $(".info-title__account, .inner__info-account-arrow").on("click", () => {
    $(".footer__account__list").toggle("list--active");
  });
  $(".info__form-title, .inner__info-sign-arrow").on("click", () => {
    $(".form__input-area ").toggle("list--active");
  });

  $(".socials").on("click", () => {
    $(".social__list, .accrordeon__arrow").toggle("list--active");
  });
});
