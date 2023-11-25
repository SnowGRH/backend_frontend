class Megjelenitsor {
    #obj = {};
    #index;
    constructor(obj, elem, index) {
      this.#obj = obj;
      this.elem = elem;
      this.#index = index;
      this.#sor();
      this.sorElem = this.elem.children("tr:last-child");
      this.KivalasztElem = this.sorElem.children("td").children(".Kivalaszts");
      this.KivalasztElem.on("click", () => {
          this.#esemenyTrigger("Kivalaszts");
      });
  
    }
    #sor() {
      let txt = ` 
      <div class="w3-card-4 w3-dark-grey marginCard" style="width:25%">
      <div class="w3-container w3-center">`;

        txt += `<h3>Termék:${this.#obj.nev} </h3>`;
       
 
      txt+= `<img src="kep/teszt.png" alt="Avatar" style="width:40%">`;
      
      txt += `<h2>Születés éve:${this.#obj.szul}</h2>`;
      txt += `<button class="w3-button w3-green">Kiválasztás</button>`;
          
      txt += "</div></div>";
      this.elem.append(txt);
    }
    #esemenyTrigger(esemenyneve) {
      const esemenyem = new CustomEvent(esemenyneve, { detail: this.#obj });
      window.dispatchEvent(esemenyem);
    }
  }
  export default Megjelenitsor;
  