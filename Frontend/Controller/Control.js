import DataService from "../Model/DataService.js";
import UrlapModel from "../Model/urlapModel.js";
import Megjelenites from "../View/Megjelenites.js";
import UrlapView from "../View/UrlapView.js";



class Control{
    constructor(){
        const DATA = new DataService();
        DATA.getAxios("http://localhost:8000/api/writers",this.kiir);
        //DATA.postAxios("http://localhost:8000/api/writers");
        /* const URLAPMODEL = new UrlapModel();
        const URLAPVIEW = new UrlapView();
        $(window).on("submit",function (event) {
            DATA.postAxios("http://localhost:8000/api/writers",event.detail);
        }) */
    }
    kiir(lista){
        console.log(lista);
        new Megjelenites(lista,$("article"));
    }
}
export default Control