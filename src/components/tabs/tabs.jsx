import React from "react";
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

const Tabs = ({location}) => {

  return (
    <ul className="movie-nav__list">
      <li className={location.pathname === `/films/22` ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`}>
        <Link to="/films/22" className="movie-nav__link">Overview</Link>
      </li>
      <li className={location.pathname === `/films/22/details` ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`}>
        <Link to="/films/22/details" className="movie-nav__link">Details</Link>
      </li>
      <li className={location.pathname === `/films/22/reviews` ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`}>
        <Link to="/films/22/reviews" className="movie-nav__link">Reviews</Link>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Tabs);
