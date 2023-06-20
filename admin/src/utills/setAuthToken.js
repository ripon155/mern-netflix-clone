import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = token;
  } else {
    delete axios.defaults.headders.common["authorization"];
  }
};

export default setAuthToken;
