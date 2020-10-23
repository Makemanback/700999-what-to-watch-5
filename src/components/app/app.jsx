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

const App = ({title, genre, year, films}) => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main title={title} genre={genre} year={year} films={films}/>
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList />
        </Route>
        <Route exact path='/films/:id'>
          <Film films={films}/>
        </Route>
        <Route exact path='/films/:id/details'>
          <FilmDetails films={films} />
        </Route>
        <Route exact path='/films/:id/reviews'>
          <FilmReviews films={films} />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview films={films} />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;

