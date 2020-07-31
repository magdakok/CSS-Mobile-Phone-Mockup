const lis = Array.from(document.querySelectorAll(".messages-box>li"));
const initDelay = 1000;
const delay = 400;

lis.forEach((li, i) => {
  setTimeout(
    () => {
      li.classList.add("sequence-animation");
    },
    i === 0 ? initDelay : initDelay + delay * i
  );
});
