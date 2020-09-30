import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      title={Settings.title}
      genre={Settings.genre}
      year={Settings.year}
    />,
    document.querySelector(`#root`)
);
