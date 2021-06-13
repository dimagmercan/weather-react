import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
      </header>

      <Search />

      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/dimagmercan/" target="_blank">
          Dimag Mercan
        </a>{" "}
        and is{" "}
        <a href="https://github.com/dimagmercan/weather-react" target="_blank">
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
