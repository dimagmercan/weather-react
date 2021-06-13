import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
              rel="noreferrer"
            >
              Smashicons
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              www.flaticon.com
            </a>
          </div>
          <div>
            <a
              href="https://github.com/dimagmercan"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by{" "}
            <a
              href="https://www.linkedin.com/in/dimagmercan/"
              target="_blank"
              rel="noreferrer"
            >
              Dimag Mercan
            </a>
          </div>
          <div>
            Hosted by{" "}
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              Netlify
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
