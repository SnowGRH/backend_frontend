class DataService {
  getAxios(url, callback) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        callback(response.data)
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
    axios.post(url,data, {  
        headers:{
            "X-CSRF-TOKEN": response.headers["x-csrf-token"],
        },
      })
      .then(function (response) {
        console.log("RESP",response);
      })
      .catch(function (error) {
        console.log("Error",error);
      });
  }
}

export default DataService;
