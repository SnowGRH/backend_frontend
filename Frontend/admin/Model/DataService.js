class DataService {
  
  #list={};
  constructor(){
    axios.defaults.baseURL = "https://localhost:8000/";
  }
  getdata(url, callback) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        callback(response.data);  
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  
  postAxios(url,data){
    axios.post(url,data)
      .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.log("Error",error);
      });
  }
  deleteAxiosData(url,id){
  axios.delete(url+'/'+id)
  .then(function(response){
    location.reload();
    console.log("resp",response);
  })
  .catch((error)=>{
    console.log("hiba",error);
  })
}
updateAxiosData(url,id,obj){
  axios.put(url+'/'+id,obj)
  .then(function(response){
    location.reload();
    console.log("resp",response);
  })
  .catch((error)=>{
    console.log("hiba",error);
  })
}

getlista(){
  return this.response.data;
}



}

export default DataService;
