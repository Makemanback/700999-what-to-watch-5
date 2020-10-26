import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const Settings = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      name={Settings.name}
      genre={Settings.genre}
      year={Settings.year}
      films={films}
    />,
    document.querySelector(`#root`)
);
