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
}

export default DataService;
