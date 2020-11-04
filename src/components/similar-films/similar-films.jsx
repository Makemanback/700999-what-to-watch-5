import React from "react";
import PropTypes from "prop-types";
import filmProp from '../film/film.prop';

const SimilarFilms = ({films, genre}) => {

  const relatedFilms = films.filter(({genre: movieGenre}) => movieGenre === genre).slice(0, 4);
  return (
    <div className="catalog__movies-list">
      {relatedFilms.map(({image, title, id}) => {
        return (
          <article className="small-movie-card catalog__movies-card" key={id}>
            <div className="small-movie-card__image">
              <img src={image} alt={title} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">{title}</a>
            </h3>
          </article>
        );
      }) }

    </div>

  );
};

SimilarFilms.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  genre: PropTypes.string.isRequired
};

export default SimilarFilms;
