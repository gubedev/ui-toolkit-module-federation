import "./App.css";
import Button from "remoteApp/Button";
import Hero from "remoteApp/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="card">
        <Button />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
