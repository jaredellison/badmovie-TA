import React from 'react';
import ReactDOM from 'react-dom';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false
    };

    // Bind event handler methods to be passed as props
    this.getMovies = this.getMovies.bind(this);
    this.getFaves = this.getFaves.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genreId) {
    axios({
      method: 'get',
      url: '/movies/search',
      params: {
        genreId: genreId
      }
    })
      .then(response => {
        this.setState({ movies: response.data.results });
      })
      .catch(err => {
        console.log('error fetching search:', err);
      });
  }

  getFaves() {
    axios({
      method: 'get',
      url: '/movies/favorites',
    })
    .then(response => {
      this.setState({ favorites: response.data});
    })
    .catch(err => {
      console.log('error fetching search:', err);
    });
  }

  saveMovie(movieId) {
    let targetMovie = this.state.movies.filter((e) => {return e['id'].toString() === movieId})[0];
    axios({
      method: 'post',
      url: '/movies/save',
      data: targetMovie
    })
      .then(response => {
        console.log('favorite saved sucessfully');
      })
      .catch(err => {
        console.log('error saving favorite:', err);
      });
  }


  deleteMovie(movieId) {
    let targetMovie = this.state.favorites.filter((e) => {return e['id'].toString() === movieId})[0];
    axios({
      method: 'delete',
      url: '/movies/delete',
      data: targetMovie
    })
      .then(response => {
        console.log('favorite deleted sucessfully');
      })
      .then(() => {
        this.getFaves();
      })
      .catch(err => {
        console.log('error deleting favorite:', err);
      });
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getFaves={this.getFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));