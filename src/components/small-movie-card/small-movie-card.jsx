import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideo: false
    };
    this._handleHoverCard = this._handleHoverCard.bind(this);
    this._handleHoverOutCard = this._handleHoverOutCard.bind(this);

    this.timeOutId = null;
  }

  _handleHoverCard() {
    if (this.timeOutId !== null) {
      clearTimeout(this.timeOutId);
    }

    this.timeOutId = setTimeout(
        () => {
          this.setState({
            isVideo: true
          });
        }, 1000
    );
  }

  _handleHoverOutCard() {
    clearTimeout(this.timeOutId);
    this.timeOutId = null;
    this.setState({
      isVideo: false
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutId);
  }

  render() {
    const {image, title} = this.props;
    return (
      <article onMouseOver={this._handleHoverCard} onMouseLeave={this._handleHoverOutCard}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          {this.state.isVideo ? <video autoPlay src='https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4' alt={title} width="280" height="175"></video> : <img src={image} alt={title} width="280" height="175" />}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to="films/22">{title}</Link>
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
