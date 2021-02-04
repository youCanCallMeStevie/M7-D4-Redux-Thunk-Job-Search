import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import "../Job/Job.css";

const mapStateToProps = state => {
  console.log("State FavList", state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  removeFromFavs: obj =>
    dispatch({ type: "REMOVE_JOB_FROM_FAVS", payload: obj }),
});

function Job(props) {
  const { job } = props;
  console.log("ComponentJob: props", props); //single


  return (
    <div>
      <Col md={3} className="my-3">
        <Card className="">
          <Card.Img
            variant="top"
            src={
              job?.company_logo
                ? job?.company_logo
                : "http://placehold.it/100x100"
            }
            className="company-logo-card"
          />
          <Card.Body className="company-card">
            <Card.Title>{job?.company}</Card.Title>
            <Link to={`/details/${job.id}`}>
              <Button variant="primary" className="every-button">
                {" "}
                <FontAwesomeIcon icon={faForward} className="icon-padding" />
                See more
              </Button>
            </Link>
            {props.match.path == "/favs" && (
              <Button variant="primary" className="every-button" onClick={
                ()=> props.removeFromFavs(job)}>
                {" "}
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon-padding"
                  style={{ color: "red" }}
                  
                />
                Remove
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Job));
