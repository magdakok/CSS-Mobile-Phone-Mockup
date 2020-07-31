const lis = Array.from(document.querySelectorAll(".messages-box>li"));
const delay = 400;

lis.forEach((li, i) => {
  setTimeout(() => {
    li.classList.add("sequence-animation");
  }, delay * i);
});
