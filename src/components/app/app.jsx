import React from "react";
import PropTypes from "prop-types";
import MainComponent from "../main/main";


const App = (props) => {
  const {title, genre, year} = props;

  return (
    <MainComponent title={title} genre={genre} year={year}/>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default App;
