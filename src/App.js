import logo from "./logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "./screens/Form";
import Table from "./screens/Table";
import "./App.css";
import { MyChallengeProvider } from "./provider";
import { useGetToken } from "./hooks/useGetToken";

function Home() {
  let navigate = useNavigate();
  const { getToken } = useGetToken();

  const handleStartHere = async () => {
    await getToken();
    navigate("/form");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>NewCombin Challenge by Bruno Diaz</p>
        <button onClick={handleStartHere} className="App-link-button">
          Start here!
        </button>
      </header>
    </div>
  );
}

function App() {
  return (
    <MyChallengeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="table" element={<Table />} />
      </Routes>
    </MyChallengeProvider>
  );
}

export default App;
