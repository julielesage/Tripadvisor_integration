/* Pour ne pas répéter document tout le temps , on peut déclarer une variable plus courte. ex:
let $ = document; */

document.addEventListener("DOMContentLoaded", () => {
  console.log("document chargé!");

  /* DARK MODE */
  /*document.querySelector("#dark-mode").addEventListener("click", event => {
    /*event.preventDefault();
    /* if (!darkMode) {
          $.querySelector("body").classList.add("dark-mode");
        } else {
          $.querySelector("body").classList.remove("dark-mode");
        }
        darkMode = !darkMode; 
    $.querySelector("body").classList.toggle("dark-mode");
  });*/
  document.querySelector("#btn-register").addEventListener("click", () => {
    /*Si l'on veut annuler le comportement par défaut d'une balise HTML au clic de souris, il faut utiliser la méthode preventDefault() */
    event.preventDefault();
    console.log("btn selectionne");
    document.querySelector(".modal").classList.toggle("hidden");
  });
});

const switchModal = () => {
  console.log("switchModal");
  document.querySelector(".modal").classList.toggle("hidden");
};

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 252) {
    document.querySelector(".sub-menu").classList.remove("hidden");
  }
  else 
    document.querySelector(".sub-menu").classList.add("hidden");
});
