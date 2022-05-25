const Api = () => {
  const hostname = window.location.hostname;
  let apiVar = "blank";

  if (hostname === `localhost`) {
    apiVar = `http://localhost:3001/`;
    // apiVar = `https://fullstackprojectapi.herokuapp.com/`;
  }

  if (hostname === `https://fullstackproject-peach.vercel.app/`) {
    apiVar = `https://fullstackprojectapi.herokuapp.com/`;
  }
  console.log(hostname)
  return apiVar;
};

export default Api;
