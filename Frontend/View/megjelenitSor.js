class Megjelenitsor{
    #obj ={}
    #index 
    constructor(obj,elem, index){
        this.#obj=obj;
        this.elem =elem;
        this.#index = index;
        this.#sor();
        this.sorElem = this.elem.children("tr:last-child");
        this.KeszElem = this.sorElem.children("td").children(".kesz");
        this.MegseElem = this.sorElem.children("td").children(".megse");
        this.MegseElem.css("display", "none");
        this.RemoveElem = this.sorElem.children("td").children(".remove")
        if (this.#obj.kesz == true) {
            this.sorElem.css("background-color","green");
            this.MegseElem.css("display", "block");
            this.KeszElem.css("display", "none");
        }
        else{
            this.sorElem.css("background-color","white");
            this.KeszElem.css("display", "block");
            this.MegseElem.css("display", "none");
        }
        this.KeszElem.on("click",()=>{
            this.#esemenyTrigger("kesz");
        })
        this.MegseElem.on("click",()=>{
            this.#esemenyTrigger("megse")
        })
        this.RemoveElem.on("click",()=>{
            this.sorElem.remove();
            
            this.#esemenyTrigger("delete");
        })
    }
    #sor(){
       let txt = "<tr>";
        for (const key in this.#obj) {
            txt += `<td>${this.#obj[key]}</td>`;
            
        }
        txt += `<td><button type="button" class="kesz">✅</button><button type="button" class="megse">❌</button></td><td><button type="button" class="remove">Törlés</button></td></tr>`;
        txt += "</tr>";
        this.elem.append(txt);
    }
    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,{detail:this.#obj['id']});
        window.dispatchEvent(esemenyem);
    }
}
export default Megjelenitsor