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

  $(".burger").on("click", function () {
    $(".nav__list").addClass("list--visiable");
  });

  $(".nav__item").hover(
    function () {
      $(this).children().addClass("list--active");
    },
    function () {
      $(this).children().removeClass("list--active");
    }
  );
  $(".item__blender-link").hover(
    function () {
      $(".blender__list").css({ display: "block" });
    },
    function () {
      $(".blender__list").css({ display: "none" });
    }
  );
  $(".sponsors__slides").hover(function () {
    $(".sponsors__arrow-left").css({ visibility: "visiable" });
  });

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
  $(".location__list-title").on("click", function () {
    $(".location__list").toggle("list--active");
  });

  $(".footer__inner-title").on("click", () => {
    $(".info__list").toggle("list--active");
  });
  $(".info-title__account").on("click", () => {
    $(".footer__account__list").toggle("list--active");
  });
  $(".info__form-title").on("click", () => {
    $(".form__input-area ").toggle("list--active");
  });

  $(".social__title").on("click", () => {
    $(".social__list").toggle("list--active");
  });
});
