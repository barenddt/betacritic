import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let title = this.props.search.selectedTitle;
    return (
      <div className="container">
        {title ? (
          <div className="row">
            <div className="col-md-8 title-left">
              <img
                className="title-poster"
                className="poster-title"
                src={title.Poster}
              />
              <div className="title-left-right">
                <h3>{title.Title}</h3>
                <p className="rated">
                  <span>{title.Rated}</span>{" "}
                  {`${title.Production} | Released: ${title.Released}`}
                </p>
                <p className="desc-item">
                  <span>Summary:</span> {title.Plot}
                </p>
                <p className="desc-item">
                  <span>Director:</span> {title.Director}
                </p>
                <p className="desc-item">
                  <span>Starring:</span> {title.Actors}
                </p>
                <p className="desc-item">
                  <span>Writers:</span> {title.Writer}
                </p>
                <p className="desc-item">
                  <span>Runtime:</span> {title.Runtime}
                </p>
                <p className="desc-item">
                  <span>Genre:</span> {title.Genre}
                </p>
                <p className="desc-item">
                  <span>Awards:</span> {title.Awards}
                </p>
                <p className="desc-item">
                  <span>Box Office:</span> {title.BoxOffice}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="title-right">
                <div className="score">
                  <div className="num num-beta">{title.Metascore}</div>
                  Betascore
                </div>
                <div className="score">
                  <div className="num num-imdb">{title.imdbRating}</div>
                  IMDb Rating
                </div>
                <div className="score">
                  <div className="num num-rt">
                    {title.Ratings[1]
                      ? title.Ratings[1].Value.replace("%", "")
                      : "N/A"}
                  </div>
                  Rotten Tomatoes
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading-container">
            <div className="spinner">
              <div className="bounce1" />
              <div className="bounce2" />
              <div className="bounce3" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps)(Title);
