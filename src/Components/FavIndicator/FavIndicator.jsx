import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setUserName: username =>
    dispatch({ type: "SET_USER_NAME", payload: username }),
});

class FavIndicator extends Component {
  state = {
    showModal: false,
    username: null,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <>
        <div className="cart mt-2 ml-auto">
          {this.props.user && this.props.user.username ? (
            <>
              <span className="mr-2">
                Welcome, <strong>{this.props.user.username}</strong>
              </span>
              <Link to={`/favs`}>   <Button
                variant="secondary"
                onClick={() => this.props.history.push("/favs")}
              >
                <FontAwesomeIcon icon={faHeart} className="input-icon-design icon-padding" />
                <span className="ml-2">{this.props.favourites.jobs.length}</span>
              </Button> </Link>
            </>
          ) : (
            <Button
            variant="secondary"
              onClick={() => this.setState({ showModal: true })}
            >
            <FontAwesomeIcon icon={faSignInAlt} className="input-icon-design icon-padding" />

              Login
            </Button>
          )}
        </div>
        <Modal show={this.state.showModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mt-3">
              <FormControl
                aria-label="user"
                onChange={e =>
                  this.setState({ username: e.currentTarget.value })
                }
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.props.setUserName(this.state.username);
                this.toggleModal();
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FavIndicator)
);
