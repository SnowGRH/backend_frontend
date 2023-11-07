class Megjelenites {
    #lista = [];
  constructor(lista, elem) {
    this.#lista = lista;
    elem.html('<table>');
    this.tablaElem = elem.children("table");
    this.tablazatbeir();
  }
  tablazatbeir() {
    let txt = "<tr><td>Nev:</td><td>Szulév:</td></tr>";
    for (let index = 0; index < this.#lista.length; index++) {
        txt += `<tr><td>${this.#lista[index].nev} </td><td>${this.#lista[index].szul}</td></tr>`;
    }
    console.log(txt);
    this.tablaElem.append(txt);
  }
}

export default Megjelenites;
