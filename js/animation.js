const sequenceAnimation = (elementsCss, initDelay, delay) => {
  const elementsArray = Array.from(document.querySelectorAll(elementsCss));
  elementsArray.forEach((el, i) => {
    setTimeout(
      () => {
        el.classList.add("sequence-animation");
      },
      i === 0 ? initDelay : initDelay + delay * i
    );
  });
};

sequenceAnimation(".messages-box>li", 1000, 400); //all li elements in .messages-box
sequenceAnimation(".text-section>*", 400, 300); //all elements in .text-section
