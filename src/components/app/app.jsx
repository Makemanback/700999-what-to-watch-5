import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';


const App = ({name, genre: movieGenre, year, films}) => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main name={name} movieGenre={movieGenre} year={year} films={films}/>
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList />
        </Route>
        <Route exact path='/films/:id' render={() => {
          const film = films[0];
          return <Film film={film} films={films} />;
        }}>
        </Route>
        <Route exact path='/films/:id/details' render={() => {
          return <FilmDetails film={films[0]} films={films} />;
        }}>
        </Route>
        <Route exact path='/films/:id/reviews' render={() => {
          const {image, title, genre, released, reviews} = films[0];
          return <FilmReviews image={image} title={title} genre={genre} released={released} reviews={reviews} films={films} />;
        }}>

        </Route>
        <Route exact path='/films/:id/review' render={() => {

          const {title, image} = films[0];
          return <AddReview title={title} image={image}/>;
        }}>
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;

