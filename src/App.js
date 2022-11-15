import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Info from "./pages/Info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}

export default App;
