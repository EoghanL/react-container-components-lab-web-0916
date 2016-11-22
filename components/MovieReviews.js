const React = require('react')

let api_key = "5a7e4486b3fe4e0abd67c5a796046760"
let search_url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" // APPEND SEARCH TERM

const MovieReviews = ( props ) => {
  debugger
  let movieList = props.reviews.map( (movie) => {
    return (
      <div className = "review">
        <h1>{movie.display_title}</h1>
        <h3>{movie.headline}</h3>
        <h4>{movie.byline}</h4>
        <p>{movie.summary_short} Rated: {movie.mpaa_rating}</p>
      </div>
    )
  }
  )
  return (
    <div className = 'review-list'>
      {movieList}
    </div>
  )

};
MovieReviews.defaultProps = {
  reviews: []
}
module.exports = MovieReviews
