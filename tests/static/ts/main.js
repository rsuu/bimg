import { Lib } from "./lib.js";
function main() {
  let app = new App();
  app.main();
}
export class App {
  version;
  constructor() {
    this.version = "v0.0.0";
  }
  main() {
    let lib = new Lib();
    let author = lib.get_author();
    //div.innerText = `author: ${author}`;
    replace_herf();
  }
}
function replace_herf() {
  const VEC_CARD = document.querySelectorAll("main > .card");
  VEC_CARD.forEach((card) => {
    let ty = card.getAttribute("-ty");
    let uid = card.getAttribute("-uid");
    let tid = card.getAttribute("-tid");
    let cimg = card.querySelector(".card-body .card-img");
    let ctitle = card.querySelector(".card-body .card-title");
    cimg.addEventListener("click", function () {
      window.location.href = `board/${ty}/${uid}/${tid}-v.html`;
    });
    ctitle.addEventListener("click", function () {
      window.location.href = `board/${ty}/${uid}/${tid}-t.html`;
    });
  });
}
main();
