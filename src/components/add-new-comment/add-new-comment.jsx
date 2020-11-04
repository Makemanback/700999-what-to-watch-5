import React, {PureComponent, Fragment} from "react";

const RADIO_NUMBERS = [1, 2, 3, 4, 5];
class AddNewComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      review: ``,
      rating: null
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);

  }

  _handleChange(evt) {
    this.setState({
      review: evt.target.value
    });
  }

  _handleRatingChange(evt) {
    this.setState({
      rating: Number(evt.target.value)
    });
  }

  render() {
    const {review, rating} = this.state;

    return (
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">

            {RADIO_NUMBERS.map((item) => (
              <Fragment key={item}>
                <input onChange={this._handleRatingChange} className="rating__input" id={`star-${item}`} type="radio" name="rating" value={item} checked={rating === item} />
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </Fragment>
            ))
            }

          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this._handleChange} value={review}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>

    );
  }
}

export default AddNewComment;
