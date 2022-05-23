const hostname = window && window.location && window.location.hostname;

const projectAPI = () => {
  // const apiURL = "http://localhost:3001/api";
  const apiURL = 'https://fullstackprojectapi.herokuapp.com/api'

  if (hostname === "https://fullstackproject-peach.vercel.app/api") {
    apiURL = "https://fullstackprojectapi.herokuapp.com/api";
  }
  return apiURL;
};

export default {
	apiURL: projectAPI()
};