class Megjelenitsor {
  #obj = {};
  #index;
  constructor(obj, elem, index) {
    this.#obj = obj;
    this.elem = elem;
    this.#index = index;
    this.#sor();
    this.sorElem = this.elem.children("tr:last-child");
    this.SettingElem = this.sorElem.children("td").children(".settings");

    this.RemoveElem = this.sorElem.children("td").children(".remove");
    this.SettingElem.on("click", () => {
        this.#esemenyTrigger("settings");
    });

    this.RemoveElem.on("click", () => {
      this.#esemenyTrigger("delete");
    });
  }
  #sor() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }
    txt += `<td><button type="button" class="settings fa fa-gear"></button>
        <td><button type="button" class="remove fa fa-trash"></button></td>`;
    txt += "</tr>";
    this.elem.append(txt);
  }
  #esemenyTrigger(esemenyneve) {
    const esemenyem = new CustomEvent(esemenyneve, { detail: this.#obj });
    window.dispatchEvent(esemenyem);
  }
}
export default Megjelenitsor;
