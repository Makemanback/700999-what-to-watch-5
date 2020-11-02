import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from '../small-movie-card/small-movie-card';

const FilmsList = ({films}) => {
  return (
    films.map(({title, image, id}) => {
      return (
        <SmallMovieCard title={title} image={image} key={id}/>
      );
    })
  );
};


FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
};

export default FilmsList;
