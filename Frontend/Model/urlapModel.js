import {urlapleiro} from "./urlapleiro.js";
class Model{
    #leiro = {};
    constructor() {
      this.#leiro = urlapleiro;
    }
    get leiro() {
      return { ...this.#leiro };
    }
  
}
export default Model;