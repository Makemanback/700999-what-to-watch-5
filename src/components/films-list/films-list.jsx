import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from '../small-movie-card/small-movie-card';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: ``
    };
  }

  render() {
    const films = this.props.films;

    return (
      films.map(({title, image}, i) => {
        return (
          <SmallMovieCard title={title} image={image} key={`${i}-${image.src}`}/>
        );
      })
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired
};

export default FilmsList;
