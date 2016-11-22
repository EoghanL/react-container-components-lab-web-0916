//import 'whatwg-fetch' commented out because the tests need fetch in the form below

const React = require('react')
const MovieReviews = require("./MovieReviews")
const { fetch } = require('whatwg-fetch')
const allUrl = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=5a7e4486b3fe4e0abd67c5a796046760"

class LatestMovieReviewsContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }
  componentWillMount(){
    let that = this
    fetch(allUrl).then((response) => { return response.json() }).then((result) => {that.setState({reviews: result.results})})
    debugger
  };
  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
module.exports = LatestMovieReviewsContainer
// (res => this.setState({ reviews: JSON.parse(res)}))
// .then((res)=> that.setState({reviews: res.results}))))
