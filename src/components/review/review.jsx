import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Review = (props) => {

  const {id, description, author, rating, date} = props;
  return (
    <div className="review" key={id}>
      <blockquote className="review__quote">
        <p className="review__text">{description}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={moment(date).format()}>{moment(date).format(`MMMM Do YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );

};

Review.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default Review;
