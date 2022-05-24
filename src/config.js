const hostname = window && window.location && window.location.hostname;

const projectAPI = () => {
  let apiURL = "";
  if (hostname === "localhost:3000") {
    apiURL = "http://localhost:3001";
  }
  // const apiURL = 'https://fullstackprojectapi.herokuapp.com'

  if (hostname === "fullstackproject-peach.vercel.app") {
    apiURL = "https://fullstackprojectapi.herokuapp.com";
  }
  return apiURL;
};

export default {
  apiURL: projectAPI(),
};
