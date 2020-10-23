import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {image, title} = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={image} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }

  handleMovieHover(evt) {
    evt.preventDefault();

  }

}

SmallMovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SmallMovieCard;
