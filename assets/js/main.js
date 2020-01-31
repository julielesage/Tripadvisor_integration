/* Pour ne pas répéter document tout le temps , on peut déclarer une variable plus courte. ex:
let $ = document; */

document.addEventListener("DOMContentLoaded", () => {
  console.log("document chargé!");

  /* DARK MODE */
  document.querySelector("#dark-mode").addEventListener("click", event => {
    event.preventDefault();
    /* if (!darkMode) {
          $.querySelector("body").classList.add("dark-mode");
        } else {
          $.querySelector("body").classList.remove("dark-mode");
        }
        darkMode = !darkMode; */
    $.querySelector("body").classList.toggle("dark-mode");
  });
  document.querySelector("#btn-register").addEventListener("click", () => {
    event.preventDefault();
    document.querySelector(".modal").classList.toggle("hidden");
  });
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (scrollY > 60) {
    document.querySelector("sub-menu").classList.toggle("hidden");
  }
});
