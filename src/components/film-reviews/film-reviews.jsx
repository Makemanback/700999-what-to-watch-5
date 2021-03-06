import React, {Fragment} from "react";
import Footer from '../footer/footer';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs';
import Review from '../review/review';
import SimilarFilms from '../similar-films/similar-films';

const FilmReviews = ({image, title, genre, released, reviews, films}) => {
  const startReviews = reviews.slice(0, Math.round((reviews.length / 2)));
  const endReviews = reviews.slice(Math.round((reviews.length / 2)));

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={image} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs />
              </nav>

              <div className="movie-card__reviews movie-card__row">
                {reviews.length === 1 ? <div className="movie-card__reviews-col">
                  {reviews.map(({description, author, rating, date, id}) => (
                    <Review author={author} rating={rating} date={date} id={id} description={description} key={id} />
                  ))}
                </div> :
                  <Fragment>
                    <div className="movie-card__reviews-col">
                      {startReviews.map(({description, author, rating, date, id}) => (
                        <Review author={author} rating={rating} date={date} id={id} description={description} key={id} />
                      ))}
                    </div>
                    <div className="movie-card__reviews-col">
                      {endReviews.map(({description, author, rating, date, id}) => (
                        <Review author={author} rating={rating} date={date} id={id} description={description} key={id} />

                      ))}
                    </div>
                  </Fragment>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarFilms genre={genre} films={films} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};


FilmReviews.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default FilmReviews;
