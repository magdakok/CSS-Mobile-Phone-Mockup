const lis = Array.from(document.querySelectorAll(".messages-box>li"));

const sequenceAnimation = (elements, initDelay, delay) => {
  elements.forEach((el, i) => {
    setTimeout(
      () => {
        el.classList.add("sequence-animation");
      },
      i === 0 ? initDelay : initDelay + delay * i
    );
  });
};

sequenceAnimation(lis, 1000, 400);
