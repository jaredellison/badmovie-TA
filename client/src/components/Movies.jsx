import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map(e => {
          {/* Not all movies have images so establish a default */}
          let imageTag = '';
          if (!!e.poster_path || !!e.backdrop_path) {
            imageTag = (
              <img
                src={
                  'http://image.tmdb.org/t/p/w185/' +
                  (e.poster_path ? e.poster_path : e.backdrop_path)
                }
              />
            );
          }

          let releaseDate =
            !!e.release_date &&
            typeof e.release_date === "string" &&
            e.release_date.length > 0 ?
            e.release_date.split('-')[0] : '?';

          return (
            <li className="movie_item" key={e.id}>
              {imageTag}
              <div className="movie_description">
                <h2>{e.title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{releaseDate}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{e.vote_average}</span>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;
