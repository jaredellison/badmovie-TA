import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };

    // Bind event handler methods to be passed as props
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(genreId = '37') {
    // make an axios request to your server on the GET SEARCH endpoint
    console.log('getMovies called! with id:', genreId)
    axios({
      method: 'get',
      url: '/movies/search',
      params: {
        genreId: genreId
      }
    })
    .then(response => {
      // console.log('search fetch data:', response.data);
      this.setState({movies: response.data.results});
    })
    .catch(err => {
      console.log('error fetching search:', err);
    });
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));