//import 'whatwg-fetch' commented out because the tests need fetch in the form below

const React = require('react')
const MovieReviews = require('./MovieReviews')
const { fetch } = require('whatwg-fetch')
let search_url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="
let api_key = "5a7e4486b3fe4e0abd67c5a796046760"

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }
  componentWillMount(){
    let that = this
    let term = "action"
    let finalUrl = search_url + term + "&api-key=" + api_key
    debugger
    fetch(finalUrl).then((response) => { return response.json() }).then((result) => {that.setState({reviews: result.results})})
  }
  render(){
    return(
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
module.exports = SearchableMovieReviewsContainer
