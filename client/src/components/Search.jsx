import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentGenre: null // when set properly currentGenre should be an id number string
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios({
      method: 'get',
      url: '/movies/genres',
    })
      .then(response => {
        // console.log('genre fetch data:', response.data);
        if (this.state.currentGenre === null) {
          this.setState({
            genres: response.data,
            currentGenre: response.data[0].id.toString()
          });
        } else {
          this.setState({genres: response.data});
        }
      })
      .catch(err => {
        console.log('error fetching genre list:', err);
      });
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select onChange={(e)=>{
          this.setState({currentGenre: e.target.value})
          }}>
          {this.state.genres.map((e)=>{
            return (<option key={e.id} value={e.id}>{e.name}</option>)
          })}
        </select>
        <br/><br/>

        <button onClick={() => {
          console.log('click event', this.state.currentGenre);
          this.props.getMovies(this.state.currentGenre);
          }}>
        Search
        </button>
      </div>
    );
  }
}

export default Search;