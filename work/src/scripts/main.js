const headerLinks = document.querySelectorAll(".header__link");

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const elems = document.querySelectorAll(".chosen");

    if (elems) {
      elems.forEach((elem) => {
        elem.classList.remove("chosen");
      });
    }

    link.classList.add(`${"chosen"}`);
  });
});

function addClass(elem, className) {
  console.log(elem);
}
