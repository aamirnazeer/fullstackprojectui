import { useSelector, useDispatch } from "react-redux";
import { apiCom } from "./redux/mainState";

import apiURL from "./config";

import "./App.css";

const api = apiURL.apiURL

function App() {
  const data = useSelector((state) => state.main.data);
  const dispatch = useDispatch();

  
  const apiCall = () => {
    dispatch(apiCom())
  }

  const apicall2 = () => {
    fetch(api)
      .then(response => response.text())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <button onClick={apiCall}>click me</button>
      <button onClick={apicall2}>hdh</button>
      <p>{data}</p>
    </div>
  )
}

export default App;
