import React from "react";
import { Button, Image } from "react-bootstrap";
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
    <>
<tr>
      <td>
        <Image src={
              job?.company_logo
                ? job?.company_logo
                : "http://placehold.it/50x50"
            }
            className="company-logo-card" thumbnail style={{width: "25px"}}/></td>
      <td>{job?.company}</td>
      <td><Link to={`/details/${job.id}`}>
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
              </td>
    </tr>
</>
  );
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Job));
