class Info {
    #urlap={};
    #obj;
    constructor(obj, szuloElem) {
        this.#obj = obj;

        this.#osszerak(szuloElem);
        this.SettingokElem = $(".setting_ok");
        this.nevElem = $("#nev2");
        this.szulElem = $("#szul2");
        this.SettingokElem.on("click", (event) => {
            event.preventDefault();
            this.#urlap['nev'] = this.nevElem.val();
            this.#urlap['szul'] = this.szulElem.val();
            this.#esemenyTrigger("settingfel");
        });
    }
    #osszerak(szuloElem){
        let text = `<form> 
        <div class="info"><button class="button2">❌</button><tr>
        <label for="nev2">Név</label><br>
        <input type="text" id="nev2" name="nev2" value="${this.#obj.nev}"> <br>
        <label for="szul2">Születési év </label><br>
        <input type="number" value="${this.#obj.szul}" id="szul2" name="szul2" ><br><br>
        <input type="submit" class="setting_ok" value="küldés">
        </form>
                          
 `;

        text += `</div>`;
        szuloElem.append(text);
        this.infoElem = $(".info");
        this.bezarElem = $(".button2");
        this.bezarElem.on("click", () => this.infoElem.hide());
    }
    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail: this.#urlap});
        window.dispatchEvent(esemenyem);
    }
}
export default Info;