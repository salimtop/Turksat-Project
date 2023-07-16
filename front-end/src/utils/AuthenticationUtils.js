import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1';
axios.defaults.headers.common['Authorization'] = undefined;

export const GetAuthorization = (user, updateLoginStatus) => {
  
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = {...user};

  const api = Object.keys(body).length > 2 ? "register" : "authenticate"

  axios.post(axios.defaults.baseURL + "/auth/" + api, body, config)
  .then(response => {
      axios.defaults.headers.common['Authorization'] = "Bearer"+response.data.token;
      updateLoginStatus(true);
  })
  .catch(error => {
    updateLoginStatus(false);
   // console.error('Error:', error);
  });

}


  