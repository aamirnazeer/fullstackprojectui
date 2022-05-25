const Api = () => {
  const hostname = window.location.hostname;
  let apiVar = "blank";

  if (hostname.includes(`localhost`)) {
    apiVar = `http://localhost:3001/`;
    // apiVar = `https://fullstackprojectapi.herokuapp.com/`;
  }

  if (hostname.includes(`vercel`)) {
    apiVar = `https://fullstackprojectapi.herokuapp.com/`;
  }
  return apiVar;
};

export default Api;
