import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity="Hyderabad" />
          </div>
          <footer>
            Open-source code by tauqeer_sayeed on {""}
            <a
              href="https://github.com/TauqeerSayeed/Weather_App"
              target="_blank"
            >
              <strong>Github</strong>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
