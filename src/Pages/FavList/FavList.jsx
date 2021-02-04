import React, { Component } from "react";
import {  Container } from "react-bootstrap";
import { connect } from "react-redux";
import uniqid from "uniqid";
import Job from "../../Components/Job/Job";

const mapStateToProps = state => {
  console.log("State FavList", state);
  return state;
};



class FavList extends Component {
  render() {
    const favourites = this.props.favourites.jobs;
    return (
      <Container>
        <div className="mt-5 border-top border-secondary">
          <h2 className="my-3">
            {favourites.length > 0
              ? `Showing ${favourites.length} favorite ${
                  favourites.length === 1 ? "job" : "jobs"
                }`
              : "You have no favorite jobs"}
          </h2>
          <hr />
          {favourites &&
            favourites.map(job => (
              <div key={uniqid}>
                <Job job={job} history={this.props.history} />
              </div>
            ))}
        </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(FavList);
