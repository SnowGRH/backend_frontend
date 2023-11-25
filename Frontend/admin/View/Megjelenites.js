import Megjelenitsor from "./megjelenitSor.js";
class Megjelenites {
  #list = [];
  constructor(lista,elem) {
    this.#list = lista;
    elem.html('<table class="table table-bordered table-striped">');
    this.tablaElem = elem.children("table");
    this.tablazatbeir();
  }
  tablazatbeir() {
    this.#list.forEach((elem, index) => {
        new Megjelenitsor(elem,this.tablaElem, index);
        /*txt += "<tr>";
        for (const key in elem) {
            txt += `<td>${elem[key]}</td>`;
            
        }
        txt+= `<td><button type="button" onclick="">✅</button></td><td><button type="button" onclick="">❌</button></td></tr>`;
        txt += "</tr>";*/

    });
  }
}
export default Megjelenites;
