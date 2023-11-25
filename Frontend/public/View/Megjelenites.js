import Megjelenitsor from "./megjelenitSor.js";
class Megjelenites {
  #list = [];
  constructor(lista,elem) {
    this.#list = lista;
    elem.html('<div class="w3-container">');
    this.tablaElem = elem.children("div");
    this.tablazatbeir();
  }
  tablazatbeir() {
    this.#list.forEach((elem, index) => {
        new Megjelenitsor(elem,this.tablaElem, index)

    });
  }
}
export default Megjelenites;
