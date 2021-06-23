import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />

        <footer>
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
