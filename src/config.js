const hostname = window && window.location && window.location.hostname;

const projectAPI = () => {
  const apiURL = "http://localhost:3001";
  // const apiURL = 'https://fullstackprojectapi.herokuapp.com'

  if (hostname === "https://fullstackproject-peach.vercel.app") {
    apiURL = "https://fullstackprojectapi.herokuapp.com";
  }
  return apiURL;
};

export default {
	apiURL: projectAPI()
};