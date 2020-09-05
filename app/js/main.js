"use strict";
import slider from './slider';
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
});