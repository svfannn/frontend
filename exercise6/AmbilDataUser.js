function AmbilDataUser() {
    fetch("https://reqres.in/api/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  export default AmbilDataUser;
  