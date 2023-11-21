import DataService from "../Model/DataService.js";
import UrlapModel from "../Model/urlapModel.js";
import Megjelenites from "../View/Megjelenites.js";
import UrlapView from "../View/UrlapView.js";
import Info from "../View/info.js";



class Control{
    constructor(){
        const DATA = new DataService();
        const MODELEK = new UrlapModel();

        this.Dataservice = new DataService;
       
        new UrlapView(MODELEK.leiro,$(".ujadat"));
        this.Dataservice.getdata("model/adat.json",this.Megjelenites);
    
        DATA.getdata("http://localhost:8000/api/writers",this.kiir);
        //DATA.postAxios("http://localhost:8000/api/writers");

        
        $(window).on("submit",function (event) {
            DATA.postAxios("http://localhost:8000/api/writers",event.detail);
        })
        $(window).on("delete",function (event) {    
            DATA.deleteAxiosData("http://localhost:8000/api/delete", event.detail.id);
                /* DATA.deleteAxiosData("http://localhost:8000/api/delete", DATA); */
        })
        $(window).on("settings",function (event) {    
            let obj = event.detail;
            console.log(obj);
             new Info(obj,$("body"));
             $(window).on("settingfel",function (event) {    
                console.log(event.detail);
                DATA.updateAxiosData("http://localhost:8000/api/update",obj.id,event.detail);
    
                    /* DATA.deleteAxiosData("http://localhost:8000/api/delete", DATA); */
            })
        })


        }
    
    kiir(lista){
        console.log(lista);
        new Megjelenites(lista,$(".adat"));
    }
}
export default Control