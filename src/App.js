import { useSelector, useDispatch } from "react-redux";
import { apiCom } from "./redux/mainState";

import currentAPI from "./config";

import "./App.css";

function App() {
  const data = useSelector((state) => state.main.data);
  const dispatch = useDispatch();

  
  const apiCall = () => {
    dispatch(apiCom())
  }

  const apicall2 = () => {
    fetch(currentAPI.currentAPI)
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
