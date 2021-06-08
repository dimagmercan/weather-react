import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from React</p>
        <Weather city="tokyo" />
      </header>
    </div>
  );
}

export default App;
