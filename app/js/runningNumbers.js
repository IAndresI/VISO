function runningNumbers({
  parent,
  triggerHeight = 100,
  speed = 5,
  prefix,
  gradually = false,
  addElementsToScroll = 0
}) {
  let elementNumber = parent,
    number = elementNumber.textContent,
    numberCount = number.split(""),
    wrapper = document.createElement("div"),
    prefixElement = document.createElement("span");
  wrapper.style.display = "flex";
  wrapper.style.overflow = "hidden";
  wrapper.style.maxHeight = elementNumber.offsetHeight + "px";
  wrapper.classList.add("running-numbers");
  elementNumber.style.display = "block";
  elementNumber.textContent = "";
  elementNumber.append(wrapper);
  let animationTimePercent = 7;
  numberCount.forEach((e, i) => {
    let numberI = document.createElement("div"),
      counter = 0;
    numberI.style.height = "100%";
    numberI.style.opacity = "0";
    numberI.classList.add("running-numbers__item");
    numberI.setAttribute("data-running-current", numberCount[i]);
    for (let i = 0; i < (addElementsToScroll + 10); i++) {
      let otherNumberI = document.createElement("span");
      if (counter == 10) counter = 0;
      if (i >= addElementsToScroll) {
        if (i == addElementsToScroll) counter = 0;
        otherNumberI.setAttribute("data-running-number", counter);
      }
      otherNumberI.textContent = counter++;
      otherNumberI.style.display = "block";
      numberI.append(otherNumberI);
    }
    if (gradually) numberI.style.transition = `all ${speed - (speed / 100 * animationTimePercent)}s cubic-bezier(0.25, 0.1, 0.67, 1.15)`;
    else numberI.style.transition = `all ${speed}s cubic-bezier(0.25, 0.1, 0.67, 1.15)`;
    animationTimePercent += animationTimePercent;
    window.addEventListener("scroll", () => {
      if ((window.pageYOffset + window.innerHeight - triggerHeight > numberI.getBoundingClientRect().top + window.pageYOffset) && (numberI.getBoundingClientRect().top + window.pageYOffset > window.pageYOffset - numberI.offsetHeight + triggerHeight)) {
        numberI.style.transform = `translate(0,-${numberI.offsetHeight/(10 + addElementsToScroll)*((addElementsToScroll)+ +numberI.getAttribute("data-running-current"))}px)`;
        numberI.style.opacity = "1";
        if (prefix) prefixElement.style.opacity = "1";
      }
    });
    counter = 0;
    wrapper.append(numberI);
  });
  if (prefix) {
    prefixElement.classList.add("running-numbers__prefix");
    prefixElement.textContent = prefix;
    prefixElement.style.opacity = "0";
    prefixElement.style.transition = `opacity ${speed}s`;
    wrapper.append(prefixElement);
  }
}

export default runningNumbers;