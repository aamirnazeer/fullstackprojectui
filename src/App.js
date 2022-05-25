import Api from "./config";
import { useQuery } from "react-query";

const api = Api();

function App() {
  const initialWorker = async () => {
    const res = await fetch(`${api}`)
    return res.text()
  };

  const { data, status } = useQuery(`initial`, initialWorker);
  return (
    <div className="App">
      {(status === `success`) && <div>{data}</div>}
      {(status === `loading`) && <div>...loading</div>}
      {(status === `error`) && <div>error</div>}

    </div>
  );
}

export default App;
