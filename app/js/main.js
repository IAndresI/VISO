"use strict";
import slider from './slider';
import tabs from './tabs';
document.addEventListener("DOMContentLoaded", function () {
  slider({
    slider__item: ".expertise__item",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 700,
    responsive: [{
        breakPoint: 1160,
        slidesToShow: 2,
        slidesToScroll: 2
      },
      {
        breakPoint: 780,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    ]
  });
  slider({
    slider__item: ".review__item",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    slider__button__next: ".review__button--next",
    slider__button__prev: ".review__button--prev",
    fade: true,
    dots: false
  });


  tabs({
    button: ".latest-works__button",
    content: ".latest-works__item",
    activeClass: ".latest-works__button--active",
    noContentAlert: ".latest-works__nothing-find",
    animate: true,
    tabToShow: 0
  });


  let planButtons = document.querySelectorAll(".plan__button"),
    planItems = document.querySelectorAll(".plan__item"),
    planActiveLine = document.querySelector(".plan__active-line");


  planButtons.forEach(element => {
    element.addEventListener("click", function (e) {

      planButtons.forEach(element => {
        if (element == e.target) element.classList.add("plan__button--active");
        else element.classList.remove("plan__button--active");
      });

      if (element.getAttribute("data-price") == "monthly") {
        planActiveLine.style.transform = "translate(101%, 0)";
        planItems.forEach(elements => {
          elements.classList.add("plan__item--monthly");
        });
      } else {
        planActiveLine.style.transform = "translate(0, 0)";
        planItems.forEach(elements => {
          elements.classList.remove("plan__item--monthly");
        });
      }
    });
  });
});