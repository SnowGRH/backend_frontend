
import DataService from "../Model/DataService.js";
import Megjelenites from "../View/Megjelenites.js";
class Control{

constructor(){
    const DATA = new DataService();
    DATA.getdata("http://localhost:8000/api/writers",this.kiir);
}
kiir(lista){
    console.log(lista);
    new Megjelenites(lista,$(".adatok"));
}
}
export default Control