"use strict";
import slider from './slider';
import tabs from './tabs';
document.addEventListener("DOMContentLoaded", function () {
  slider({
    slider__item: ".expertise__item",
    slider__translateX: ".expertise__translatex",
    slidesToShow: 3,
    slidesToScroll: 3,
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
        planActiveLine.style.transform = "translate(94%, 0)";
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