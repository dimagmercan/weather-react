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
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
            target="_blank"
          >
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">
            www.flaticon.com
          </a>
        </div>
        <div>
          <a href="https://github.com/dimagmercan" target="_blank">
            Open-source code{" "}
          </a>
          by{" "}
          <a href="https://www.linkedin.com/in/dimagmercan/" target="_blank">
            Dimag Mercan
          </a>
        </div>
        <div>
          Hosted by{" "}
          <a href="https://www.netlify.com/" target="_blank">
            Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}
