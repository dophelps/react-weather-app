import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <h1> Weather App</h1>
        <footer>
          This project was coded by Dani Phelps and it is
          <a
            href="https://github.com/dophelps/react-weather-app"
            target="blank"
          >
            {" "}
            opened-source on Github
          </a>
          and
          <a href="https://playful-fenglisu-492f6a.netlify.app/" target="blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
